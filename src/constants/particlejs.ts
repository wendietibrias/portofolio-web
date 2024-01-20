const particleOptions = {
    background: {
      color: {
        value: "#f3f4f6",
      },
    },
    fullScreen:false,
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 7,
        },
        repulse: {
          distance: 250,
          duration: 0.7,
        },
      },
    },
    particles: {
      color: {
        value: "#95a5a6",
      },
      links: {
        color: "#ffffff",
        distance: 100,
        enable: true,
        opacity: 0.7,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 8,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 70,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  export default particleOptions;