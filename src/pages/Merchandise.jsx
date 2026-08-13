import { useState } from "react";
import { Shirt, Sticker, Package, Mail } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "merchandise");

const ORDERS_EMAIL = "orders@hcmtech-official.com";

const products = [
  {
    id: "tee",
    icon: Shirt,
    name: "HCM Universe Tee",
    price: "$38",
    blurb: "Heavyweight cotton, oversized drop-shoulder fit, orbit-diagram graphic across the back.",
    hasSize: true,
  },
  {
    id: "hoodie",
    icon: Shirt,
    name: "HCM Drop-Shoulder Hoodie",
    price: "$68",
    blurb: "Same oversized fit as the tee, heavier fleece, small embroidered logo on the chest.",
    hasSize: true,
  },
  {
    id: "cap",
    icon: Package,
    name: "HCM Low-Profile Cap",
    price: "$32",
    blurb: "Embroidered logo, low-profile fit, no size chart needed — one size, adjustable strap.",
    hasSize: false,
  },
  {
    id: "stickers",
    icon: Sticker,
    name: "HCM Division Sticker Pack",
    price: "$12",
    blurb: "A vinyl sheet with a sticker for every division — one for the laptop, one for the bottle.",
    hasSize: false,
  },
];

export default function Merchandise() {
  const [form, setForm] = useState({
    item: products[0].id,
    size: "M",
    quantity: 1,
    name: "",
    email: "",
    address: "",
    notes: "",
  });

  const selected = products.find((p) => p.id === form.item);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleOrder(e) {
    e.preventDefault();
    const subject = `HCM Merch order — ${selected.name}`;
    const bodyLines = [
      `Item: ${selected.name} (${selected.price})`,
      selected.hasSize ? `Size: ${form.size}` : null,
      `Quantity: ${form.quantity}`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Shipping address: ${form.address}`,
      form.notes ? `Notes: ${form.notes}` : null,
    ].filter(Boolean);
    const body = bodyLines.join("\n");
    window.location.href = `mailto:${ORDERS_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="A small first drop — four pieces, kept simple. Order straight from this page."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            The drop
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => update("item", p.id)}
                className="flex flex-col rounded-2xl border p-6 text-left transition-colors"
                style={{
                  borderColor: form.item === p.id ? d.color : "var(--color-line)",
                  background: "var(--color-surface)",
                }}
              >
                <p.icon size={22} style={{ color: d.color }} />
                <h3 className="mt-4 font-display text-lg font-bold">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                  {p.blurb}
                </p>
                <div className="mt-4 font-mono text-sm" style={{ color: d.color }}>
                  {p.price}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            Order
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)]">
            Fill this in and it opens a pre-filled email to us — nothing gets
            charged automatically, we'll confirm total and shipping by
            email.
          </p>

          <form onSubmit={handleOrder} className="mt-6 space-y-4">
            <div>
              <label className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-ink-dim)]">
                Item
              </label>
              <select
                value={form.item}
                onChange={(e) => update("item", e.target.value)}
                className="mt-1 w-full rounded-lg border bg-transparent px-3 py-2 text-sm"
                style={{ borderColor: "var(--color-line)" }}
              >
                {products.map((p) => (
                  <option key={p.id} value={p.id} className="bg-[var(--color-void)]">
                    {p.name} — {p.price}
                  </option>
                ))}
              </select>
            </div>

            {selected.hasSize && (
              <div>
                <label className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-ink-dim)]">
                  Size
                </label>
                <select
                  value={form.size}
                  onChange={(e) => update("size", e.target.value)}
                  className="mt-1 w-full rounded-lg border bg-transparent px-3 py-2 text-sm"
                  style={{ borderColor: "var(--color-line)" }}
                >
                  {["S", "M", "L", "XL", "XXL"].map((s) => (
                    <option key={s} value={s} className="bg-[var(--color-void)]">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-ink-dim)]">
                Quantity
              </label>
              <input
                type="number"
                min="1"
                value={form.quantity}
                onChange={(e) => update("quantity", e.target.value)}
                className="mt-1 w-full rounded-lg border bg-transparent px-3 py-2 text-sm"
                style={{ borderColor: "var(--color-line)" }}
              />
            </div>

            <div>
              <label className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-ink-dim)]">
                Name
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="mt-1 w-full rounded-lg border bg-transparent px-3 py-2 text-sm"
                style={{ borderColor: "var(--color-line)" }}
              />
            </div>

            <div>
              <label className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-ink-dim)]">
                Email
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="mt-1 w-full rounded-lg border bg-transparent px-3 py-2 text-sm"
                style={{ borderColor: "var(--color-line)" }}
              />
            </div>

            <div>
              <label className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-ink-dim)]">
                Shipping address
              </label>
              <textarea
                required
                rows={3}
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
                className="mt-1 w-full rounded-lg border bg-transparent px-3 py-2 text-sm"
                style={{ borderColor: "var(--color-line)" }}
              />
            </div>

            <div>
              <label className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-ink-dim)]">
                Notes (optional)
              </label>
              <textarea
                rows={2}
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                className="mt-1 w-full rounded-lg border bg-transparent px-3 py-2 text-sm"
                style={{ borderColor: "var(--color-line)" }}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full px-5 py-3 text-sm font-medium transition-opacity hover:opacity-85"
              style={{ background: d.color, color: "var(--color-void)" }}
            >
              Email this order
            </button>
          </form>

          <a
            href={`mailto:${ORDERS_EMAIL}`}
            className="mt-6 flex items-center gap-2 text-sm text-[var(--color-ink-dim)] hover:text-[var(--color-ink)]"
          >
            <Mail size={16} />
            Prefer to just email us directly? {ORDERS_EMAIL}
          </a>
          <p className="mt-3 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Placeholder inbox — swap {ORDERS_EMAIL} for the real one in{" "}
            <code>src/pages/Merchandise.jsx</code> once it exists.
          </p>
        </div>
      </section>
    </>
  );
}
