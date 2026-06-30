import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { capabilities, profile, stats, techStack } from "@/data/portfolio";

export default function ContactPage() {
  const phoneHref = profile.phone.replace(/[^\d+]/g, "");
  const primaryStack = techStack.flatMap((group) => group.items).slice(0, 10);

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d1a]">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-white/10 px-4 pt-28 pb-14">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_0%_100%,rgba(6,182,212,0.1),transparent)]" />
          <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-orange-400 mb-4 font-semibold">
                Contact
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                Let&apos;s build reliable backend systems.
              </h1>
              <p className="text-white/60 leading-8 max-w-2xl">
                I&apos;m open to backend engineering opportunities around
                fintech platforms, event-driven services, data workflows, and
                production-grade integrations.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-3">
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
            </div>
          </div>
        </section>

        <section className="max-w-7xl w-full mx-auto px-4 py-14">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-8 items-start">
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-1 h-6 bg-orange-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                <h2 className="text-xl font-bold text-white uppercase tracking-widest">
                  Reach Me
                </h2>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="text-xs text-white/35 uppercase tracking-widest mb-2">
                    Email
                  </p>
                  <a
                    href={`mailto:${profile.email}?subject=Backend%20engineering%20opportunity`}
                    className="block text-sm sm:text-base text-white/75 hover:text-orange-300 transition break-all font-mono"
                  >
                    {profile.email}
                  </a>
                </div>

                <div>
                  <p className="text-xs text-white/35 uppercase tracking-widest mb-2">
                    Phone
                  </p>
                  <a
                    href={`tel:${phoneHref}`}
                    className="block text-sm sm:text-base text-white/75 hover:text-orange-300 transition font-mono"
                  >
                    {profile.phone}
                  </a>
                </div>

                <div>
                  <p className="text-xs text-white/35 uppercase tracking-widest mb-2">
                    GitHub
                  </p>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm sm:text-base text-white/75 hover:text-orange-300 transition break-all font-mono"
                  >
                    github.com/dauphaiduy
                  </a>
                </div>

                <div>
                  <p className="text-xs text-white/35 uppercase tracking-widest mb-2">
                    Location
                  </p>
                  <p className="text-sm sm:text-base text-white/75">
                    {profile.location}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a
                  href={`mailto:${profile.email}?subject=Backend%20engineering%20opportunity`}
                  className="inline-flex justify-center bg-orange-500 text-white font-semibold px-6 py-3.5 rounded-lg shadow-[0_0_24px_rgba(6,182,212,0.35)] hover:bg-orange-400 hover:shadow-[0_0_32px_rgba(6,182,212,0.55)] transition-all duration-200 uppercase tracking-widest text-xs"
                >
                  Send Email
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center border border-cyan-400/70 text-orange-300 font-semibold px-6 py-3.5 rounded-lg hover:bg-orange-400 hover:text-[#0d0d1a] transition-all duration-200 uppercase tracking-widest text-xs"
                >
                  View GitHub
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="block w-1 h-6 bg-orange-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  <h2 className="text-xl font-bold text-white uppercase tracking-widest">
                    Best Fit
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {capabilities.map((capability) => (
                    <div key={capability.title}>
                      <p className="text-sm font-bold text-orange-300 uppercase tracking-widest mb-2">
                        {capability.title}
                      </p>
                      <p className="text-sm text-white/55 leading-6">
                        {capability.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
                <div className="flex items-center justify-between gap-4 mb-5">
                  <h2 className="text-sm font-bold text-white uppercase tracking-widest">
                    Primary Stack
                  </h2>
                  <span className="text-xs text-white/35 uppercase tracking-widest">
                    Backend focused
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {primaryStack.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-white/10 bg-[#0d0d1a]/60 px-2.5 py-1.5 text-xs text-white/65"
                    >
                      {item}
                    </span>
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
