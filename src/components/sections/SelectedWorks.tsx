"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

const ACCENTS = [
    "from-violet-500/20 via-purple-900/10 to-transparent",
    "from-fuchsia-500/20 via-purple-900/10 to-transparent",
    "from-indigo-500/20 via-purple-900/10 to-transparent",
    "from-cyan-500/20 via-purple-900/10 to-transparent",
];

export default function SelectedWorks() {
    return (
        <section
        id="projects"
        className="relative overflow-hidden bg-[#100b19] px-6 py-28 text-white sm:px-12 md:py-36"
        >
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-purple-700/10 blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="mb-16 flex items-center gap-4"
            >
            <span className="text-xs tracking-[0.3em] text-purple-300">
                03 / SELECTED WORKS
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-300/40 to-transparent" />
            </motion.div>

            <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl"
            >
                Projects
                <br />
                <span className="font-serif font-normal italic text-purple-300">
                i have create.
                </span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="max-w-md text-sm leading-8 text-white/55 sm:text-base"
            >
                Beberapa project yang menjadi bagian dari perjalanan saya dalam
                mempelajari dan mengembangkan perangkat lunak.
            </motion.p>
            </div>

            <div className="grid gap-7 md:grid-cols-2">
            {PROJECTS.map((project, index) => (
                <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className="group"
                >
                <Link href={`/projects/${project.slug}`} className="block">
                    <div
                    className={`relative mb-6 flex aspect-[16/10] items-center justify-center overflow-hidden border border-white/10 bg-gradient-to-br ${ACCENTS[index % ACCENTS.length]}`}
                    >
                    <Image
                        src={project.image}
                        alt={`Preview ${project.title}`}
                        fill
                        unoptimized
                        className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#100b19]/40 via-transparent to-black/10" />

                    <div className="absolute left-6 top-6 text-[10px] tracking-[0.25em] text-white/80">
                        {project.category.toUpperCase()}
                    </div>

                    <div className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 group-hover:border-purple-300 group-hover:bg-purple-300 group-hover:text-[#100b19]">
                        <ArrowUpRight size={20} />
                    </div>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="mb-2 text-[10px] tracking-[0.2em] text-purple-300">
                        {project.number} / {project.category}
                        </p>

                        <h3 className="text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-purple-300 sm:text-3xl">
                        {project.title}
                        </h3>
                    </div>

                    <span className="mt-2 whitespace-nowrap text-[9px] tracking-wider text-white/35">
                        {project.status}
                    </span>
                    </div>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">
                    {project.shortDescription}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <span
                        key={technology}
                        className="border border-white/10 px-3 py-1.5 text-[10px] tracking-wide text-white/50"
                        >
                        {technology}
                        </span>
                    ))}
                    </div>

                    <div className="mt-7 h-px w-full bg-white/10 transition-colors duration-300 group-hover:bg-purple-300/40" />
                </Link>
                </motion.div>
            ))}
            </div>
        </div>
        </section>
    );
}