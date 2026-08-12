function AppleMark(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
      <path d="M16.7 1c.12 1.1-.32 2.17-1 2.95-.7.8-1.83 1.42-2.93 1.33-.15-1.06.37-2.17 1.03-2.9C14.5 1.6 15.65 1.06 16.7 1Zm3.9 16.6c-.4.93-.6 1.34-1.12 2.16-.72 1.14-1.74 2.56-3 2.57-1.12.01-1.4-.73-2.92-.72-1.52.01-1.83.74-2.96.73-1.27-.01-2.24-1.3-2.96-2.44-2.03-3.2-2.24-6.95-.99-8.95.89-1.42 2.29-2.25 3.6-2.25 1.34 0 2.18.74 3.29.74 1.08 0 1.73-.74 3.29-.74 1.17 0 2.41.64 3.29 1.74-2.9 1.59-2.43 5.72.48 7.16Z" />
    </svg>
  );
}
function PlayMark(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
      <path d="M4.8 2.6c-.5.3-.8.8-.8 1.4v16c0 .6.3 1.1.8 1.4l9-9.4-9-9.4Zm10.1 8.5-2.3-2.4L6.1 3l10.9 6.3-2.1 1.8Zm1 2 2.1 1.8L6.1 21l6.5-6.9 2.3-2Zm3.9-.5c.5-.3.8-.8.8-1.4s-.3-1.1-.8-1.4l-2-1.2-2.4 2.6 2.4 2.6 2-1.2Z" />
    </svg>
  );
}

export default function AppBadges({ color = "var(--color-core)" }) {
  return (
    <section className="border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
          On your phone
        </h2>
        <p className="mt-3 max-w-lg text-sm text-[var(--color-ink-dim)]">
          Native apps for iOS and Android are in the works for this division.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <div
            className="flex items-center gap-3 rounded-xl border px-5 py-3"
            style={{ borderColor: "var(--color-line)" }}
          >
            <AppleMark style={{ color }} />
            <div className="leading-tight">
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-ink-dim)]">
                Coming soon on the
              </div>
              <div className="font-display text-sm font-bold">App Store</div>
            </div>
          </div>
          <div
            className="flex items-center gap-3 rounded-xl border px-5 py-3"
            style={{ borderColor: "var(--color-line)" }}
          >
            <PlayMark style={{ color }} />
            <div className="leading-tight">
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-ink-dim)]">
                Coming soon on
              </div>
              <div className="font-display text-sm font-bold">Google Play</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
