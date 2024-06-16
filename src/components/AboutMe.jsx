import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";

const AboutPage = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/about")
      .then((response) => {
        setAboutData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div>
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
            {loading ? (
              <p className="text-base lg:text-lg text-blue-ribbon-600">
                Loading...
              </p>
            ) : error ? (
              <p className="text-base lg:text-lg text-red-600">{error}</p>
            ) : (
              <div className="text-base lg:text-lg text-blue-ribbon-600">
                <p className="text-blue-ribbon-600">
                   {aboutData.username}
                </p>
                <p>
                  <strong>Age:</strong> {aboutData.age}
                </p>
                <p>
                  <strong>Location:</strong> {aboutData.location}
                </p>
                <p>
                  <strong>Email:</strong> {aboutData.email}
                </p>
                <p>
                  <strong>Phone:</strong> {aboutData.phone}
                </p>
                <p>
                  <strong>Short Bio:</strong> {aboutData.short_bio}
                </p>
                {aboutData.website && (
                  <p>
                    <strong>Website:</strong>{" "}
                    <a
                      href={aboutData.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {aboutData.website}
                    </a>
                  </p>
                )}
                {aboutData.social_media && (
                  <p>
                    <strong>Social Media:</strong> {aboutData.social_media}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
