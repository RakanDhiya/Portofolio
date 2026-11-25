"use client";

import { motion } from "motion/react";

export default function AboutMe() {
    return (
        <section
        id="about"
        className="relative overflow-hidden bg-[#100b19] px-6 py-24 text-white sm:px-12 md:py-32"
        >
        {/* Background Atmosphere */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-purple-700/[0.08] blur-[130px]"
        />

        <div className="relative mx-auto max-w-7xl">
            {/* Section Label */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 flex items-center gap-4"
            >
            <span className="text-xs tracking-[0.3em] text-purple-300">
                01 / ABOUT ME
            </span>

            <div className="h-px flex-1 bg-gradient-to-r from-purple-300/40 to-transparent" />

            <span className="hidden text-[10px] tracking-[0.25em] text-white/30 sm:block">
                GET TO KNOW ME
            </span>
            </motion.div>

            {/* Main Content */}
            <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-20">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9 }}
            >
                <p className="mb-6 text-xs tracking-[0.3em] text-white/40">
                WHO I AM
                </p>

                <h2 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Building
                <br />
                for the
                <br />
                <span className="font-serif font-normal italic text-purple-300">
                    web.
                </span>
                </h2>

                <div className="mt-8 flex items-center gap-3">
                <div className="h-px w-10 bg-purple-300" />
                <span className="text-[10px] tracking-[0.25em] text-white/40">
                    WEB DEVELOPER
                </span>
                </div>
            </motion.div>

            {/* Description */}
            <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="flex flex-col justify-center"
            >
                <div className="mb-7 flex items-center gap-3">
                <span className="text-3xl font-serif italic text-purple-300/60">
                    01
                </span>
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-[10px] tracking-[0.25em] text-white/35">
                    INTRODUCTION
                </span>
                </div>

                <p className="text-sm leading-8 text-white/65 sm:text-base">
                Saya adalah mahasiswa Teknik Informatika yang memiliki
                ketertarikan pada{" "}
                <span className="text-purple-200">Web Development</span> dan
                proses membangun aplikasi web dari awal hingga dapat digunakan.
                </p>

                <p className="mt-5 text-sm leading-8 text-white/65 sm:text-base">
                Saya berfokus pada pengembangan website yang fungsional,
                responsif, dan memiliki pengalaman pengguna yang baik. Mulai dari
                merancang antarmuka hingga mengembangkan fitur dan mengelola sisi
                backend, saya menikmati setiap proses dalam mengubah ide menjadi
                sebuah produk digital.
                </p>

                <p className="mt-5 text-sm leading-8 text-white/65 sm:text-base">
                Bagi saya, setiap proyek adalah kesempatan untuk mengasah
                kemampuan, mengeksplorasi solusi, dan terus berkembang sebagai Web
                Developer.
                </p>
            </motion.div>
            </div>

            {/* Bottom Statement */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-20 border-t border-white/10 pt-8 md:mt-28"
            >
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                <p className="mb-4 text-[10px] tracking-[0.3em] text-white/35">
                    MY APPROACH
                </p>

                <h3 className="max-w-3xl text-2xl font-medium leading-relaxed tracking-tight sm:text-3xl md:text-4xl">
                    From an idea into{" "}
                    <span className="font-serif italic text-purple-300">
                    something meaningful.
                    </span>
                </h3>
                </div>

                <span className="shrink-0 text-[10px] tracking-[0.25em] text-white/35">
                INDONESIA
                </span>
            </div>
            </motion.div>
        </div>
        </section>
    );
}