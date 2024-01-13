export const headerReveal = {
    initial: {
        y: "-100%",
        opacity: 0,
    },
    open: (i) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1], delay: 1.25 * i }
    }),
    closed: {
        y: "-100%",
        opacity: 0,
    }
}