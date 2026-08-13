export default function VideoEmbed({ id, title, vertical = false }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-[var(--color-line)] bg-black ${
        vertical ? "aspect-[9/16]" : "aspect-video"
      }`}
    >
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
