export const smoothScrollTo = (elementY, duration) => {
    let startingY = window.pageYOffset;
    let diff = elementY - startingY;
    let start;

    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        let time = timestamp - start;
        let percent = Math.min(time / duration, 1);
        window.scrollTo(0, startingY + diff * percent);

        if (time < duration) {
            window.requestAnimationFrame(step);
        }
    });
};
