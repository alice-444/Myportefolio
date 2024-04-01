import "@/styles/globals.css";
import { Rubik } from "next/font/google";

const inter = Rubik({ subsets: ["latin"] });

const App = ({ Component, pageProps }) => {
  return (
    <main className={` ${inter.className}`}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;

// flex min-h-screen flex-col items-center justify-between p-24