import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { divisions, socials } from "../data/divisions";

// This runs entirely in the browser — no server, no API key, so it's
// safe to ship on a static GitHub Pages build. It matches the visitor's
// question against a small knowledge base built from the same
// divisions.js data that drives the rest of the site, so answers stay
// in sync automatically when a division is added or edited.

function answerFor(raw) {
  const q = raw.toLowerCase();

  const division = divisions.find(
    (d) =>
      q.includes(d.key) ||
      q.includes(d.name.toLowerCase()) ||
      q.includes(d.code.toLowerCase())
  );
  if (division) {
    return `${division.name} — "${division.tagline}" ${division.summary} You can read more on the ${division.name} page (${division.path}).`;
  }

  if (/\b(divisions?|brands?|universe|what.*(offer|do you do)|list)\b/.test(q)) {
    const names = divisions.map((d) => d.name).join(", ");
    return `HCM is one brand across six divisions: ${names}. Tap any of them on this page, or ask me about one by name.`;
  }

  if (/\b(app|ios|android|iphone|play store|app store)\b/.test(q)) {
    return "Each division has iOS and Android apps in the works — you'll find \"coming soon\" badges for the App Store and Google Play on that division's page.";
  }

  if (/\b(social|follow|instagram|x |twitter|tiktok|youtube)\b/.test(q)) {
    const list = socials.map((s) => `${s.name} (${s.handle})`).join(", ");
    return `You can follow HCM on ${list} — links are in the footer.`;
  }

  if (/\b(github|repo|source|code)\b/.test(q)) {
    return "The source for HCM's sites is on GitHub — there's a link on the HCM Tech page.";
  }

  if (/\b(kkreations|cake|showcase|client|project)\b/.test(q)) {
    return "KKreations World — a Sydney grazing & cakes business — is HCM Tech's current showcase project. Full details are on the HCM Tech page.";
  }

  if (/\b(who|hcm\b.*(is|stand)|what is hcm)\b/.test(q)) {
    return "HCM is one brand built across six divisions — Tech, AI, Travel, Games, Music, and Motion Pictures. Each runs independently but shares the same foundation.";
  }

  if (/\b(hi|hello|hey)\b/.test(q)) {
    return "Hey! Ask me about any HCM division, our socials, or the apps we're building.";
  }

  return "I'm not sure about that one yet — try asking about a specific division (Tech, AI, Travel, Games, Music, Motion Pictures), our socials, or the apps we're building.";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi — I'm the HCM assistant. Ask me about any of our divisions, our socials, or what's coming next.",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  function send(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    const reply = answerFor(text);
    setMessages((m) => [...m, { role: "user", text }, { role: "bot", text: reply }]);
    setInput("");
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close HCM assistant" : "Ask HCM a question"}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105"
        style={{ background: "var(--color-core)", color: "white" }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Ask HCM"
          className="fixed bottom-24 right-5 z-50 flex h-[28rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border shadow-2xl"
          style={{ borderColor: "var(--color-line)", background: "var(--color-surface)" }}
        >
          <div className="flex items-center justify-between border-b px-4 py-3" style={{ borderColor: "var(--color-line)" }}>
            <div>
              <div className="font-display text-sm font-bold">Ask HCM</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-ink-dim)]">
                Answers about the universe
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                  m.role === "user" ? "ml-auto" : ""
                }`}
                style={
                  m.role === "user"
                    ? { background: "var(--color-core)", color: "white" }
                    : { background: "var(--color-void-soft)", color: "var(--color-ink)" }
                }
              >
                {m.text}
              </div>
            ))}
          </div>

          <form onSubmit={send} className="flex items-center gap-2 border-t p-3" style={{ borderColor: "var(--color-line)" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about a division…"
              className="flex-1 rounded-lg border bg-transparent px-3 py-2 text-sm outline-none"
              style={{ borderColor: "var(--color-line)" }}
            />
            <button
              type="submit"
              aria-label="Send"
              className="flex h-9 w-9 items-center justify-center rounded-lg"
              style={{ background: "var(--color-core)", color: "white" }}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
