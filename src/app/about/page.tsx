import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { experience, profile, techStack } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d1a]">
      <Header />

      {/* Page hero */}
      <div className="relative border-b border-white/10 pt-32 pb-14 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_0%_100%,rgba(6,182,212,0.07),transparent)]" />
        <div className="relative max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-orange-400 mb-3 font-semibold">
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              {profile.name}
            </h1>
            <p className="text-white/50 text-sm uppercase tracking-widest">
              {profile.role} &mdash; {profile.location}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-green-400 font-semibold tracking-widest uppercase">
              Available for hire
            </span>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-14 space-y-14">
        {/* Summary + contact */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-1 h-6 bg-orange-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              <h2 className="text-xl font-bold text-white uppercase tracking-widest">
                Summary
              </h2>
            </div>
            <p className="text-white/60 leading-8 max-w-2xl">
              {profile.summary}
            </p>
            <p className="text-white/40 leading-7 mt-3 max-w-2xl text-sm">
              {profile.availability}.
            </p>
          </div>

          {/* Stats */}
        </div>

        {/* Contact strip */}
        {/* <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-4 grid flex-wrap gap-6 items-center">
          <span className="text-xs text-white/30 uppercase tracking-widest font-semibold">
            Contact
          </span>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-white/30">
            <p>Email: </p>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-white/60 hover:text-orange-400 transition font-mono"
            >
              {profile.email}
            </a>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-white/30">
            <p>Phone: </p>
            <a
              href={`tel:${profile.phone}`}
              className="text-sm text-white/60 hover:text-orange-400 transition font-mono"
            >
              {profile.phone}
            </a>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 hover:text-orange-400 transition font-mono "
          >
            GitHub &rarr;
          </a>
        </div> */}

        {/* Skills */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-1 h-6 bg-orange-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            <h2 className="text-xl font-bold text-white uppercase tracking-widest">
              Skills
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {techStack.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-white/10 bg-white/5 p-4 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-orange-400/60 via-orange-300/20 to-transparent" />
                <p className="text-[10px] text-white/35 uppercase tracking-widest mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-white/10 bg-[#0d0d1a]/60 px-2.5 py-1 text-xs text-white/65 hover:border-orange-400/40 hover:text-white/90 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
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
                    <h3 className="text-lg font-bold text-white">
                      {item.role}
                    </h3>
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
