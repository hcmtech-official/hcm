import { Cpu, Target, Factory } from "lucide-react";
import DivisionHero from "../components/DivisionHero";
import AppBadges from "../components/AppBadges";
import { divisions } from "../data/divisions";

const d = divisions.find((x) => x.key === "electronics");

const wm = (name) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}?width=1200`;

const chinaMakers = [
  { name: "Huawei (Ascend line)", note: "The clear leader — Ascend 910C reportedly hits ~60% of an NVIDIA H100's inference throughput, built on SMIC's 7nm process. Holds roughly half of China's whole AI-chip market." },
  { name: "SMIC", note: "Not a chip designer — the foundry that actually fabricates most of these domestic chips, since China can't access the newest TSMC/Samsung nodes." },
  { name: "Cambricon", note: "Its Siyuan 590 trails Huawei, but revenue reportedly surged over 300% in 2025 as demand for any domestic alternative grew." },
  { name: "Alibaba T-Head & Baidu Kunlunxin", note: "Cloud giants building their own silicon in-house — T-Head has shipped over 470,000 AI chips; Kunlunxin's P800 targets A100-class performance." },
  { name: "Biren & Moore Threads", note: "Newer startups — part of a wider field that collectively raised over $8B during the export-restriction years." },
];

export default function Electronics() {
  return (
    <>
      <DivisionHero
        code={d.code}
        name={d.name}
        tagline={d.tagline}
        description="Every AI product HCM builds ultimately runs on somebody's silicon. HCM Electronics is where we track that layer — who's actually making the chips, and how the race between them is shifting."
        color={d.color}
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
          <Target size={22} style={{ color: d.color }} />
          <h2 className="mt-4 font-display text-xl font-bold sm:text-2xl">
            The objective
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
            HCM wants a real position on the hardware side of AI, not just
            the software built on top of it. That starts with tracking the
            chips properly — NVIDIA's lineup, and the field of Chinese
            manufacturers racing to build genuine alternatives.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            NVIDIA
          </h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]">
            <img
              src={wm("NVIDIA H100 (极客湾Geekerwan) 029.png")}
              alt="NVIDIA H100 AI GPU"
              loading="lazy"
              className="h-64 w-full object-cover"
            />
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Cpu size={20} style={{ color: d.color }} />
                <h3 className="font-display text-lg font-bold">Still the default</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
                The H100 and H200 (Hopper architecture) are still the most
                widely deployed AI chips on Earth, and the new Blackwell
                B200/GB200 generation — with two massive dies acting as one
                unit — is already rolling into data centers as the
                successor. NVIDIA's CUDA software stack remains the moat
                every competitor is really trying to get around.
              </p>
              <a
                href="https://commons.wikimedia.org/wiki/File:NVIDIA_H100_(%E6%9E%81%E5%AE%A2%E6%B9%BEGeekerwan)_029.png"
                target="_blank"
                rel="noreferrer"
                className="mt-4 block font-mono text-[10px] text-[var(--color-ink-dim)] hover:underline"
              >
                Photo: Wikimedia Commons, CC BY-SA
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
            China's answer
          </h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]">
            <img
              src={wm("SMIC，Shenzhen Factory.jpg")}
              alt="SMIC semiconductor factory, Shenzhen"
              loading="lazy"
              className="h-64 w-full object-cover"
            />
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Factory size={20} style={{ color: d.color }} />
                <h3 className="font-display text-lg font-bold">
                  Racing to close the gap
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-dim)] sm:text-base">
                Cut off from NVIDIA's most advanced chips by export
                controls, a genuine field of Chinese manufacturers has
                emerged — still a generation or two behind on raw
                performance, but closing fast on the workloads that matter
                most: inference at scale.
              </p>

              <div className="mt-6 space-y-4">
                {chinaMakers.map((m) => (
                  <div key={m.name} className="border-l-2 pl-4" style={{ borderColor: d.color }}>
                    <div className="font-display text-base font-bold">{m.name}</div>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-dim)]">
                      {m.note}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="https://commons.wikimedia.org/wiki/Category:Semiconductor_Manufacturing_International_Corporation_(SMIC)"
                target="_blank"
                rel="noreferrer"
                className="mt-6 block font-mono text-[10px] text-[var(--color-ink-dim)] hover:underline"
              >
                Photo: Wikimedia Commons, CC BY-SA
              </a>
            </div>
          </div>
          <p className="mt-6 font-mono text-[11px] text-[var(--color-ink-dim)]">
            Figures are the latest publicly reported estimates as of 2026
            and move fast — treat exact numbers as directional, not final.
          </p>
        </div>
      </section>
      <AppBadges color={d.color} />
    </>
  );
}
