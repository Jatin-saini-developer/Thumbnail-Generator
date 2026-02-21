import { footerData } from "../data/footer";
import { LinkedinIcon, TwitterIcon } from "lucide-react";
import { motion } from "motion/react";
import type { IFooterLink } from "../types";
import { Link } from "react-router-dom";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full mt-32 border-t border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400">
            <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 py-12 md:py-16 flex flex-col gap-12">
                
                {/* Top Section: Brand & Navigation */}
                <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
                    
                    {/* Brand & Tagline */}
                    <motion.div 
                        className="flex flex-col gap-4 max-w-xs"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link to="/" className="flex items-center gap-3">
                            <img 
                                src="/assets/footer-logo.svg" 
                                alt="PromptToThumb logo" 
                                className="size-8" 
                                width={32} 
                                height={32} 
                            />
                            <span className="text-zinc-900 dark:text-zinc-100 font-bold text-xl tracking-tight">
                                PromptToThumb
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed">
                            Making every customer feel valued—no matter the size of your audience.
                        </p>
                    </motion.div>

                    {/* Links Grid */}
                    <motion.div 
                        className="flex flex-wrap gap-12 md:gap-20"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {footerData.map((section, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <h4 className="text-zinc-900 dark:text-zinc-100 font-semibold tracking-wide text-sm">
                                    {section.title}
                                </h4>
                                <ul className="flex flex-col gap-2.5">
                                    {section.links.map((link: IFooterLink, idx: number) => (
                                        <li key={idx}>
                                            <Link 
                                                to={link.href} 
                                                className="text-sm hover:text-pink-600 dark:hover:text-pink-500 transition-colors duration-200"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800/50" />

                {/* Bottom Section: Copyright & Socials */}
                <motion.div 
                    className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p>&copy; {currentYear} PromptToThumb. All rights reserved.</p>

                    <div className="flex items-center gap-4">
                        <SocialLink href="https://www.linkedin.com/in/jatin-saini-578693318/" icon={<LinkedinIcon className="size-5" />} />
                        <SocialLink href="#" icon={<TwitterIcon className="size-5" />} />
                    </div>
                </motion.div>
                
            </div>
        </footer>
    );
}

// Helper component to keep social icons clean and uniform
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noreferrer"
            className="text-zinc-400 hover:text-pink-600 dark:hover:text-pink-500 hover:-translate-y-0.5 transition-all duration-200"
        >
            {icon}
        </a>
    );
}