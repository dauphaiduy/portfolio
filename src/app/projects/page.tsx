import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { projects } from "@/data/portfolio";

export default function ProjectsPage() {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);
  const projectTypes = Array.from(new Set(projects.map((project) => project.type)));

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d1a]">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-white/10 px-4 pt-28 pb-14">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_0%_100%,rgba(6,182,212,0.1),transparent)]" />
          <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-orange-400 mb-4 font-semibold">
                Projects
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                Backend work across banking, payments, and automation.
              </h1>
              <p className="text-white/60 leading-8 max-w-2xl">
                A focused set of systems I&apos;ve helped build: digital card
                services, event processing, payment integrations, scheduled
                financial jobs, and multi-database workflows.
              </p>
            </div>

            {/* <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  <p className="text-2xl font-bold text-orange-300 font-mono">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-white/40 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div> */}
          </div>
        </section>

        <section className="max-w-7xl w-full mx-auto px-4 py-14 space-y-14">
          <div className="flex flex-wrap gap-2">
            {projectTypes.map((type) => (
              <span
                key={type}
                className="rounded border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/55 uppercase tracking-wider"
              >
                {type}
              </span>
            ))}
          </div>

          {featuredProject && (
            <Link
              href={`/projects/${featuredProject.slug}`}
              className="group block rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-cyan-400/50 hover:shadow-[0_0_28px_rgba(6,182,212,0.18)] transition-all"
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] min-h-80">
                <div className="relative bg-white/5 overflow-hidden">
                  <video
                    className="h-64 lg:h-full w-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
                    src="/nice.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-[#0d0d1a]/20" />
                  <span className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-cyan-400/60 rounded-tl" />
                  <span className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-cyan-400/60 rounded-br" />
                  <span className="absolute left-5 bottom-5 text-xs text-orange-300 uppercase tracking-widest">
                    Featured
                  </span>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-xs text-orange-400 uppercase tracking-widest mb-4">
                    {featuredProject.type} / {featuredProject.year}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                    {featuredProject.title}
                  </h2>
                  <p className="text-white/60 leading-7 mb-6">
                    {featuredProject.description}
                  </p>
                  <div className="border-t border-white/10 pt-5 mb-6">
                    <p className="text-xs text-white/35 uppercase tracking-widest mb-2">
                      Impact
                    </p>
                    <p className="text-sm text-white/55 leading-6">
                      {featuredProject.impact}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.stack.slice(0, 8).map((item) => (
                      <span
                        key={item}
                        className="text-xs rounded border border-white/10 bg-[#0d0d1a]/60 px-2.5 py-1.5 text-white/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          )}

          <section>
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-1 h-6 bg-orange-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              <h2 className="text-xl font-bold text-white uppercase tracking-widest">
                Project Index
              </h2>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {otherProjects.map((project, index) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.16)] transition-all relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-orange-400/60 via-orange-300/20 to-transparent" />
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <p className="text-xs text-orange-400 uppercase tracking-widest">
                      {project.type}
                    </p>
                    <span className="text-2xl font-mono font-bold text-white/[0.04]">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/35 uppercase tracking-widest mb-4">
                    {project.year}
                  </p>
                  <p className="text-sm text-white/55 leading-6 mb-5">
                    {project.description}
                  </p>
                  <div className="border-t border-white/10 pt-4 mb-5">
                    <p className="text-xs text-white/35 uppercase tracking-widest mb-2">
                      Impact
                    </p>
                    <p className="text-sm text-white/50 leading-6">
                      {project.impact}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 5).map((item) => (
                      <span
                        key={item}
                        className="text-xs rounded border border-white/10 bg-[#0d0d1a]/50 px-2.5 py-1 text-white/45"
                      >
                        {item}
                      </span>
                    ))}
                    {project.stack.length > 5 && (
                      <span className="text-xs rounded border border-white/10 bg-[#0d0d1a]/50 px-2.5 py-1 text-white/35">
                        +{project.stack.length - 5}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}
