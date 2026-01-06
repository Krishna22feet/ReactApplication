import "../styles/features.css";
import FinalCTA from '../components/home/FinalCTA'

export default function Features() {
  return (
    <section className="features">

      {/* HERO */}
      <div className="features-hero container">
        <span className="eyebrow">Platform Capabilities</span>
        <h1>
          Everything you need to
          <span> build faster</span>
        </h1>
        <p>
          A complete set of powerful, flexible, and scalable features designed
          for real-world products and growing teams.
        </p>
      </div>

      {/* CORE FEATURES */}
      <div className="features-core container">
        <div className="features-grid">
          {[
            ["Lightning Fast", "Optimized for performance and instant load times."],
            ["Secure by Default", "Enterprise-grade security baked in from day one."],
            ["Scalable Architecture", "Built to grow with your business effortlessly."],
            ["Customizable UI", "Design and adapt interfaces without friction."],
            ["Developer Friendly", "Clean APIs and modern tooling support."],
            ["Analytics Ready", "Track, measure, and optimize everything."]
          ].map(([title, desc], i) => (
            <div key={i} className="feature-card">
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURE HIGHLIGHT */}
      <div className="features-highlight">
        <div className="container highlight-grid">
          <div>
            <span className="eyebrow">Why it matters</span>
            <h2>Built for modern teams</h2>
            <p>
              Whether you're a startup or an enterprise, our platform adapts
              seamlessly to your workflows, tools, and scale requirements.
            </p>
          </div>

          <div className="highlight-card">
            <ul>
              <li>⚡ Faster development cycles</li>
              <li>🔒 Security-first architecture</li>
              <li>📈 Growth-ready infrastructure</li>
              <li>🧩 Modular & extensible design</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ADVANCED */}
      <div className="features-advanced container">
        <h2>Advanced capabilities</h2>
        <div className="advanced-grid">
          <div className="advanced-card">
            <h3>Automation</h3>
            <p>Reduce manual effort with intelligent workflows.</p>
          </div>
          <div className="advanced-card">
            <h3>Integrations</h3>
            <p>Connect easily with your existing tools and services.</p>
          </div>
          <div className="advanced-card">
            <h3>Insights</h3>
            <p>Make data-driven decisions with real-time analytics.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      {/* <div className="features-cta">
        <h2>Ready to explore all features?</h2>
        <button>Get Started</button>
      </div> */}
      <FinalCTA />

    </section>
  );
}
