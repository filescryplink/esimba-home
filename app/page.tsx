"use client";

import { useMemo, useState } from "react";
import { benefits, countries, faqCategories, faqs, formatVnd, plans, regions, type EsimPlan } from "@/lib/mock-data";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState<(typeof regions)[number]>("All destinations");
  const [country, setCountry] = useState("All countries");
  const [selectedPlan, setSelectedPlan] = useState<EsimPlan>(plans[0]);
  const [detailPlan, setDetailPlan] = useState<EsimPlan | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const [faqQuery, setFaqQuery] = useState("");
  const [faqCategory, setFaqCategory] = useState<(typeof faqCategories)[number]>("All questions");

  const filteredPlans = useMemo(() => plans.filter((plan) => {
    const haystack = `${plan.name} ${plan.country} ${plan.region}`.toLowerCase();
    const matchesSearch = !search || haystack.includes(search.toLowerCase());
    const matchesRegion = region === "All destinations" || plan.region === region;
    const matchesCountry = country === "All countries" || plan.country === country;
    return matchesSearch && matchesRegion && matchesCountry;
  }), [search, region, country]);

  const filteredFaqs = useMemo(() => faqs.filter((faq) => {
    const matchesCategory = faqCategory === "All questions" || faq.category === faqCategory;
    const haystack = `${faq.question} ${faq.answer} ${faq.category}`.toLowerCase();
    return matchesCategory && (!faqQuery || haystack.includes(faqQuery.toLowerCase()));
  }), [faqCategory, faqQuery]);

  function searchPlans(value = query) {
    const cleanValue = value.trim();
    setSearch(cleanValue);
    setMobileNavOpen(false);
    document.getElementById("plans")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function choosePlan(plan: EsimPlan) {
    setSelectedPlan(plan);
    setDetailPlan(null);
    document.getElementById("request")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function resetFilters() {
    setQuery("");
    setSearch("");
    setRegion("All destinations");
    setCountry("All countries");
  }

  async function submitRequest(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("Sending your mock request…");
    const response = await fetch("/api/orders", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, name, planId: selectedPlan.id }) });
    const data = await response.json();
    setFormStatus(data.ok ? `Request received — ${data.requestId}. This is mock data, ready for the Turso step.` : data.message);
    if (data.ok) { setEmail(""); setName(""); }
  }

  return <main className="site-shell">
    <div className="top-note">Travel smarter · Stay connected · No roaming surprises</div>
    <section className="hero" id="top">
      <div className="container"><header className="header"><a className="brand" href="#top" aria-label="roamly home"><span className="brand-mark">◌</span> roamly</a><nav className={`nav ${mobileNavOpen ? "nav-open" : ""}`} aria-label="Primary navigation"><a href="#plans" onClick={() => setMobileNavOpen(false)}>Explore plans</a><a href="#how" onClick={() => setMobileNavOpen(false)}>How it works</a><a href="#faq" onClick={() => setMobileNavOpen(false)}>FAQ</a></nav><div className="header-actions"><a className="text-link" href="/admin">Admin mock</a><a className="button button-primary" href="#request">Get connected</a><button className="mobile-menu" aria-label="Toggle navigation" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen((open) => !open)}>☰</button></div></header></div>
      <div className="container hero-inner"><div className="hero-copy"><span className="eyebrow">YOUR NEXT SIGNAL</span><h1>Go further.<br /><em>Roam lighter.</em></h1><p>Travel eSIMs for curious people who would rather be exploring than searching for Wi‑Fi.</p><div className="search-box" role="search"><span className="search-icon" aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => event.key === "Enter" && searchPlans()} placeholder="Where are you headed?" aria-label="Search destinations" /><button className="button button-primary" onClick={() => searchPlans()}>Find my plan</button></div><div className="quick-search" aria-label="Popular destinations"><span>Popular:</span>{["Japan", "Europe", "Thailand", "Global"].map((destination) => <button key={destination} onClick={() => { setQuery(destination); searchPlans(destination); }}>{destination}</button>)}</div><div className="hero-proof"><span>✓ No passport needed</span><span>✓ Install before you fly</span></div></div><div className="hero-card" aria-label="Roamly travel pass preview"><div className="hero-card-top"><div><div className="hero-card-title">roamly<br />travel pass</div><span className="signal"><i /> signal ready</span></div><span className="route-dot">5G</span></div><div className="hero-route"><span className="route-dot">VN</span><span className="route-line" /><span className="route-dot">JP</span><span className="route-line" /><span className="route-dot">EU</span></div><div className="hero-card-bottom"><div><strong>One small eSIM.</strong><small>More room for the good stuff.</small></div><strong>∞</strong></div></div></div>
    </section>
    <div className="container stats"><div className="stat"><strong>120+</strong><span>destinations ready</span></div><div className="stat"><strong>5G</strong><span>where the network allows</span></div><div className="stat"><strong>2 min</strong><span>to install your plan</span></div></div>
    <section className="section"><div className="container"><div className="section-head"><div><span className="eyebrow">PICK A DIRECTION</span><h2>Where will your<br />signal take you?</h2></div><p>Start with a region, then narrow it down when you know your first stop.</p></div><div className="destinations">{[["Asia Pacific", "Japan · Thailand · Vietnam", "Japan", "d-jp"], ["Europe", "One plan, many borders", "Europe", "d-eu"], ["Americas", "Road trips welcome", "United States", "d-us"], ["Global", "For the frequent flyer", "Global", "d-global"]].map(([title, subtitle, term, className]) => <button className={`destination ${className}`} key={title} onClick={() => { setQuery(term); searchPlans(term); }}><strong>{title}</strong><span>{subtitle}</span><b>Explore →</b></button>)}</div></div></section>
    <section className="section plans-section" id="plans"><div className="container"><div className="section-head"><div><span className="eyebrow">THE GOOD STUFF</span><h2>Plans that fit<br />your itinerary.</h2></div><p>Simple data, clear validity and no awkward airport kiosk conversation.</p></div><div className="filter-bar"><div className="filter-chips" aria-label="Filter by region">{regions.map((item) => <button key={item} className={`filter-chip ${region === item ? "active" : ""}`} onClick={() => setRegion(item)}>{item}</button>)}</div><select className="select-filter" value={country} onChange={(event) => setCountry(event.target.value)} aria-label="Filter by country">{countries.map((item) => <option key={item}>{item}</option>)}</select>{(search || region !== "All destinations" || country !== "All countries") && <button className="reset-filter" onClick={resetFilters}>Reset filters</button>}</div><div className="results-row"><span><strong>{filteredPlans.length}</strong> plans available</span>{search && <span>Showing results for <strong>“{search}”</strong></span>}</div><div className="plan-grid">{filteredPlans.length ? filteredPlans.map((plan) => <article className={`plan-card ${plan.popular ? "is-popular" : ""}`} key={plan.id}>{plan.popular && <span className="popular-label">Most loved</span>}<div className="plan-top"><span className="plan-country">{plan.country} · {plan.region}</span><span className="plan-code">{plan.code}</span></div><h3>{plan.name}</h3><div className="plan-meta"><span>{plan.data}</span><span>{plan.days} days</span><span>{plan.coverage}</span></div><p className="plan-note">{plan.note}</p><div className="plan-bottom"><div className="price"><small>from</small>{formatVnd(plan.price)}{plan.originalPrice && <del>{formatVnd(plan.originalPrice)}</del>}</div><div className="plan-actions"><button className="button button-quiet" onClick={() => setDetailPlan(plan)}>Details</button><button className="button button-dark" onClick={() => choosePlan(plan)}>Choose plan</button></div></div></article>) : <div className="empty"><strong>No plans found yet.</strong><span>Try a country, region or one of our popular destinations.</span><button className="button button-quiet" onClick={resetFilters}>Show all plans</button></div>}</div></div></section>
    <section className="section how" id="how"><div className="container"><div className="section-head"><div><span className="eyebrow">THREE SMALL STEPS</span><h2>Install once.<br />Travel freely.</h2></div><p>The useful part is intentionally simple. Your trip can be complicated enough.</p></div><div className="steps"><div className="step"><span className="step-number">01 / BEFORE YOU GO</span><h3>Pick your plan</h3><p>Choose by destination, data and trip length. We keep the important bits visible.</p></div><div className="step"><span className="step-number">02 / AT HOME</span><h3>Scan your QR</h3><p>Install your eSIM while you still have reliable Wi‑Fi. It stays quiet until you arrive.</p></div><div className="step"><span className="step-number">03 / WHEN YOU LAND</span><h3>Turn on data</h3><p>Make roamly your data line and get back to the part of travel that matters.</p></div></div></div></section>
    <section className="section"><div className="container benefits"><div><span className="eyebrow">WHY ROAMLY</span><h2 className="section-head" style={{ display: "block", marginTop: 10 }}>The calm side<br />of connectivity.</h2><p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: 14, maxWidth: 390 }}>Built for the moment you walk out of arrivals and realise your map, translator and ride app all work. That moment should happen every time.</p></div><div className="benefit-list">{benefits.map((benefit) => <div className="benefit" key={benefit.number}><span className="benefit-number">{benefit.number}</span><div><h3>{benefit.title}</h3><p>{benefit.body}</p></div></div>)}</div></div></section>
    <section className="section faq-section" id="faq"><div className="container"><div className="faq-intro"><div><span className="eyebrow">NEED TO KNOW</span><h2>FAQ for your<br />next connection.</h2><p>Quick answers for choosing, installing and managing your travel eSIM.</p></div><div className="faq-search"><span aria-hidden="true">⌕</span><input value={faqQuery} onChange={(event) => setFaqQuery(event.target.value)} placeholder="Search questions" aria-label="Search FAQ" />{faqQuery && <button onClick={() => setFaqQuery("")} aria-label="Clear FAQ search">×</button>}</div></div><div className="faq-tabs" role="tablist" aria-label="FAQ categories">{faqCategories.map((category) => <button key={category} role="tab" aria-selected={faqCategory === category} className={faqCategory === category ? "active" : ""} onClick={() => setFaqCategory(category)}>{category}</button>)}</div><div className="faq-content"><div className="faq-category-note"><strong>{filteredFaqs.length}</strong><span>{faqCategory === "All questions" ? "answers across the full help centre" : `${faqCategory} answers`}</span></div><div className="faq-list">{filteredFaqs.length ? filteredFaqs.map((faq) => <details className="faq-item" key={faq.question}><summary><span>{faq.question}</span><small>{faq.category}</small></summary><p>{faq.answer}</p></details>) : <div className="faq-empty"><strong>No answer found.</strong><span>Try a different keyword or browse all questions.</span><button className="button button-quiet" onClick={() => { setFaqQuery(""); setFaqCategory("All questions"); }}>Show all questions</button></div>}</div></div><div className="faq-support"><strong>Still need a hand?</strong><span>Keep your order ID ready and contact support for help with installation or connectivity.</span><a href="mailto:support@roamly.example">Contact support →</a></div></div></section>
    <section className="request-section" id="request"><div className="container section request-layout"><div className="section-head"><span className="eyebrow">READY WHEN YOU ARE</span><h2>Leave the Wi‑Fi hunt behind.</h2><p>Tell us where you are going and we will prepare the right mock plan request. The current form is intentionally backed by demo data.</p><div className="request-note"><span>✦</span><span>Mock mode is on. Your request is not a real purchase and no payment is collected.</span></div></div><form className="request-form" onSubmit={submitRequest}><div className="selected-summary"><span>YOUR SELECTED PLAN</span><strong>{selectedPlan.name}</strong><small>{selectedPlan.data} · {selectedPlan.days} days · {formatVnd(selectedPlan.price)}</small></div><label>Selected plan<select value={selectedPlan.id} onChange={(event) => setSelectedPlan(plans.find((plan) => plan.id === event.target.value) || plans[0])}>{plans.map((plan) => <option key={plan.id} value={plan.id}>{plan.name} · {formatVnd(plan.price)}</option>)}</select></label><div className="form-row"><label>Your name<input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Alex Traveler" /></label><label>Email address<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" /></label></div>{formStatus && <div className="form-status">{formStatus}</div>}<button className="button button-primary" type="submit">Send mock request →</button></form></div></section>
    <footer className="footer"><div className="container footer-inner"><a className="brand" href="#top"><span className="brand-mark">◌</span> roamly</a><small>Original mock experience · Ready for Turso + Vercel</small><div className="footer-links"><a href="#plans">Plans</a><a href="#faq">FAQ</a><a href="/admin">Admin</a></div></div></footer>
    {detailPlan && <div className="modal-backdrop" role="presentation" onClick={() => setDetailPlan(null)}><section className="plan-modal" role="dialog" aria-modal="true" aria-labelledby="plan-modal-title" onClick={(event) => event.stopPropagation()}><button className="icon-button modal-close" onClick={() => setDetailPlan(null)} aria-label="Close details">×</button><span className="eyebrow">{detailPlan.country} · {detailPlan.region}</span><h2 id="plan-modal-title">{detailPlan.name}</h2><p className="modal-note">{detailPlan.note}</p><div className="modal-summary"><div><span>DATA</span><strong>{detailPlan.data}</strong></div><div><span>VALIDITY</span><strong>{detailPlan.days} days</strong></div><div><span>COVERAGE</span><strong>{detailPlan.coverage}</strong></div></div><div className="modal-info"><div><span>What is included</span>{detailPlan.features.map((feature) => <p key={feature}>✓ {feature}</p>)}</div><div><span>Activation</span><p>{detailPlan.activation}</p><small>Install before departure while connected to Wi‑Fi. Your main SIM can stay active for calls.</small></div></div><div className="modal-actions"><strong>{formatVnd(detailPlan.price)}</strong><button className="button button-primary" onClick={() => choosePlan(detailPlan)}>Choose this plan →</button></div></section></div>}
  </main>;
}
