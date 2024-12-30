"use client";
import { useState } from "react";
import { Button } from "../button";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={clsx(
          "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
          isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
        )}
      >
        <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
          <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
            <ul className="flex max-lg:block max-lg:px-12">
              <li className="nav-li">
                <Link href={""} className="nav-styles">
                  features
                </Link>
                <div className="dot" />
                <Link href={""} className="nav-styles">
                  pricing
                </Link>
                <div className="dot" />
              </li>
              <li className="nav-logo">
                <Link
                  href={""}
                  className={clsx(
                    "max-lg:hidden transition-transform duration-500"
                  )}
                >
                  <Image
                    src={"/images/xora.svg"}
                    width={160}
                    height={55}
                    alt="logo"
                  />
                </Link>
              </li>
              <li className="nav-li">
                <Link href={""} className="nav-styles">
                  faq
                </Link>
                <div className="dot" />
                <Link href={""} className="nav-styles">
                  download
                </Link>
                <div className="dot" />
              </li>
            </ul>
          </nav>
          <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
            <Image
              src={"/images/bg-outlines.svg"}
              width={960}
              height={380}
              alt="outline"
              className="relative z-2"
            />
            <Image
              src={"/images/bg-outlines-fill.png"}
              width={960}
              height={380}
              alt="outline"
              className="absolute inset-0 mix-blend-soft-light opacity-5"
            />
          </div>
        </div>
      </div>
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
      >
        <Image
          src={`/images/${isOpen ? "close" : "magic"}.svg`}
          className="object-contain"
          width={18}
          height={18}
          alt="magic"
        />
      </Button>
    </>
  );
};

export default NavMobile;
