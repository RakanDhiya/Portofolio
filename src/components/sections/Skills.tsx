"use client";

import { motion } from "motion/react";
import {
    siPhp,
    siJavascript,
    siTypescript,
    siPython,
    siOpenjdk,
    siHtml5,
    siCss,
    siTailwindcss,
    siReact,
    siNextdotjs,
    siLaravel,
    siPostgresql,
    siGit,
    siGithub,
} from "simple-icons";

import SkillLogo from "@/components/ui/SkillLogo";

const SKILL_GROUPS = [
    {
        number: "01",
        title: "Programming Languages",
        description:
        "Bahasa pemrograman yang saya gunakan untuk membangun logika dan fungsionalitas aplikasi.",
        className: "lg:col-span-7",
        skills: [
        { name: "PHP", icon: siPhp },
        { name: "JavaScript", icon: siJavascript },
        { name: "TypeScript", icon: siTypescript },
        { name: "Python", icon: siPython },
        { name: "Java", icon: siOpenjdk },
        ],
    },
    {
        number: "02",
        title: "Frontend Development",
        description:
        "Teknologi untuk membangun antarmuka web yang responsif dan interaktif.",
        className: "lg:col-span-5",
        skills: [
        { name: "HTML5", icon: siHtml5 },
        { name: "CSS3", icon: siCss },
        { name: "Tailwind CSS", icon: siTailwindcss },
        { name: "React", icon: siReact },
        { name: "Next.js", icon: siNextdotjs },
        ],
    },
    {
        number: "03",
        title: "Backend Development",
        description:
        "Teknologi untuk membangun proses dan sistem di balik aplikasi.",
        className: "lg:col-span-5",
        skills: [{ name: "Laravel", icon: siLaravel }],
    },
    {
        number: "04",
        title: "Database & Tools",
        description:
        "Tools yang membantu proses pengelolaan data dan pengembangan perangkat lunak.",
        className: "lg:col-span-7",
        skills: [
        { name: "PostgreSQL", icon: siPostgresql },
        { name: "Git", icon: siGit },
        { name: "GitHub", icon: siGithub },
        ],
    },
    ];

    export default function Skills() {
    return (
        <section
        id="skills"
        className="relative overflow-hidden bg-[#0b0713] px-6 py-28 sm:px-10 lg:px-20"
        >
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-purple-700/[0.08] blur-[150px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-500/[0.06] blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">
            {/* Section heading */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-16 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end"
            >
            <div>
                <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-purple-400" />
                <p className="text-xs tracking-[0.4em] text-purple-300">
                    MY EXPERTISE
                </p>
                </div>

                <h2 className="max-w-2xl text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Technologies
                <br />& <span className="text-purple-300">Tools.</span>
                </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/45 lg:pb-2">
                Teknologi dan tools yang saya gunakan dalam proses belajar,
                pengembangan aplikasi, dan membangun solusi digital.
            </p>
            </motion.div>

            {/* Skills grid */}
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            {SKILL_GROUPS.map((group, index) => (
                <motion.div
                key={group.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                }}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-colors duration-500 hover:border-purple-300/25 hover:bg-white/[0.045] sm:p-8 ${group.className}`}
                >
                {/* Card glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/[0.07] blur-[80px] transition-all duration-500 group-hover:bg-purple-500/[0.13]" />

                <div className="relative">
                    {/* Card header */}
                    <div className="mb-8 flex items-start justify-between gap-4">
                    <div>
                        <p className="mb-3 text-[10px] tracking-[0.3em] text-purple-300/70">
                        CATEGORY {group.number}
                        </p>

                        <h3 className="text-lg font-medium tracking-wide text-white sm:text-xl">
                        {group.title}
                        </h3>

                        <p className="mt-3 max-w-md text-xs leading-6 text-white/40">
                        {group.description}
                        </p>
                    </div>

                    <span className="text-3xl font-light text-white/[0.08] sm:text-4xl">
                        {group.number}
                    </span>
                    </div>

                    {/* Technology logos */}
                    <div className="flex flex-wrap items-start gap-x-5 gap-y-7 border-t border-white/[0.07] pt-7 sm:gap-x-7">
                    {group.skills.map((skill) => (
                        <SkillLogo
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                        />
                    ))}
                    </div>
                </div>
                </motion.div>
            ))}
            </div>

            {/* Bottom decoration */}
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-12 flex items-center justify-between border-t border-white/[0.07] pt-6"
            >
            <p className="text-[10px] tracking-[0.25em] text-white/25">
                CONTINUOUSLY LEARNING & IMPROVING
            </p>

            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_#a78bfa]" />
            </motion.div>
        </div>
        </section>
    );
}