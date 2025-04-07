import gsap from "gsap";

export function animateHeroText() {
    gsap.from(".hero-text", {
        opacity: 0,
        y: 100,
        duration: 2,
        stagger: 0.5,
        ease: "power3.out",
    });
}