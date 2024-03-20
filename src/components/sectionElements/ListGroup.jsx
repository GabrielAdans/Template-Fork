import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function ListGroup() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ul
      className={`flex -mt-2 items-end justify-end tablet1:items-end tablet1:flex-wrap tablet1:gap-2 tablet2:gap-4 desktop1:gap-6 desktop2:gap-8 w-full h-auto font-semibold text-paragraph3 font-poppins ${
        scrolling
          ? "text-secondary transition-color duration-200"
          : "text-white transition-color duration-200"
      }`}
    >
      <li className="transition group">
        <Link
          to="home"
          className="relative cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <span className={scrolling ? "hover:text-primary" : ""}>INÍCIO</span>
          <div className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            scrolling ? "bg-primary" : "bg-white"
          }`}></div>
        </Link>
      </li>
      <li className="transition group">
        <Link
          to="about"
          className="relative cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <span className={scrolling ? "hover:text-primary" : ""}>SOBRE NÓS</span>
          <div className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            scrolling ? "bg-primary" : "bg-white"
          }`}></div>
        </Link>
      </li>
      <li className="transition group">
        <Link
          to="links"
          className="relative cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <span className={scrolling ? "hover:text-primary" : ""}>PRODUTOS</span>
          <div className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            scrolling ? "bg-primary" : "bg-white"
          }`}></div>
        </Link>
      </li>
      <li className="transition group">
        <Link
          to="certificates"
          className="relative cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <span className={scrolling ? "hover:text-primary" : ""}>CURSOS</span>
          <div className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            scrolling ? "bg-primary" : "bg-white"
          }`}></div>
        </Link>
      </li>
      <li className="transition group">
        <Link
          to="contact"
          className="relative cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-170}
        >
          <span className={scrolling ? "hover:text-primary" : ""}>PERGUNTAS FREQUENTES</span>
          <div className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            scrolling ? "bg-primary" : "bg-white"
          }`}></div>
        </Link>
      </li>
      <li className="transition group">
        <Link
          to="contact"
          className="relative cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-170}
        >
          CONTATO
          <div className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            scrolling ? "bg-primary" : "bg-white"
          }`}></div>
        </Link>
      </li>
    </ul>
  );
}
