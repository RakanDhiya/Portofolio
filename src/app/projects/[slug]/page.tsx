import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CircleDot,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";
import { PROJECTS } from "@/lib/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Ramy Dhiya`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) notFound();

  const currentIndex = PROJECTS.findIndex((item) => item.slug === project.slug);

  const previousProject =
    PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#100b19] text-white">
      {/* Background Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-80 left-1/2 h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-purple-700/[0.13] blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-250px] top-[1000px] h-[500px] w-[500px] rounded-full bg-violet-700/[0.08] blur-[150px]"
      />

      {/* Navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 sm:px-12">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-3 text-xs tracking-[0.15em] text-white/50 transition hover:text-purple-300"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          BACK TO PROJECTS
        </Link>

        <Link
          href="/"
          className="text-xs font-semibold tracking-[0.3em] text-white"
        >
          RAMY <span className="text-purple-300">DHIYA.</span>
        </Link>
      </nav>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 sm:px-12">
        {/* Project Hero */}
        <section className="pb-16 pt-20 md:pb-24 md:pt-28">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-300/20 bg-purple-300/[0.07] px-4 py-2 text-[10px] tracking-[0.2em] text-purple-200">
              <Sparkles size={12} />
              PROJECT CASE STUDY
            </span>

            <span className="text-xs text-white/30">
              {project.number} / {String(PROJECTS.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_260px] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-medium tracking-[0.25em] text-purple-300/80">
                {project.category.toUpperCase()}
              </p>

              <h1 className="max-w-5xl break-words text-5xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-7xl md:text-8xl">
                {project.title}
                <span className="text-purple-300">.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-sm leading-8 text-white/55 sm:text-base">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                <p className="mb-3 text-[10px] tracking-[0.2em] text-white/35">
                  PROJECT STATUS
                </p>
                <div className="flex items-center gap-2 text-sm text-purple-200">
                  <CircleDot size={13} className="text-purple-300" />
                  {project.status}
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                <p className="mb-3 text-[10px] tracking-[0.2em] text-white/35">
                  CATEGORY
                </p>
                <p className="text-sm text-white/75">{project.category}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Preview */}
        <section className="mb-24">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#17111f] shadow-[0_30px_100px_rgba(0,0,0,0.3)]">
            {/* Preview Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-7">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>

              <span className="text-[9px] tracking-[0.2em] text-white/35 sm:text-[10px]">
                PROJECT PREVIEW
              </span>

              <span className="text-[10px] text-purple-300">
                {project.number}
              </span>
            </div>

            {/* Preview Image */}
            <div className="relative aspect-[16/9] w-full bg-[#0d0912]">
              <Image
                src={project.image}
                alt={`Preview ${project.title}`}
                fill
                priority
                unoptimized
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain p-3 transition-transform duration-700 hover:scale-[1.015] sm:p-8"
              />
            </div>

            {/* Preview Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] px-5 py-4 sm:px-7">
              <p className="text-xs text-white/50">
                Visual overview of {project.title}
              </p>

              <p className="text-[9px] tracking-[0.2em] text-white/30">
                RAKAN DHIYA / SELECTED WORKS
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-8 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9">
            <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-purple-300/20 bg-purple-300/[0.08] text-purple-300">
              <Layers3 size={20} />
            </div>

            <p className="text-[10px] tracking-[0.25em] text-purple-300">
              01 / OVERVIEW
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Mengenal
              <br />
              <span className="font-serif font-normal italic text-purple-300">
                Project.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40">
              Gambaran umum mengenai tujuan dan konsep project.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-purple-300/[0.07] to-white/[0.015] p-7 sm:p-10">
            <div className="space-y-5">
              {project.overview.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-8 text-white/65 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Development Focus */}
        <section className="mb-24 mt-20">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] tracking-[0.25em] text-purple-300">
                02 / KEY AREAS
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Fokus{" "}
                <span className="font-serif font-normal italic text-purple-300">
                  Pengembangan.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/40">
              Bagian utama yang menjadi perhatian dalam proses pengembangan
              project ini.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.focus.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-purple-300/[0.04]"
              >
                <span className="text-xs tracking-[0.2em] text-purple-300">
                  0{index + 1}
                </span>

                <div className="my-7 h-px w-10 bg-purple-300/40 transition-all duration-300 group-hover:w-20" />

                <p className="text-sm leading-7 text-white/65 transition-colors group-hover:text-white">
                  {item}
                </p>

                <span className="absolute -bottom-10 -right-5 text-8xl font-semibold text-white/[0.025]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-24 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-purple-300/[0.07] via-white/[0.025] to-transparent p-7 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-purple-300/20 bg-purple-300/[0.08] text-purple-300">
                <Code2 size={20} />
              </div>

              <p className="text-[10px] tracking-[0.25em] text-purple-300">
                03 / TECHNOLOGY
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Tools &
                <br />
                <span className="font-serif font-normal italic text-purple-300">
                  Technologies.
                </span>
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">
                Teknologi dan tools yang digunakan untuk membangun project ini.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-xl border border-purple-300/20 bg-purple-300/[0.06] px-5 py-3 text-xs text-purple-100/80 transition-all duration-300 hover:border-purple-300/50 hover:bg-purple-300/[0.12]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="mb-24">
          <div className="mb-10">
            <p className="text-[10px] tracking-[0.25em] text-purple-300">
              04 / DEVELOPMENT PROCESS
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Proses{" "}
              <span className="font-serif font-normal italic text-purple-300">
                Pengembangan.
              </span>
            </h2>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-10">
            <div className="relative">
              <div className="absolute bottom-5 left-[15px] top-5 w-px bg-gradient-to-b from-purple-300/60 via-purple-300/20 to-transparent" />

              <div className="space-y-8">
                {project.development.map((item, index) => (
                  <div key={index} className="relative flex gap-6 sm:gap-8">
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-purple-300/30 bg-[#17111f] text-[10px] text-purple-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="flex-1 border-b border-white/[0.07] pb-8 last:border-0 last:pb-0">
                      <p className="text-sm leading-8 text-white/65 sm:text-base">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contribution */}
        <section className="mb-24 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-purple-300/20 bg-purple-300/[0.08] text-purple-300">
              <Sparkles size={20} />
            </div>

            <p className="text-[10px] tracking-[0.25em] text-purple-300">
              05 / CONTRIBUTION
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Kontribusi
              <br />
              <span className="font-serif font-normal italic text-purple-300">
                Saya.
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/40">
              Peran dan keterlibatan saya dalam proses pengerjaan project ini.
            </p>
          </div>

          <div className="rounded-2xl border border-purple-300/20 bg-gradient-to-br from-purple-300/[0.09] to-white/[0.02] p-7 sm:p-10">
            <p className="mb-8 text-[10px] tracking-[0.25em] text-purple-300">
              MY INVOLVEMENT
            </p>

            <div className="space-y-6">
              {project.contribution.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-300/10 text-purple-300">
                    <ArrowRight size={12} />
                  </div>

                  <p className="text-sm leading-8 text-white/70 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Navigation */}
        <section className="border-t border-white/10 pt-16">
          <div className="mb-10">
            <p className="text-[10px] tracking-[0.25em] text-purple-300">
              KEEP EXPLORING
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              More{" "}
              <span className="font-serif font-normal italic text-purple-300">
                Projects.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {previousProject && (
              <Link
                href={`/projects/${previousProject.slug}`}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-300 hover:border-purple-300/30 hover:bg-purple-300/[0.04] sm:p-9"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.2em] text-white/35">
                    PREVIOUS PROJECT
                  </span>
                  <ArrowLeft
                    size={17}
                    className="text-purple-300 transition-transform group-hover:-translate-x-1"
                  />
                </div>

                <p className="mb-3 text-xs text-purple-300">
                  {previousProject.category}
                </p>

                <h3 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-purple-200 sm:text-3xl">
                  {previousProject.title}
                </h3>
              </Link>
            )}

            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 text-right transition-all duration-300 hover:border-purple-300/30 hover:bg-purple-300/[0.04] sm:p-9"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.2em] text-white/35">
                    NEXT PROJECT
                  </span>
                  <ArrowRight
                    size={17}
                    className="text-purple-300 transition-transform group-hover:translate-x-1"
                  />
                </div>

                <p className="mb-3 text-xs text-purple-300">
                  {nextProject.category}
                </p>

                <h3 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-purple-200 sm:text-3xl">
                  {nextProject.title}
                </h3>
              </Link>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-purple-300/15 bg-purple-300/[0.04] p-7 sm:p-9">
            <div>
              <p className="text-[10px] tracking-[0.2em] text-purple-300">
                WANT TO SEE MORE?
              </p>
              <p className="mt-3 text-lg font-medium text-white">
                Explore my other works.
              </p>
            </div>

            <Link
              href="/#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-purple-300 px-6 py-3.5 text-xs font-semibold tracking-wide text-[#100b19] transition-all hover:bg-white"
            >
              ALL PROJECTS
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.08] px-6 py-8 sm:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-[10px] tracking-[0.15em] text-white/30 sm:flex-row">
          <span>© 2026 RAMY DHIYA</span>
          <span>DESIGNED & DEVELOPED WITH PURPOSE.</span>
        </div>
      </footer>
    </main>
  );
}