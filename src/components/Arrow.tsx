export function Arrow(props: { flipped: boolean; scaleFactor: number, style: any }) {
    return (
        <svg
            width={42 * props.scaleFactor}
            height={39 * props.scaleFactor}
            fill="none"
            style={{ transform: props.flipped ? "scaleX(-1)" : "", ...props.style }}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M41.036 18.592L1.455.295c-1.118-.517-2 1.052-.977 1.738L25.263 18.67a1 1 0 010 1.66L.478 36.967c-1.023.686-.141 2.255.977 1.738l39.581-18.297a1 1 0 000-1.816z"
                fill="white"
            />
        </svg>
    );
}