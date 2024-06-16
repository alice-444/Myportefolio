import axios from "axios";
import { useState, useEffect } from "react";

const SkillsPage = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/skill")
      .then((response) => {
        setSkills(Array.isArray(response.data) ? response.data : []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching skills data:", error);
        setError("Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <section className="text-white" id="skills">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-ribbon-400 to-blue-ribbon-600">
                Skills
              </span>
            </h2>
            {loading ? (
              <p className="text-base lg:text-lg text-blue-ribbon-600">
                Loading...
              </p>
            ) : error ? (
              <p className="text-base lg:text-lg text-red-600">{error}</p>
            ) : (
              skills.length > 0 ? (
                skills.map((skill) => (
                  <div key={skill._id} className="mb-4">
                    <h3 className="text-2xl font-semibold text-blue-ribbon-600">{skill.skill_name}</h3>
                    <p className="text-base lg:text-lg text-blue-ribbon-500">
                      {skill.description}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-base lg:text-lg text-blue-ribbon-600">
                  No skills available
                </p>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
