import Image from "next/image";
import Link from "next/link";
import { MotionReveal } from "@/components/common/motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {
  capabilities,
  experience,
  profile,
  projects,
  stats,
  techStack,
} from "@/data/portfolio";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d1a]">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden min-h-screen flex">
          {/* <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
          /> */}
          <Image
            src="/h.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover motion-hero-zoom"
          />
          <div className="absolute inset-0 bg-[#0d0d1a]/45" />
          <div
            className="absolute inset-0 opacity-[0.05] motion-grid-drift"
            style={{
              backgroundImage:
                "linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_10%_90%,rgba(6,182,212,0.18),transparent)] motion-soft-float" />

          <div className="relative flex flex-col justify-end pb-16 px-8 md:px-16 max-w-3xl z-10">
            <MotionReveal className="flex items-center gap-3 mb-5" delay={0.05} y={18}>
              <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400 font-semibold tracking-widest uppercase">Available for hire</span>
              </span>
              <span className="text-xs text-white/30 tracking-wider">{profile.location}</span>
            </MotionReveal>
            <MotionReveal delay={0.14} y={18}>
              <p className="text-sm font-bold text-white/50 tracking-[0.25em] uppercase mb-2">{profile.name}</p>
              <p className="text-xs uppercase tracking-[0.35em] text-orange-400 mb-4 font-semibold">
                {profile.role}
              </p>
            </MotionReveal>
            <MotionReveal delay={0.23} y={26}>
              <h1 className="text-4xl sm:text-6xl font-extrabold mb-5 leading-tight text-white">
                Building reliable backend systems for{" "}
                <span className="text-orange-300 drop-shadow-[0_0_24px_rgba(6,182,212,0.7)]">
                  fintech and banking teams
                </span>
              </h1>
            </MotionReveal>
            <MotionReveal delay={0.32} y={24}>
              <p className="text-white/60 text-lg sm:text-xl mb-10 max-w-2xl">
                {profile.summary}
              </p>
            </MotionReveal>
            <MotionReveal className="flex flex-wrap gap-4" delay={0.41} y={20}>
              <Link
                href="/projects"
                className="inline-block bg-orange-500 text-white font-semibold px-10 py-3.5 rounded-lg shadow-[0_0_24px_rgba(6,182,212,0.5)] hover:bg-orange-400 hover:shadow-[0_0_36px_rgba(6,182,212,0.7)] transition-all duration-200 uppercase tracking-widest text-sm"
              >
                View Work
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-transparent border-2 border-cyan-400 text-orange-400 font-semibold px-10 py-3.5 rounded-lg shadow-[0_0_16px_rgba(6,182,212,0.3)] hover:bg-orange-400 hover:text-[#0d0d1a] hover:shadow-[0_0_32px_rgba(6,182,212,0.6)] transition-all duration-200 uppercase tracking-widest text-sm"
              >
                Contact
              </Link>
            </MotionReveal>
          </div>

          <div className="hidden md:flex flex-1 relative" />
        </section>

        <section className="relative overflow-hidden px-4 pb-16">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,26,0)_0%,#0d0d1a_8%,#0d0d1a_100%)]" />
          <div className="absolute inset-x-0 top-24 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute left-1/2 top-0 bottom-0 hidden w-px bg-linear-to-b from-cyan-300/0 via-cyan-300/15 to-cyan-300/0 lg:block" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_10%_20%,rgba(6,182,212,0.08),transparent),radial-gradient(ellipse_55%_55%_at_90%_70%,rgba(251,146,60,0.07),transparent)] motion-soft-float" />

          <div className="relative max-w-7xl mx-auto mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {stats.map((stat, index) => (
                <MotionReveal
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-[#111122]/85 backdrop-blur-md p-5 relative overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.22)] motion-scan-line"
                  delay={index * 0.08}
                  y={22}
                  hover
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-orange-400/70 via-cyan-300/30 to-transparent" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-3xl font-bold text-orange-300 font-mono">
                        {stat.value}
                      </p>
                      <p className="text-xs uppercase tracking-widest text-white/40 mt-2">
                        {stat.label}
                      </p>
                    </div>
                    <span className="text-2xl font-mono font-bold text-white/[0.04]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </MotionReveal>
              ))}
            </div>

            <div className="mt-14 space-y-16">
              <section className="relative">
                <MotionReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="block w-1 h-6 bg-orange-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                      <h2 className="text-xl font-bold text-white uppercase tracking-widest">
                        Selected Projects
                      </h2>
                    </div>
                    <p className="text-sm text-white/45 leading-6 max-w-2xl">
                      A quick path from proof of impact to the systems and
                      tooling behind it.
                    </p>
                  </div>
                  <Link
                    href="/projects"
                    className="text-orange-400 hover:text-orange-300 text-sm font-semibold tracking-wider uppercase transition"
                  >
                    View all
                  </Link>
                </MotionReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {projects.slice(0, 3).map((project, i) => (
                    <MotionReveal key={project.slug} delay={i * 0.08} hover className="h-full">
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      className="rounded-xl border border-white/10 bg-white/[0.045] backdrop-blur-sm overflow-hidden hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(6,182,212,0.18)] transition-all duration-200 group flex flex-col h-full"
                    >
                      <div className="relative h-44 bg-white/5 overflow-hidden">
                        <video
                          className="h-full w-full object-cover opacity-75 group-hover:scale-105 transition duration-300"
                          src="/nice.mp4"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                        <div className="absolute inset-0 bg-[#0d0d1a]/20" />
                        <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400/60 rounded-tl" />
                        <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400/60 rounded-br" />
                        <span className="absolute top-3 right-3 text-xs font-mono text-white/50 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <p className="text-xs text-white/40 mb-2 uppercase tracking-wider">
                          {project.type} / {project.year}
                        </p>
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-200 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/50 leading-6 flex-1">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/5">
                          {project.stack.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] border border-white/10 bg-[#0d0d1a]/60 text-white/45 px-2 py-0.5 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                    </MotionReveal>
                  ))}
                </div>
              </section>

              <MotionReveal>
              <section className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-7 md:p-8 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_20%_0%,rgba(6,182,212,0.09),transparent)]" />
                <div className="relative">
                  <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="block w-1 h-6 bg-orange-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                        <h2 className="text-xl font-bold text-white uppercase tracking-widest">
                          Capabilities
                        </h2>
                      </div>
                      <p className="text-white/55 leading-7 max-w-xl">
                        {profile.availability}. I care about systems that feel
                        scalable, observable, and dependable in production.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {capabilities.map((capability) => (
                        <MotionReveal
                          key={capability.title}
                          className="rounded-xl border border-white/10 bg-[#0d0d1a]/45 p-5"
                          delay={0.05}
                          y={18}
                          hover
                        >
                          <p className="text-sm font-bold text-orange-300 uppercase tracking-widest mb-3">
                            {capability.title}
                          </p>
                          <p className="text-sm text-white/55 leading-6">
                            {capability.description}
                          </p>
                        </MotionReveal>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-8">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
                      <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-widest">
                          Tech Stack
                        </h3>
                        <p className="text-sm text-white/40 mt-2 max-w-xl leading-6">
                          Tools I use across service development, messaging,
                          databases, deployment, and banking integrations.
                        </p>
                      </div>
                      <span className="text-xs text-orange-300 uppercase tracking-widest">
                        {techStack.length} groups
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
                      {techStack.map((group, index) => (
                        <MotionReveal
                          key={group.category}
                          className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0d0d1a]/50 p-5 hover:border-cyan-400/40 hover:bg-[#0d0d1a]/70 hover:shadow-[0_0_22px_rgba(6,182,212,0.12)] transition-all"
                          delay={index * 0.05}
                          y={18}
                          hover
                        >
                          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-orange-400/70 via-cyan-300/30 to-transparent" />
                          <div className="flex items-start justify-between gap-4 mb-5">
                            <div>
                              <p className="text-[10px] text-white/35 uppercase tracking-widest mb-2">
                                Stack Group
                              </p>
                              <h4 className="text-sm font-bold text-white uppercase tracking-widest leading-5">
                                {group.category}
                              </h4>
                            </div>
                            <span className="text-3xl font-mono font-bold text-white/[0.045] group-hover:text-orange-300/20 transition-colors">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {group.items.map((item, itemIndex) => (
                              <span
                                key={item}
                                className={`rounded border px-2.5 py-1.5 text-xs transition-colors ${
                                  itemIndex === 0
                                    ? "border-orange-400/40 bg-orange-400/10 text-orange-200"
                                    : "border-white/10 bg-[#0d0d1a]/60 text-white/65 group-hover:border-white/20 group-hover:text-white/80"
                                }`}
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </MotionReveal>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              </MotionReveal>

              <section className="relative">
                <MotionReveal className="flex items-center gap-3 mb-8">
                  <span className="block w-1 h-6 bg-orange-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  <h2 className="text-xl font-bold text-white uppercase tracking-widest">
                    Experience
                  </h2>
                </MotionReveal>
                <div className="space-y-4">
                  {experience.map((item, index) => (
                    <MotionReveal
                      key={`${item.role}-${item.company}`}
                      className="rounded-xl border border-white/10 bg-white/[0.045] backdrop-blur-sm p-6 relative overflow-hidden"
                      delay={index * 0.06}
                      y={20}
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-orange-400/60 to-transparent rounded-l-xl" />
                      <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8">
                        <div className="flex-1">
                          <p className="text-xs text-orange-400 uppercase tracking-widest mb-3">
                            {item.period}
                          </p>
                          <h3 className="text-lg font-bold text-white">
                            {item.role}
                          </h3>
                          <p className="text-sm text-white/40 mb-4">
                            {item.company}
                          </p>
                          <p className="text-sm text-white/55 leading-6">
                            {item.summary}
                          </p>
                        </div>
                        <span className="text-3xl font-mono font-bold text-white/[0.035] hidden sm:block shrink-0 self-center">
                          {String(experience.length - index).padStart(2, "0")}
                        </span>
                      </div>
                    </MotionReveal>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
