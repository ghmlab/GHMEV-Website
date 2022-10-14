export const banner = {
    animate: {
        transiiton: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
        },
    },
};

export const letterAnimation  = {
    initial : {
        y: 400
    },
    animate: {
        y: 0,
        transiiton: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 1
        }
    }
}