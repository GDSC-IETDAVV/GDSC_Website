export const headingReveal = {
    initial: {
        y: "100%",
        opacity: 0,
    },
    open: (i) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.5 * i }
    }),
    closed: {
        y: "100%",
        opacity: 0,
    }
}