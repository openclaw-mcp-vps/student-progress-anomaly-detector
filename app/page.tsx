export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Education Tech
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Detect Struggling Students<br />
          <span className="text-[#58a6ff]">Before They Fail</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your LMS — Canvas, Moodle, or Blackboard — and let our ML-powered engine surface at-risk students early, so you can intervene before it&apos;s too late.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start for $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to explore. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📊", title: "Engagement Analytics", desc: "Track login frequency, time-on-task, and forum activity across all your courses." },
            { icon: "⚠️", title: "Early Warning Alerts", desc: "Automated notifications when a student's pattern deviates from healthy baselines." },
            { icon: "💡", title: "Intervention Playbooks", desc: "Actionable suggestions tailored to each student's specific struggle pattern." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$12<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to keep every student on track.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited LMS integrations",
              "ML anomaly detection engine",
              "Real-time at-risk dashboard",
              "Automated email alerts",
              "Intervention strategy library",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which LMS platforms are supported?",
              a: "We currently support Canvas, Moodle, and Blackboard via their official APIs. More integrations are on the roadmap."
            },
            {
              q: "How does the anomaly detection work?",
              a: "Our ML model establishes a healthy engagement baseline per course, then flags students whose submission rates, login patterns, or grade trends deviate significantly from that baseline."
            },
            {
              q: "Is student data kept private and secure?",
              a: "Yes. All data is encrypted in transit and at rest. We are FERPA-compliant and never sell or share student data with third parties."
            }
          ].map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{faq.q}</p>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} Student Progress Anomaly Detector. All rights reserved.
      </footer>
    </main>
  );
}
