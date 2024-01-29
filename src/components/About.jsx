/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full  ">
      <motion.div
        variants={ fadeIn("right", "spring", 0.5 * index, 0.75) }
        className="w-full  bg-gradient-to-br from-secondary via-fortiary to-tertiary p-[3px] rounded-[20px]  shadow-fortiary shadow-card"
      >
        <div
          options={ {
            max: 45,
            scale: 1,
            speed: 450,
          } }
          className=" bg-primary  rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col shadow-card hover:shadow-secondary   "
        >
          <img src={ icon } alt={ title } className="w-16 h-16 object-contain " />
          <h3 className="text-tertiary text-[20px] font-bold text-center ">{ title }</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={ textVariant() }>
        <p className={ styles.sectionSubText }>Introduction</p>
        <h2 className={ styles.sectionHeadText }>Overview.</h2>
      </motion.div>
      <motion.p
        variants={ fadeIn("", "", 0.1, 1) }
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hello dude
        <br />
        my name is Amirreza Ghaffarian you can call me Merlin
        I am 24 .
        <br />
        I am living in iran
        <br />
        i have taken bachelor computer engineer (AI) degree also i am gonna migrate for master AI and Robotic engineer degree

      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        { services.map((service, index) => (
          <ServiceCard key={ service.title } index={ index } { ...service } />
        )) }
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
