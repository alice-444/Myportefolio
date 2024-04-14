import Hero from "@/components/Hero.jsx";
import Navbar from "@/components/Navbar.jsx";
import Skills from "@/components/Skills.jsx";
import Success from "@/components/Success.jsx";
import AboutMe from "@/components/aboutMe.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Success />
        <AboutMe/>
        <Skills />
      </main>
    </div>
  );
};

export default Home;
