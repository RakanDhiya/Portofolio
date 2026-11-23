export default function CosmicBackground() {
    return (
        <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
        >
        <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
        >
            <source src="/videos/asteroid-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#100b19]/55" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#100b19_100%)]" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#100b19]/30 via-transparent to-[#100b19]/60" />
        </div>
    );
}