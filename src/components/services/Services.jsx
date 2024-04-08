import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          "Elevating ideas with code mastery <br /> and innovative problem-solving flair."
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}> Crafting</motion.b> Code,
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unleashing </motion.b>Creativity.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frontend Maestro</h2>
          <p>
            Mastering the art of crafting seamless user experiences, I wield HTML, CSS, and JavaScript. Proficient in React.js, Redux, and styled components, I design interfaces that captivate and engage.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend Virtuoso</h2>
          <p>
            Empowered by Node.js and Express.js, I architect robust server-side solutions. Fluent in handling databases, I seamlessly integrate MySQL and MongoDB with Mongoose, ensuring data flows effortlessly through every layer of the application.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Database Guru</h2>
          <p>
            In the realm of databases, I command MySQL and MongoDB with Mongoose. From structuring relational databases to implementing flexible NoSQL solutions, my expertise ensures data is not just stored but optimized for performance.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Full-Stack Alchemist</h2>
          <p>
            Bridging frontend finesse with backend brilliance, I bring projects to life. Proficient in C and C++, I weave data structures and algorithms into the code, ensuring a robust and efficient foundation. Git, GitHub, and VS Code are my tools of choice for version control and collaborative coding.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;