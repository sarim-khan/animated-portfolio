import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Dynamic Ecommerce Platform",
    img: "https://res.cloudinary.com/dwvd0f79c/image/upload/v1712490027/screenshots/xddpzgatfrz07rio4noi.png",
    desc: "An innovative e-commerce web app, designed for seamless shopping experiences and efficient management. Key features include secure payment options, intuitive admin panel, and personalized user profiles.",
    Github: "https://github.com/sarim-khan/Fullstack-Ecommerce-Backend",
    Live: "https://fullstack-ecommerce-backend.vercel.app/login"
  },
  {
    id: 2,
    title: "React Admin Dashboard",
    img: "https://res.cloudinary.com/dwvd0f79c/image/upload/v1712490027/screenshots/d0yemv0cjnqrjadnlour.png",
    desc: "An innovative e-commerce web app, designed for seamless shopping experiences and efficient management. Key features include secure payment options, intuitive admin panel, and personalized user profiles.",
    Github: "https://github.com/sarim-khan/dashboard",
    Live: "https://sarim-dashboard.onrender.com/"
  },
  {
    id: 3,
    title: "MOVIX",
    img: "https://res.cloudinary.com/dwvd0f79c/image/upload/v1712490028/screenshots/vi8z7uycvwykwbp44wue.png",
    desc: "Introducing Movix, an advanced movies database app crafted with React, Redux, SCSS, and intricate JavaScript logic for a sleek UI and seamless interactivity. Featuring lazy loading, Axios for API requests, React Playerfor media playback, and Infinite Scroll, Movix offers effortless browsing. Explore trending, top-rated content, filter by genre, and discover detailed movie/series cast information, trailers, and similar/recommended titles.",
    Github: "https://github.com/sarim-khan/movix",
    Live: "https://movix-green-theta.vercel.app/"
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.Live} target="_blank" rel="noopener noreferrer">
              <button>Live Link</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;