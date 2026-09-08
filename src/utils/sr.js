import ScrollReveal from 'scrollreveal';

let instance;
const sr = {
  reveal(target, options) {
    if (
      typeof window === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }
    if (!instance) {
      instance = ScrollReveal();
    }
    instance.reveal(target, options);
  },
};

export default sr;
