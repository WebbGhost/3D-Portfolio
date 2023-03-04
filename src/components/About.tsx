import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants/constants";
const ServicesCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xsm:w-250 w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px]  green-pink-gradient shadow-card rounded-[20px]"
      >
        <div></div>
        {title}
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant(2)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary tetx-[17] leading-10 max-w-3xl"
      >
        Skilled full stack mobile and web developer as well an ethical hacker
        with worked exprience of close to half a decade and having a pure proved
        skills in my skills sets
      </motion.p>
      <div>
        {services?.map((service, index) => (
          <ServicesCard index={index} {...service} key={index} />
        ))}
      </div>
      <Tilt>
        <div
          style={{
            height: "100px",
            width: "200px",
            backgroundColor: "darkgreen",
          }}
        >
          <h1>React Parallax Tilt 👀</h1>
        </div>
      </Tilt>
    </>
  );
};
export default About;
