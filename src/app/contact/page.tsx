import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { profile } from "@/data/portfolio";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d1a]">
      <Header />
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 pt-28 pb-16">
        <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-orange-400 mb-4 font-semibold">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Let&apos;s build something reliable.
          </h1>
          <p className="text-white/55 leading-7 max-w-2xl mx-auto mb-8">
            {profile.availability}. Send a note with your product, timeline, and
            the backend systems or integrations you want to bring to life.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-block bg-orange-500 text-white font-semibold px-10 py-3.5 rounded-lg shadow-[0_0_24px_rgba(6,182,212,0.5)] hover:bg-orange-400 hover:shadow-[0_0_36px_rgba(6,182,212,0.7)] transition-all duration-200 uppercase tracking-widest text-sm"
          >
            {profile.email}
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
