import Link from "next/link";
import { Button } from "./ui/button";
import clsx from "clsx";
import { MouseEventHandler } from "react";
import Image from "next/image";
import Marker from "./Marker";

type Props = {
  icon: string;
  children: React.ReactNode;
  href?: string;
  containerClassName?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  markerFill?: string;
};

const MainButton = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
}: Props) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          <Marker fill={markerFill} />
        </span>
        {icon && (
          <Image
            src={icon}
            width={40}
            height={40}
            alt="circle"
            className="mr-5 object-contain z-10"
          />
        )}
        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
          {children}
        </span>
        <span className="glow-before glow-after"></span>
      </span>
    </>
  );
  return href ? (
    <Link
      href={href}
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
    >
      <Inner />
    </Link>
  ) : (
    <Button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      variant={"ghost"}
      size={"custom"}
      onClick={onClick}
    >
      <Inner />
    </Button>
  );
};

export default MainButton;
