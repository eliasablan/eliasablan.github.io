// Particles background
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

// Typed effect
const typed = new Typed('#typed', {
  stringsElement: '#typed-strings'
});

// Move through the website with keyboard
const ordered = [
  {
    name: 'landing',
    ArrowDown: 'bio'
  },
  {
    name: 'bio',
    ArrowUp: 'landing',
    ArrowDown: 'projects'
  },
  {
    name: 'projects',
    ArrowUp: 'bio',
    ArrowDown: 'contact'
  },
  {
    name: 'contact',
    ArrowUp: 'projects'
  }
]

document.addEventListener('keydown', function (event) {
  // Check if the key pressed is the up arrow key or the down arrow key
  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    event.preventDefault(); // Prevent the default behavior of arrow keys (e.g., scrolling the page)
    
    // Get the current section
    let currentSection = document.querySelector('.section:target') || document.querySelector('.section');
    
    const currentOrdered = ordered.find((section) => section.name == currentSection.id);

    if (!!currentOrdered[event.key]){
      document.location.hash = currentOrdered[event.key]
    }
  }
});