"use client";

import { motion } from "motion/react";
import CosmicBackground from "@/components/background/CosmicBackground";
import Navigation from "@/components/layout/Navigation";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#100b19] text-white">
        <CosmicBackground />

        <Navigation />

        <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-6">
            {/* Name */}
            <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="absolute left-[5%] top-[30%] z-10 -translate-y-1/2 sm:left-[6%] sm:top-[40%]"
            >
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-7xl">
                RAKAN
            </h1>

            <p className="font-serif text-2xl italic text-purple-300 sm:text-4xl md:text-6xl">
                Dhiya
            </p>
            </motion.div>

            {/* Portrait */}
            <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            className="relative mt-16 flex h-[55vh] max-h-[650px] min-h-[350px] w-[65vw] max-w-[370px] items-center justify-center sm:h-[65vh] sm:w-[48vw]"
            >
            {/* Ambient Glow */}
            <motion.div
                animate={{
                opacity: [0.35, 0.65, 0.35],
                scale: [0.95, 1.08, 0.95],
                }}
                transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                }}
                className="absolute inset-x-[-15%] bottom-0 top-[10%] rounded-full bg-purple-500/10 blur-[70px]"
            />

            {/* Portrait Frame */}
            <div className="absolute inset-0 overflow-hidden rounded-t-full border border-purple-300/25 bg-gradient-to-b from-purple-300/[0.08] via-purple-300/[0.02] to-transparent">
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />

                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-200/40 to-transparent" />

                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-purple-300/40 to-transparent" />
            </div>

            {/* Placeholder */}
            <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="h-1 w-8 rounded-full bg-purple-300/50" />

                <span className="text-center text-[9px] tracking-[0.25em] text-white/45 sm:text-xs">
                YOUR PORTRAIT
                <br />
                COMING SOON
                </span>
            </div>
            </motion.div>

            {/* Profession */}
            <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="absolute right-[5%] top-[70%] z-10 -translate-y-1/2 text-right sm:right-[6%] sm:top-[57%]"
            >
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-7xl">
                WEB
            </h2>

            <p className="font-serif text-2xl italic text-purple-300 sm:text-4xl md:text-6xl">
                Developer
            </p>
            </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="absolute bottom-7 left-0 z-20 flex w-full flex-col items-center gap-3"
        >
            <span className="text-[9px] tracking-[0.4em] text-white/50">
            SCROLL TO EXPLORE
            </span>

            <div className="relative h-10 w-px overflow-hidden bg-white/15">
            <motion.div
                animate={{ y: ["-100%", "400%"] }}
                transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                }}
                className="absolute left-0 top-0 h-1/2 w-full bg-purple-300"
            />
            </div>
        </motion.div>
        </section>
    );
}