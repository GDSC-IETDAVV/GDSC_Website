export const opacity = {
    initial: {
        opacity: 0,
    },
    open: {
        opacity: 1,
        transition: { duration: 0.5 }
    },
    closed: {
        opacity: 0,
    }
}

export const circleAnimation = {
    initial: {
        scale: 0,
        opacity: 0,
    },
    open: (i) => ({
        scale: 1,
        opacity: 1,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.5 * i }
    }),
    closed: {
        scale: 0,
        opacity: 0,
    }
}

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

export const buttonReveal = {
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

export const revelAnim = {
    initial: {
        y: "100%",
    },
    open: (i) => ({
        y: 0,
        transition: { duration: 0.6, ease: [0.85, 0, 0.15, 1], delay: 0.6 * i }
    }),
    closed: {
        y: "100%"
    }
}
export const paraRevealAnimation = {
    initial: {
        y: "100%",
    },
    open: (i) => ({
        y: 0,
        transition: { duration: 0.5, ease: [0.85, 0, 0.15, 1], delay: 0.025 * i }
    }),
    closed: {
        y: "100%"
    }
}