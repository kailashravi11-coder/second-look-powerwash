import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
  ComponentPropsWithoutRef
} from "react";

interface MouseEnterContextType {
  isMouseEntered: boolean;
  setIsMouseEntered: React.Dispatch<React.SetStateAction<boolean>>;
}

const MouseEnterContext = createContext<MouseEnterContextType | undefined>(undefined);

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (!context) {
    throw new Error("useMouseEnter must be used within a CardContainer");
  }
  return context;
};

export interface CardContainerProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const CardContainer: React.FC<CardContainerProps> = ({
  children,
  className = "",
  containerClassName = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    // Calculate tilt angle: max ~12-16 degrees for a clean, premium 3D effect
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
    containerRef.current.style.transition = "transform 0.12s ease-out";
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={{ isMouseEntered, setIsMouseEntered }}>
      <div
        className={`w-full [perspective:1000px] ${containerClassName}`}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`w-full relative [transform-style:preserve-3d] transition-all will-change-transform ${className}`}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`w-full [transform-style:preserve-3d] ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

type CardItemProps<T extends React.ElementType = "div"> = {
  as?: T;
  children?: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export const CardItem = <T extends React.ElementType = "div">({
  as,
  children,
  className = "",
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: CardItemProps<T>) => {
  const Tag = as || "div";
  const ref = useRef<HTMLDivElement>(null);
  const { isMouseEntered } = useMouseEnter();

  useEffect(() => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

  return (
    <Tag
      ref={ref}
      className={`transition-transform duration-300 ease-out [transform-style:preserve-3d] will-change-transform ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};
