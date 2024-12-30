import NavMobile from "@/components/ui/header/NavMobile";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
      <div className="container flex h-4 items-center max-lg:px-5">
        <Link href={""} className="lg:hidden flex-1 z-2">
          <Image src={"/images/xora.svg"} width={115} height={55} alt="logo" />
        </Link>
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
