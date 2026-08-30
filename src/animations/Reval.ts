import gsap from "gsap";

interface RevealOptions {
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
}

/**
 * دالة حركة الظهور لعنصر محدد أو مجموعة عناصر
 * @param target العنصر البرمجي (HTMLElement) أو كلاس CSS (مثلاً: '.reveal-item')
 * @param options خيارات الحركة مثل المسافة والتأخير
 */
export const revealElement = (
  target: string | HTMLElement | HTMLElement[],
  options: RevealOptions = {},
) => {
  const { y = 50, duration = 0.8, delay = 0, stagger = 0.15 } = options;

  return gsap.fromTo(
    target,
    {
      opacity: 0,
      y: y,
    },
    {
      opacity: 1,
      y: 0,
      duration: duration,
      delay: delay,
      stagger: stagger,
      ease: "power3.out",
    },
  );
};
