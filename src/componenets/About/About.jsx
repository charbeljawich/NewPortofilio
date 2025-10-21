import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TimeZone from "../ui/TimeZone";
import { Globe } from "../ui/Globe";
import CopyEmailButton from "../ui/CopyEmailButton";
import { CardBody, CardContainer, CardItem } from "../ui/Cardcontainer";
import { AuroraText } from "../ui/AuroraText";

const words = [
  { name: "HTML", src: "/assets/logos/html5.svg" },
  { name: "CSS", src: "/assets/logos/css3.svg" },
  { name: "JavaScript", src: "/assets/logos/javascript.svg" },
  { name: "Tailwind CSS", src: "/assets/logos/tailwindcss.svg" },
  { name: "React.js", src: "/assets/logos/react.svg" },
  { name: "Next.js", src: "/assets/logos/next.svg" },
  { name: "Three.js", src: "/assets/logos/threejs.svg" },
  { name: "GSAP", src: "/assets/logos/gsap.svg" }
];

const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#About",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.5, ease: "elastic.inOut(1, 0.5)" }
    );

    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "linear" } });

    tl.fromTo(
      "#frame-work-div",
      { y: -200, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.25, delay: 1 }
    );

    tl.fromTo(
      "#frame-work-name",
      { opacity: 0, rotate: 0 },
      { opacity: 1, rotate: 360, stagger: 0.25, delay: 2 },
      "<"
    );

    tl.to("#frame-work-div", { y: 3000, opacity: 0, stagger: 0.25, delay: 3 });

    tl.set("#frame-work-div", { y: -200, opacity: 0 });
  }, []);

  return (
    <section className="c-space section-spacing">
      <h2 id="About" className="text-heading opacity-0">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div className="flex items-end grid-default-color grid-1 relative">
          <img
            src="assets/coding-pov.png"
            alt="Coding Image"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-3 md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">It's Charbel Jawich</p>
            <p className="subtext">
              Over the last 2 years, I have been developing my frontend and backend skills to deliver amazing web applications.
            </p>
          </div>
        </div>

        <div className="grid-default-color grid-2 flex items-center justify-center w-full h-full">
          <div className="flex items-center justify-center flex-wrap gap-6">
            {words.map((tech) => (
              <div
                id="frame-work-div"
                key={tech.name}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <img
                  id="frame-work-photos"
                  src={tech.src}
                  alt={tech.name}
                  className="w-8 h-8 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                />
                <AuroraText
                  id="frame-work-name"
                  className="text-lg font-semibold"
                >
                  {tech.name}
                </AuroraText>
              </div>
            ))}
          </div>
        </div>

        <div className="grid-black-color grid-3 relative">
          <TimeZone className="order-2" />
          <figure className="order-1 absolute left-[50%] top-[10%]">
            <Globe />
          </figure>
        </div>

        <div className="grid-special-color grid-4 flex flex-col items-center justify-center gap-4">
          <p className="text-center headtext">Do you want to start a project together?</p>
          <CopyEmailButton />
        </div>

        <div className="grid-default-color grid-5">
          <div className="flex justify-center top-0">
            <CardContainer>
              <CardBody>
                <CardItem className="mt-[-70px]" translateZ={50} translateY={5} translateX={10}>
                  <p className="headtext px-10">Charbel</p>
                  
                   <p className="subtext break-words text-center px-4 sm:px-10">
                    I love turning ideas into interactive web experiences. Crafting clean, modern interfaces and smooth animations makes coding feel magical and alive.
                  </p>

                  
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
