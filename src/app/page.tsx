import Image from "next/image";
import Link from "next/link";
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
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0d0d1a]/45" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_10%_90%,rgba(6,182,212,0.18),transparent)]" />

          <div className="relative flex flex-col justify-end pb-16 px-8 md:px-16 max-w-3xl z-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400 font-semibold tracking-widest uppercase">Available for hire</span>
              </span>
              <span className="text-xs text-white/30 tracking-wider">{profile.location}</span>
            </div>
            <p className="text-sm font-bold text-white/50 tracking-[0.25em] uppercase mb-2">{profile.name}</p>
            <p className="text-xs uppercase tracking-[0.35em] text-orange-400 mb-4 font-semibold">
              {profile.role}
            </p>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-5 leading-tight text-white">
              Building reliable backend systems for{" "}
              <span className="text-orange-300 drop-shadow-[0_0_24px_rgba(6,182,212,0.7)]">
                fintech and banking teams
              </span>
            </h1>
            <p className="text-white/60 text-lg sm:text-xl mb-10 max-w-2xl">
              {profile.summary}
            </p>
            <div className="flex flex-wrap gap-4">
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
            </div>
          </div>

          <div className="hidden md:flex flex-1 relative" />
        </section>

        <section className="max-w-7xl mx-auto px-4 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-orange-400/70 via-orange-300/30 to-transparent" />
                <p className="text-3xl font-bold text-orange-300 font-mono">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-widest text-white/40 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="block w-1 h-6 bg-orange-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              <h2 className="text-xl font-bold text-white uppercase tracking-widest">
                Selected Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-orange-400 hover:text-orange-300 text-sm font-semibold tracking-wider uppercase transition"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projects.slice(0, 3).map((project, i) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-200 group flex flex-col"
              >
                <div className="relative h-44 bg-white/5 overflow-hidden">
                  <video
                    className="h-full w-full object-cover opacity-80 group-hover:scale-105 transition duration-300"
                    src="/nice.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
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
                  <h3 className="text-lg font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-6 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/5">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] border border-white/10 bg-[#0d0d1a]/60 text-white/40 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-white/10 py-16 px-4">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(6,182,212,0.08),transparent)]" />
          <div className="relative max-w-7xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-1 h-6 bg-orange-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                <h2 className="text-xl font-bold text-white uppercase tracking-widest">
                  Capabilities
                </h2>
              </div>
              <p className="text-white/55 leading-7 max-w-xl">
                {profile.availability}. I care about systems that feel scalable,
                observable, and dependable in production.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mt-10">
              {capabilities.map((capability) => (
                <div
                  key={capability.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-sm font-bold text-orange-300 uppercase tracking-widest mb-3">
                    {capability.title}
                  </p>
                  <p className="text-sm text-white/55 leading-6">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-5">
                Tech Stack
              </h3>
              <div className="grid md:grid-cols-4 gap-5">
                {techStack.map((group) => (
                  <div key={group.category}>
                    <p className="text-xs text-white/35 uppercase tracking-widest mb-3">
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded border border-white/10 bg-[#0d0d1a]/50 px-2.5 py-1.5 text-xs text-white/65"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-1 h-6 bg-orange-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            <h2 className="text-xl font-bold text-white uppercase tracking-widest">
              Experience
            </h2>
          </div>
          <div className="space-y-4">
            {experience.map((item, index) => (
              <div
                key={`${item.role}-${item.company}`}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-orange-400/60 to-transparent rounded-l-xl" />
                <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8">
                  <div className="flex-1">
                    <p className="text-xs text-orange-400 uppercase tracking-widest mb-3">
                      {item.period}
                    </p>
                    <h3 className="text-lg font-bold text-white">{item.role}</h3>
                    <p className="text-sm text-white/40 mb-4">{item.company}</p>
                    <p className="text-sm text-white/55 leading-6">
                      {item.summary}
                    </p>
                  </div>
                  <span className="text-3xl font-mono font-bold text-white/[0.035] hidden sm:block shrink-0 self-center">
                    {String(experience.length - index).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
