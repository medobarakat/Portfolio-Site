import SideBar from "../Components/SideBar";
import NavBar from "../Components/NavBar";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-14">
        <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 dark:bg-black rounded-2xl drop-shadow-2xl lg:w-full md:mx-32 sm:mx-24">
          <SideBar />
        </div>
        <div className="col-span-12 overflow-hidden bg-white lg:col-span-9 dark:bg-black rounded-2xl drop-shadow-2xl lg:w-9/12 md:mx-32 sm:mx-24">
          <NavBar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
