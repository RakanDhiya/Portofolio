type SimpleIconData = {
    title: string;
    hex: string;
    path: string;
    };

    type SkillLogoProps = {
    icon: SimpleIconData;
    name: string;
    };

    export default function SkillLogo({ icon, name }: SkillLogoProps) {
    return (
        <div className="group flex flex-col items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-purple-300/30 group-hover:bg-purple-300/[0.05] sm:h-20 sm:w-20">
            <svg
            viewBox="0 0 24 24"
            role="img"
            aria-label={icon.title}
            className="h-8 w-8 transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10"
            fill={`#${icon.hex}`}
            >
            <path d={icon.path} />
            </svg>
        </div>

        <span className="text-xs text-white/60 transition-colors duration-300 group-hover:text-purple-300">
            {name}
        </span>
        </div>
    );
}