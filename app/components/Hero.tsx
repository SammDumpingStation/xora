import MainButton from "@/components/MainButton";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32"
    >
      <div className="container">
        <div className="relative z-2 max-w-512 max-lg:max-w-388">
          <div className="caption small-2 uppercase text-p3">Video Editing</div>
          <h1 className="mb-6 h1 text-p6 uppercase max-lg:mb-7 max-lg:h2 max-md:text-5xl max-md:leading-12">
            Amazingly Simple
          </h1>
          <p className="max-w-440 mb-14 body-1 max-md:mb-10">
            We designed XORA AI Video Editor to be an easy to use, quick to
            learn, and surprisingly powerful.
          </p>
          <MainButton icon="/images/zap.svg">Try it now</MainButton>
        </div>
        <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
          <Image
            src={"/images/hero.png"}
            className="max-lg:h-auto"
            alt="hero"
            width={1230}
            height={1230}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
