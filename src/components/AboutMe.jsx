import Image from "next/image";

const About = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.jpg" width={500} height={500} className="rounded-lg"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-ribbon-400 to-blue-ribbon-600">
              About Me
            </span>
          </h2>
          <p className="text-base lg:text-lg text-blue-ribbon-600">Bio</p>
        </div>
      </div>
    </section>
  );
};

export default About;
