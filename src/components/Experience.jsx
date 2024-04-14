import connectDB from "@/db/mongoConnect.js";
import Experience from "@/db/models/Experience.js";

const ExperiencePage = ({expData}) => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-ribbon-400 to-blue-ribbon-600">
              Experience(s)
            </span>
          </h2>
          {expData && expData.company_name ? (
            <p className="text-base lg:text-lg text-blue-ribbon-600">{expData.company_name}</p>
          ) : (
            <p className="text-base lg:text-lg text-blue-ribbon-600">Experience not available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps() {
  try {
    await connectDB();
    const expData = await Experience.findOne();

    return {
      props: {
        expData: JSON.parse(JSON.stringify(expData)) || {},
      },
    };
  } catch (error) {
    console.error("Error fetching about data:", error.message);
    return {
      props: {
        expData: {},
        error: "Please try again later.",
      },
    };
  }
}

export default ExperiencePage;
