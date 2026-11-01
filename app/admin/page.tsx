"use client";

import { useMemo, useState } from "react";
import { formatVnd, plans as seedPlans, type EsimPlan, type Region } from "@/lib/mock-data";

const emptyPlan: EsimPlan = {
  id: "new-plan",
  name: "New destination plan",
  country: "Japan",
  code: "JP",
  region: "Asia Pacific",
  data: "10GB",
  days: 15,
  price: 199000,
  features: ["4G/LTE speed"],
  coverage: "Nationwide",
  activation: "Scan QR after landing",
  note: "Mock plan",
};

export default function AdminPage() {
  const [items, setItems] = useState(seedPlans);
  const [editing, setEditing] = useState<EsimPlan | null>(null);
  const activeCount = useMemo(() => items.filter((item) => item.popular !== false).length, [items]);

  function savePlan() {
    if (!editing) return;
    setItems((current) => current.some((item) => item.id === editing.id)
      ? current.map((item) => item.id === editing.id ? editing : item)
      : [...current, editing]);
    setEditing(null);
  }

  return (
    <main className="admin-shell">
      <div className="admin-topbar"><a className="brand" href="/"><span className="brand-mark">◌</span> roamly</a><a className="back-link" href="/">← Back to storefront</a></div>
      <section className="admin-heading"><div><span className="eyebrow">MOCK CONTROL ROOM</span><h1>Keep the catalogue ready to roam.</h1><p>Local-only mock CRUD for the first design pass. Connect these actions to Turso after the schema is approved.</p></div><button className="button button-dark" onClick={() => setEditing({ ...emptyPlan, id: `plan-${Date.now()}` })}>＋ Add plan</button></section>
      <div className="admin-metrics"><div><strong>{items.length}</strong><span>Total plans</span></div><div><strong>{activeCount}</strong><span>Visible plans</span></div><div><strong>04</strong><span>Marketing blocks</span></div></div>
      <section className="admin-card"><div className="admin-card-head"><div><span className="eyebrow">ESIM CATALOGUE</span><h2>Plans</h2></div><span className="status-pill"><i /> Mock data</span></div><div className="table-wrap"><table><thead><tr><th>Plan</th><th>Region</th><th>Validity</th><th>Price</th><th>State</th><th /></tr></thead><tbody>{items.map((item) => <tr key={item.id}><td><strong>{item.name}</strong><small>{item.country} · {item.data}</small></td><td>{item.region}</td><td>{item.days} days</td><td>{formatVnd(item.price)}</td><td><span className="table-state"><i /> Live</span></td><td><div className="table-actions"><button onClick={() => setEditing(item)}>Edit</button><button onClick={() => setItems((current) => current.filter((entry) => entry.id !== item.id))}>Delete</button></div></td></tr>)}</tbody></table></div></section>
      <section className="admin-card marketing-card"><div><span className="eyebrow">MARKETING CONTENT</span><h2>Homepage blocks</h2><p>These controls are placeholders for the Turso-backed content editor.</p></div><div className="marketing-list"><div><span className="mini-icon">✦</span><div><strong>Featured plans</strong><small>Japan, Thailand, Europe Hop</small></div><button>Edit</button></div><div><span className="mini-icon">↗</span><div><strong>How it works</strong><small>Install · Land · Connect</small></div><button>Edit</button></div><div><span className="mini-icon">?</span><div><strong>FAQ</strong><small>4 answers ready</small></div><button>Edit</button></div></div></section>
      {editing && <div className="modal-backdrop" onClick={() => setEditing(null)}><div className="modal" onClick={(event) => event.stopPropagation()}><div className="modal-head"><div><span className="eyebrow">MOCK EDITOR</span><h2>{items.some((item) => item.id === editing.id) ? "Edit plan" : "New plan"}</h2></div><button className="icon-button" onClick={() => setEditing(null)}>×</button></div><div className="form-grid"><label>Plan name<input value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} /></label><label>Country<input value={editing.country} onChange={(e) => setEditing({ ...editing, country: e.target.value })} /></label><label>Region<select value={editing.region} onChange={(e) => setEditing({ ...editing, region: e.target.value as Region })}><option>Asia Pacific</option><option>Europe</option><option>Americas</option><option>Global</option></select></label><label>Data<input value={editing.data} onChange={(e) => setEditing({ ...editing, data: e.target.value })} /></label><label>Days<input type="number" value={editing.days} onChange={(e) => setEditing({ ...editing, days: Number(e.target.value) })} /></label><label>Price (VND)<input type="number" value={editing.price} onChange={(e) => setEditing({ ...editing, price: Number(e.target.value) })} /></label></div><div className="modal-actions"><button className="button button-quiet" onClick={() => setEditing(null)}>Cancel</button><button className="button button-primary" onClick={savePlan}>Save mock plan</button></div></div></div>}
    </main>
  );
}
