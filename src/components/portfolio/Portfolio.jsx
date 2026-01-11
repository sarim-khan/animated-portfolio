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
    Live: "https://fullstack-ecommerce-backend.vercel.app/login",
  },
  {
    id: 2,
    title: "React Admin Dashboard",
    img: "https://res.cloudinary.com/dwvd0f79c/image/upload/v1712490027/screenshots/d0yemv0cjnqrjadnlour.png",
    desc: "An innovative e-commerce web app, designed for seamless shopping experiences and efficient management. Key features include secure payment options, intuitive admin panel, and personalized user profiles.",
    Github: "https://github.com/sarim-khan/dashboard",
    Live: "https://sarim-dashboard.onrender.com/",
  },
  {
    id: 3,
    title: "MOVIX",
    img: "https://res.cloudinary.com/dwvd0f79c/image/upload/v1712490028/screenshots/vi8z7uycvwykwbp44wue.png",
    desc: "Introducing Movix, an advanced movies database app crafted with React, Redux, SCSS, and intricate JavaScript logic for a sleek UI and seamless interactivity. Featuring lazy loading, Axios for API requests, React Playerfor media playback, and Infinite Scroll, Movix offers effortless browsing. Explore trending, top-rated content, filter by genre, and discover detailed movie/series cast information, trailers, and similar/recommended titles.",
    Github: "https://github.com/sarim-khan/movix",
    Live: "https://movix-green-theta.vercel.app/",
  },
  {
    id: 4,
    title: "WrittenlyHub - Blogging Platform",
    img: "https://res.cloudinary.com/dwvd0f79c/image/upload/v1768126791/Screenshot_2026-01-11_154616_xqne9g.png",
    desc: `WrittenlyHub’s blog is a content-driven, SEO-focused publishing platform designed to deliver high-quality articles on digital marketing, content strategy, and writing best practices. The platform emphasizes clean UI, fast performance, and strong SEO foundations to ensure discoverability and a smooth reading experience.

I worked on building and maintaining the frontend architecture, integrating WordPress REST APIs for dynamic content delivery, and implementing SEO optimizations such as structured metadata and performance improvements. The blog supports real user traffic and plays a key role in WrittenlyHub’s content and growth strategy.`,
    Live: "https://www.writtenlyhub.com/blog/",
  },
  {
    id: 5,
    title: "WrittenlyHub - Offer SPAs",
    img: "https://res.cloudinary.com/dwvd0f79c/image/upload/v1768128346/Screenshot_2026-01-11_161518_h4c1kn.png",
    desc: `The Founder-Led Marketing initiative by WrittenlyHub focuses on helping founders and business leaders build authentic, high-impact personal branding and content experiences that resonate with their audiences. This approach emphasizes crafting narratives and content strategies directly aligned with a founder’s vision and voice, enabling businesses to attract the right clients with meaningful storytelling and strategic marketing guidance. WrittenlyHub positions this service as a way to elevate a brand beyond average content by combining strategic insight with founder-centric messaging to stand out in competitive digital spaces.`,
    Live: "https://offer.writtenlyhub.com/founderledmarketing",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
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
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
