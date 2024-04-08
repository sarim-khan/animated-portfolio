import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Sarim Khan
                </motion.span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/md-sarim-khan/">
                        <img src="/linkedin.png" alt="" />
                    </a>
                    <a href="https://github.com/sarim-khan">
                        <img src="/github.png" alt="" />
                    </a>
                    <a href="https://www.instagram.com/md.sarimkhan/">
                        <img src="/instagram.png" alt="" />
                    </a>
                    <a href="https://leetcode.com/sarim_khan/">
                        <img src="/leetcode.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;