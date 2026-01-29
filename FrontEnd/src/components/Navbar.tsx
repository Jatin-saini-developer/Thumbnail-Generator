import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { navlinks } from "../data/navlinks";
import type { INavLink } from "../types";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
        const navigate = useNavigate();


    return (

        <>
            <motion.nav className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <a href="https://prebuiltuixels">
                    <img className="h-8.5 w-auto" src="/assets/Logo-Main.png" alt="Prompt2Thumb" width={130} height={34} />
                </a>

                <div className="hidden md:flex items-center gap-8 transition duration-500">
                   <Link to="/">Home</Link>
                   <Link to="/Generate">Generate</Link>
                   <Link to="/">My Generation</Link>
                   <Link to="/">My Contact</Link>
                </div>

                <button className="hidden md:block px-6 py-2.5 bg-pink-600 hover:bg-pink-700 active:scale-95 transition-all rounded-full"
                onClick={()=>{navigate("/login")}}>
                    Get Started
                </button>

                <button onClick={() => setIsOpen(true)} className="md:hidden">
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </motion.nav>

            <div className={`fixed inset-0 z-100 bg-black/40 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-400 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {navlinks.map((link: INavLink) => (
                    <NavLink key={link.name} to={link.href} onClick={() => setIsOpen(false)}>
                        {link.name}
                    </NavLink>
                ))}
                <button onClick={() => setIsOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-pink-600 hover:bg-pink-700 transition text-white rounded-md flex">
                    <XIcon />
                </button>
            </div>
        </>
    );
}