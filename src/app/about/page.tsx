import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { experience, profile, skills } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d1a]">
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 pt-28 pb-16">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
          <section>
            <p className="text-xs uppercase tracking-[0.35em] text-orange-400 mb-4 font-semibold">
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              {profile.name}
            </h1>
            <p className="text-white/60 leading-7 mb-8">{profile.summary}</p>
            <p className="text-sm text-white/40 uppercase tracking-wider">
              {profile.location}
            </p>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
            <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-5">
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-lg border border-white/10 bg-[#0d0d1a]/60 px-4 py-3 text-sm text-white/70"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-1 h-6 bg-orange-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            <h2 className="text-xl font-bold text-white uppercase tracking-widest">
              Experience
            </h2>
          </div>
          <div className="space-y-4">
            {experience.map((item) => (
              <div
                key={`${item.role}-${item.company}`}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
              >
                <p className="text-xs text-orange-400 uppercase tracking-widest mb-3">
                  {item.period}
                </p>
                <h3 className="text-lg font-bold text-white">{item.role}</h3>
                <p className="text-sm text-white/40 mb-4">{item.company}</p>
                <p className="text-sm text-white/55 leading-6">{item.summary}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
