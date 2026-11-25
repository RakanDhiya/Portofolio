"use client";

import { motion } from "motion/react";
import Image from "next/image";
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
                    className="absolute left-[6%] top-[30%] z-20 sm:top-[28%]"
                >
                    <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        RAMY
                    </h1>

                    <p className="font-serif text-2xl italic text-purple-300 sm:text-4xl md:text-5xl lg:text-6xl">
                        Dhiya
                    </p>
                </motion.div>

                {/* Portrait */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                    className="relative mt-6 h-[52vh] max-h-[520px] min-h-[320px] w-[65vw] max-w-[370px] sm:mt-10 sm:h-[58vh] sm:w-[38vw]"
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

                    {/* Circular Portrait Frame */}
                    <div className="absolute inset-0 z-10 overflow-hidden rounded-full border border-purple-300/30 bg-[#100b19]/30">
                        <Image
                            src="/images/profile/rakan.png"
                            alt="Rakan Dhiya"
                            fill
                            priority
                            unoptimized
                            className="object-cover object-center brightness-[0.82] contrast-[1.12]"
                            sizes="(max-width: 640px) 65vw, 370px"
                        />
                    </div>
                </motion.div>

                {/* Profession */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="absolute right-[6%] top-[68%] z-20 -translate-y-1/2 text-right"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        WEB
                    </h2>

                    <p className="font-serif text-2xl italic text-purple-300 sm:text-4xl md:text-5xl lg:text-6xl">
                        Developer
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="absolute bottom-5 left-0 z-20 flex w-full flex-col items-center gap-2"
            >
                <span className="text-[9px] tracking-[0.4em] text-white/50">
                    SCROLL TO EXPLORE
                </span>

                <div className="relative h-8 w-px overflow-hidden bg-white/15">
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