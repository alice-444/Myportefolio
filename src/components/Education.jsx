import axios from "axios";
import { useState, useEffect } from "react";

const EducationPage = () => {
  const [eduData, setEduData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/education")
      .then((response) => {
        setEduData(Array.isArray(response.data) ? response.data : []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching education data:", error);
        setError("Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <section className="text-white" id="education">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-ribbon-400 to-blue-ribbon-600">
                Education
              </span>
            </h2>
            {loading ? (
              <p className="text-base lg:text-lg text-blue-ribbon-600">
                Loading...
              </p>
            ) : error ? (
              <p className="text-base lg:text-lg text-red-600">{error}</p>
            ) : eduData.length > 0 ? (
              eduData.map((edu) => (
                <div key={edu._id} className="mb-4">
                  <h3 className="text-2xl font-semibold text-blue-ribbon-600">
                    {edu.institution}
                  </h3>
                  <p className="text-base lg:text-lg text-blue-ribbon-600">
                    {edu.field_of_study}
                  </p>
                  <p className="text-base lg:text-lg text-blue-ribbon-600">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-blue-ribbon-400">
                    {edu.description}
                  </p>
                  <p className="text-sm text-blue-ribbon-400">
                    {new Date(edu.start_date).toLocaleDateString()} -{" "}
                    {edu.end_date
                      ? new Date(edu.end_date).toLocaleDateString()
                      : "Present"}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-base lg:text-lg text-blue-ribbon-600">
                Education data not available
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;
