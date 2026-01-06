import { useState } from "react";
import "../styles/pricing.css";

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section className="pricing">

      {/* HERO */}
      <div className="pricing-hero container">
        <span className="eyebrow">Simple & Transparent</span>
        <h1>
          Pricing that grows
          <span> with your business</span>
        </h1>
        <p>
          Start small, scale confidently. No hidden fees. No surprises.
        </p>
      </div>

      {/* TOGGLE */}
      <div className="pricing-toggle">
        <span className={!yearly ? "active" : ""}>Monthly</span>
        <button onClick={() => setYearly(!yearly)}>
          <span className={yearly ? "on" : ""}></span>
        </button>
        <span className={yearly ? "active" : ""}>
          Yearly <small>(Save 20%)</small>
        </span>
      </div>

      {/* PLANS */}
      <div className="pricing-cards container">
        {/* Starter */}
        <div className="pricing-card">
          <h3>Starter</h3>
          <p className="price">
            ₹{yearly ? "899" : "999"}<span>/mo</span>
          </p>
          <p className="desc">Perfect for individuals & small teams</p>

          <ul>
            <li>✔ Core features</li>
            <li>✔ Email support</li>
            <li>✔ Basic analytics</li>
          </ul>

          <button className="outline-btn">Get Started</button>
        </div>

        {/* Pro */}
        <div className="pricing-card featured">
          <div className="badge">Most Popular</div>
          <h3>Pro</h3>
          <p className="price">
            ₹{yearly ? "1,999" : "2,499"}<span>/mo</span>
          </p>
          <p className="desc">Best for growing businesses</p>

          <ul>
            <li>✔ Everything in Starter</li>
            <li>✔ Advanced analytics</li>
            <li>✔ Priority support</li>
            <li>✔ Custom workflows</li>
          </ul>

          <button className="primary-btn">Start Free Trial</button>
        </div>

        {/* Enterprise */}
        <div className="pricing-card">
          <h3>Enterprise</h3>
          <p className="price">Custom</p>
          <p className="desc">For large-scale organizations</p>

          <ul>
            <li>✔ Unlimited access</li>
            <li>✔ Dedicated manager</li>
            <li>✔ SLA & compliance</li>
            <li>✔ Custom integrations</li>
          </ul>

          <button className="outline-btn">Contact Sales</button>
        </div>
      </div>

      {/* TRUST */}
      <div className="pricing-trust">
        <p>Trusted by teams in 120+ countries • 99.9% uptime • Secure payments</p>
      </div>

      {/* FINAL CTA */}
      <div className="pricing-final-cta">
        <h2>Start building with confidence</h2>
        <p>No credit card required. Cancel anytime.</p>
        <button>Get Started Now</button>
      </div>

    </section>
  );
}
