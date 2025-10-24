let mm = gsap.matchMedia();

mm.add("(min-width: 551px)", () => {
  // Desktop Animation
  gsap.set('.a', { opacity: 0, y: 30 });
  gsap.set('.right #shoe-img', { opacity: 0, y: 20, scale: 2 });

  let tl = gsap.timeline();
  tl.from('nav', { opacity: 0, duration: 1, y: -20, ease: "power2.out" })
    .from('.left', { width: 0, opacity: 1, duration: 1.3, ease: "expo.inOut" })
    .from('.right', { width: 0, opacity: 1, duration: 1.5, ease: "expo.inOut" }, "-=0.8")
    .to('.a', { opacity: 1, stagger: 0.1, y: 0, duration: 1.2, ease: "expo.out" }, "-=1")
    .to('.right #shoe-img', { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "expo.out" }, "-=0.5");
});

mm.add("(max-width: 550px)", () => {
  // Mobile Animation
  gsap.set('.a', { opacity: 0, y: 20 });
  gsap.set('.right #shoe-img', { opacity: 0, y: 10, scale: 1.4 });

  let tl = gsap.timeline();
  tl.from('nav', { opacity: 0, duration: 1, y: -20, ease: "power2.out" })
    .from('.left', { opacity: 0, duration: 1, ease: "expo.inOut" })
    .to('.a', { opacity: 1, stagger: 0.1, y: 0, duration: 1.2, ease: "expo.out" }, "-=0.6")
    .to('.right #shoe-img', { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "expo.out" }, "-=0.5");
});
