export const paragraphAnimation = {
    initial: {
        scale: 0,
        transition: { duration: 5, ease: [0.76, 0, 0.24, 1], delay: 3 }
    },
    enter: {
        scale: 1
    },
    exit: {
        scale: 0,
        transition: { duration: 5, ease: [0.76, 0, 0.24, 1], delay: 3 }
    }
}

export const NavAnimation = {
    initial: {
        x: "calc(0% + 100px)",
        y: "calc(0% + 200px)",
        width: "50px",
        height: "50px",
        opacity: "50%",
        borderRadius: "100px",
        scale: 0
    },
    enter: {
        x: "calc(100% + 200px)",
        y: "calc(100% + 200px)",
        borderRadius: "100px",
        opacity: "100%",
        scale: 100,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
        x: "calc(0% + 100px)",
        y: "calc(0% + 200px)",
        width: "50px",
        height: "50px",
        opacity: "45%",
        borderRadius: "100px",
        scale: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
}

export const slide = {
    initial: {
        x: "80px"
    },
    enter: (ind) => ({
        x: "0px",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.15 * ind }
    }),
    exit: (ind) => ({
        x: "80px",
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.1 * ind }
    })
}

export const revelAnim = {
    initial: {
        y: "100%",
    },
    open: (i) => ({
        y: 0,
        transition: { duration: 1, delay: 0.05 * i }
    }),
    closed: (i) => ({
        y: "100%",
        transition: { duration: 1, delay: 0.05 * i }
    })
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

// export const NavAnimation = {
//     initial: {
//         x: "calc(100% + 100px)"
//     },
//     enter: {
//         x: "0%",
//         transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
//     },
//     exit: {
//         x: "calc(100% + 100px)",
//         transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
//     }
// }

// export const slide = {
//     initial: {
//         x: "80px"
//     },
//     enter: (ind) => ({
//         x: "0px",
//         transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.25 * ind }
//     }),
//     exit: (ind) => ({
//         x: "80px",
//         transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 * ind }
//     })
// }