import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";


import Shyam from "../assets/Shyam.png";
import hack from "../assets/hack.png";


import { styles } from "../styles";
import { githublink, live } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <div className="relative w-full h-[180px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="absolute inset-0 flex justify-center mt-48 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer mx-12"
            >
              <img src={githublink} alt="source code" />
            </div>
            <div
              onClick={() => window.open(live_link, "_blank")}
              className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer mx-12"
            >
              <img src={live} alt="Live link" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>


     <motion.div variants={textVariant()} className="mt-40">
  <p className={`${styles.sectionSubText}`}>My Experience</p>
  <h2 className={`${styles.sectionHeadText}`}>HACKATHONS</h2>
</motion.div>

<div className="w-full flex">
  <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
  >
    Below are some of the hackathons I’ve participated in. These experiences
    highlight my teamwork, innovation, and ability to build functional
    prototypes under tight deadlines. Each includes a brief summary and
    technologies used.
  </motion.p>
</div>

<div className="mt-10 grid md:grid-cols-2 gap-10">
  {/* Hackathon Card 1 */}
  <motion.div
    variants={fadeIn("up", "spring", 0.3, 1)}
    className="bg-black-100 p-6 rounded-2xl shadow-lg"
  >
    
    <img src={Shyam} alt="Hackathon" className="w-full h-70 object-cover rounded-xl mb-8"/>
    
    <h3 className="text-white text-xl font-bold mb-4">Innovate X Hackathon <p className="text-secondary text-[16px]"> Shyam Lal College, DU</p></h3>
    <p className="text-secondary text-[15px]">
      Built a web-based EdTech platform during a hackathon that offers curated tools, study materials, and preparation resources for government and competitive exams, aimed at simplifying access to quality learning content.
    </p>
    <p className="text-secondary text-[16px]"> Integrated subject-wise materials, mock tests, and user-friendly navigation to enhance the exam preparation experience.</p>
  </motion.div>

  {/* Hackathon Card 2 */}
  <div
    variants={fadeIn("up", "spring", 0.4, 1)}
    className="bg-black-100 p-6 rounded-2xl shadow-lg"
  >


    <img src={hack} alt="Hackathon" className="w-full h-70 object-cover rounded-xl mb-8"/>
   
    <h3 className="text-white text-xl font-bold mb-2">FOODOSCOPE Hackathon, 15-Hour Hackathon<p  className="text-secondary text-[16px]"> IIIT , Delhi</p></h3>
    <p className="text-secondary text-[16px]">
      calfit is a user-friendly platform that takes the
guesswork out of calorie tracking and meal planning, empowering individuals to achieve their wellness goals with ease.
 <p className="text-secondary text-[16px]">It offers personalized daily calorie targets, tracks macronutrient intake, and provides smart meal. </p>
<p className="text-secondary text-[16px]">Users can log meals, set fitness goals, and monitor progress through interactive dashboards.</p>
    </p>
  </div>

  {/* Add more hackathon cards here if needed */}
</div>




     <motion.div variants={textVariant()} className="mt-40">
  
  <h2 className={`${styles.sectionHeadText}`}>CERTIFICATES</h2>
</motion.div>
<p className="text-secondary text-[25px]"> # SQL Server
Fundamentals :
Master Basic
Query Techniques </p>
<p className="text-secondary text-[25px]"> # Supervised
Machine Learning
(LinkedIn) </p>
<p className="text-secondary text-[25px]"> # Python for
Data Science &
Machine Learning
Essentials </p>
<p className="text-secondary text-[25px]"> # Networking and
Administration
Fundamental
(LinkedIn)</p>
<p className="text-secondary text-[25px]"> # Data Scientist
(LinkedIn)</p>

<p className="text-secondary text-[25px]"> # Full Stack Development
(LinkedIn)</p>


    </>
  );
};











export default SectionWrapper(Works, "");
