import Hero from "@/components/Hero.jsx";
import Navbar from "@/components/Navbar.jsx";
import Skills from "@/components/Skills.jsx";
import Success from "@/components/Success.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Success />
        <Skills />
      </main>
    </div>
  );
};

export default Home;
