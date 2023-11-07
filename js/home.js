particlesJS("particles-js", {
  particles: {
    number: { value: 350, density: { enable: true, value_area: 500 } },
    color: { value: "#ffffff" },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 50,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 50, duration: 0.4 },
      push: { particles_nb: 10 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});

const setHeight = () => {
  const currentHeight = window.innerHeight;
  const elementsId = [
    'particles-js',
    'content',
  ]
  elementsId.forEach((element) => {
    const elementById = document.getElementById(element);
    elementById.style.height = `${currentHeight}px`;
  });
}
window.addEventListener("resize", setHeight);
setHeight();
