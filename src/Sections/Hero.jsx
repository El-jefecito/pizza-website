import banner4 from "../../public/banner4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  return (
    <section
      id="hero"
      className="w-full lg:px-20 lg:py-20 p-3 h-[600px] bg-cover bg-center flex flex-col justify-center items-start gap-8"
      style={{ backgroundImage: `url(${banner4})` }}
    >
      <h1 data-aos="zoom-in" className="text-6xl text-white font-bold">
        Life is combination of Pizza & Magic
      </h1>
      <p data-aos="zoom-in" className="text-xl text-white font-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque minima
        suscipit iure. Quae <br></br> minima sit expedita aut, facere doloribus
        dignissimos nesciunt commodi ipsum.
      </p>
      <button
        data-aos="flip-up"
        className="bg-orange-500 text-lg text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black dark:hover:bg:white dark:hover:text-black"
      >
        ORDER NOW
      </button>
    </section>
  );
}

export default Hero;
