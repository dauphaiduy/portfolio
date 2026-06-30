import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { projects } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d1a]">
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 pt-28 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="block w-1 h-6 bg-orange-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          <h1 className="text-2xl font-bold text-white uppercase tracking-widest">
            Projects
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all"
            >
              <p className="text-xs text-orange-400 uppercase tracking-widest mb-3">
                {project.type} / {project.year}
              </p>
              <h2 className="text-xl font-bold text-white mb-4">
                {project.title}
              </h2>
              <p className="text-sm text-white/55 leading-6 mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="text-xs rounded border border-white/10 bg-white/5 px-2.5 py-1 text-white/45"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
