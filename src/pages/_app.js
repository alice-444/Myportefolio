import "@/styles/globals.css";
import { Rubik } from "next/font/google";
import ToasterContext from "@/components/ToasterContext.jsx";

const inter = Rubik({ subsets: ["latin"] });

const App = ({ Component, pageProps }) => {
  return (
    <main className={`mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ${inter.className}`}>
       <ToasterContext />
      <Component {...pageProps} />
    </main>
  );
};

export default App;