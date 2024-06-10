import Skill from "@/db/models/Skill";
import connectDB from "@/db/mongoConnect.js";

const Skills = ({skillData}) => {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-ribbon-400 to-blue-ribbon-600">
              Skills
            </span>
          </h2>
          {skillData && skillData.short_bio ? (
            <p className="text-base lg:text-lg text-blue-ribbon-600">{skillData.skill_name}</p>
          ) : (
            <p className="text-base lg:text-lg text-blue-ribbon-600">skill not available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps() {
  try {
    await connectDB();
    const skillData = await Skill.findOne();

    return {
      props: {
        skillData: JSON.parse(JSON.stringify(skillData)) || {},
      },
    };
  } catch (error) {
    console.error("Error fetching about data:", error.message);
    return {
      props: {
        skillData: {},
        error: "Please try again later.",
      },
    };
  }
}

export default Skills;
