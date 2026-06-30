import Link from "next/link";
import { notFound } from "next/navigation";
import { MotionReveal } from "@/components/common/motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { projects } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d1a]">
      <Header />
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 pt-28 pb-16">
        <MotionReveal y={14}>
          <Link
            href="/projects"
            className="text-xs uppercase tracking-wider text-white/40 hover:text-orange-400 transition"
          >
            Back to projects
          </Link>
        </MotionReveal>

        <MotionReveal y={26}>
        <section className="mt-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
          <div className="relative h-64 md:h-96 bg-white/5">
            <video
              className="h-full w-full object-cover opacity-80"
              src="/nice.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <span className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-cyan-400/60 rounded-tl" />
            <span className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-cyan-400/60 rounded-br" />
          </div>

          <div className="p-6 md:p-8">
            <MotionReveal y={18} delay={0.08}>
              <p className="text-xs text-orange-400 uppercase tracking-widest mb-4">
                {project.type} / {project.year}
              </p>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                {project.title}
              </h1>
              <p className="text-white/60 leading-7 mb-8">{project.description}</p>
            </MotionReveal>

            <div className="grid md:grid-cols-[1fr_0.8fr] gap-8 border-t border-white/10 pt-8">
              <MotionReveal y={18} delay={0.14}>
                <h2 className="text-sm text-white uppercase tracking-widest mb-3">
                  Impact
                </h2>
                <p className="text-sm text-white/55 leading-6">{project.impact}</p>
              </MotionReveal>
              <MotionReveal y={18} delay={0.2}>
                <h2 className="text-sm text-white uppercase tracking-widest mb-3">
                  Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="text-xs rounded border border-white/10 bg-white/5 px-2.5 py-1 text-white/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>
        </MotionReveal>
      </main>
      <Footer />
    </div>
  );
}
