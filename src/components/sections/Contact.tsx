"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { siGithub, siInstagram } from "simple-icons";

import SkillLogo from "@/components/ui/SkillLogo";

const SOCIAL_LINKS = [
    {
        name: "GitHub",
        username: "RakanDhiya",
        description: "Explore my projects and source code.",
        href: "https://github.com/RakanDhiya",
        icon: siGithub,
    },
    {
        name: "LinkedIn",
        username: "rakandhiya",
        description: "Connect with me professionally.",
        href: "https://www.linkedin.com/in/rakandhiya/",
    },
    {
        name: "Instagram",
        username: "ramydhiya",
        description: "Follow my personal updates.",
        href: "https://www.instagram.com/ramydhiya/",
        icon: siInstagram,
    },
];

export default function Contact() {
    return (
      <section
        id="contact"
        className="relative overflow-hidden bg-[#0b0713] px-6 py-28 sm:px-10 lg:px-20"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/[0.08] blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-purple-400" />
              <p className="text-xs tracking-[0.4em] text-purple-300">
                GET IN TOUCH
              </p>
            </div>

            <h2 className="max-w-3xl text-5xl font-light leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Let&apos;s create
              <br />
              something <span className="text-purple-300">meaningful.</span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-white/45">
              Terbuka untuk terhubung, berbagi ide, dan mengeksplorasi
              kesempatan baru dalam dunia teknologi dan pengembangan perangkat
              lunak.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {SOCIAL_LINKS.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -5 }}
                className="group relative flex min-h-[190px] items-center justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-colors duration-300 hover:border-purple-300/30 hover:bg-white/[0.05] sm:p-7"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-500/[0.06] blur-[70px] transition-all duration-500 group-hover:bg-purple-500/[0.13]" />

                <div className="relative flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:border-purple-300/30 group-hover:bg-purple-300/10">
                        {social.name === "LinkedIn" ? (
                        <span className="text-3xl font-bold tracking-tighter text-[#0A66C2]">
                            in
                        </span>
                        ) : (
                            <SkillLogo icon={social.icon!} name={social.name} />
                        )}
                </div>

                <div>
                    <h3 className="text-lg font-medium text-white">
                        {social.name}
                    </h3>

                    <p className="mt-1 text-xs text-purple-300/80">
                        {social.username}
                    </p>

                    <p className="mt-3 text-xs leading-5 text-white/40">
                        {social.description}
                    </p>
                    </div>
                </div>

                <ArrowUpRight
                    size={20}
                    className="relative shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-300"
                />
                </motion.a>
            ))}
            </div>

            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 flex flex-col gap-4 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center sm:justify-between"
            >
            <p className="text-xs tracking-wide text-white/35">
                © 2026 Rakan Dhiya. All rights reserved.
            </p>

            <p className="text-[10px] tracking-[0.25em] text-white/25">
              DESIGNED & DEVELOPED WITH PURPOSE
            </p>
          </motion.div>
        </div>
      </section>
    );
}