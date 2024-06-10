import Image from "next/image";
import About from "@/db/models/About.js";
import connectDB from "@/db/mongoConnect.js";

const AboutPage = ({ aboutData }) => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div>
          <Image
            src="/images/about.jpg"
            width={500}
            height={500}
            className="rounded-lg"
            alt="About Me"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-ribbon-400 to-blue-ribbon-600">
              About Me
            </span>
          </h2>
          {aboutData && aboutData.short_bio ? (
            <p className="text-base lg:text-lg text-blue-ribbon-600">{aboutData.short_bio}</p>
          ) : (
            <p className="text-base lg:text-lg text-blue-ribbon-600">Short bio not available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps() {
  try {
    await connectDB();
    const aboutData = await About.findOne();

    return {
      props: {
        aboutData: JSON.parse(JSON.stringify(aboutData)) || {},
      },
    };
  } catch (error) {
    console.error("Error fetching about data:", error.message);
    return {
      props: {
        aboutData: {},
        error: "Please try again later.",
      },
    };
  }
}

export default AboutPage;

