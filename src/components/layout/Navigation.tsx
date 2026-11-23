"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NAVIGATION_ITEMS } from "@/lib/constants";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
        aria-label="Main navigation"
        className="absolute right-8 top-7 z-50 md:right-12 md:top-9"
        >
        <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-expanded={isOpen}
            aria-controls="navigation-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="group flex items-center gap-2 border-0 bg-transparent p-0 text-sm tracking-wide text-white/80 outline-none transition-colors duration-300 hover:text-purple-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-purple-300 focus-visible:outline-offset-4"
        >
            <span>Menu</span>

            <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-xl leading-none text-purple-300"
            >
            +
            </motion.span>
        </button>

        <AnimatePresence>
            {isOpen && (
            <motion.div
                id="navigation-menu"
                initial={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute right-0 mt-6 flex min-w-44 flex-col gap-6 border border-purple-300/15 bg-[#100b19]/85 p-6 text-right shadow-2xl shadow-black/20 backdrop-blur-xl"
            >
                {NAVIGATION_ITEMS.map((item, index) => (
                <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                    duration: 0.3,
                    delay: index * 0.06,
                    }}
                    className="text-xs tracking-[0.2em] text-white/65 transition-colors duration-300 hover:text-purple-300"
                >
                    {item.label}
                </motion.a>
                ))}
            </motion.div>
            )}
        </AnimatePresence>
        </nav>
    );
}