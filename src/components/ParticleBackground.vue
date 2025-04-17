<template>
    <Particles
      id="tsparticles"
      :options="particlesOptions"
    />
  </template>
  
  <script setup>
  const particlesOptions = {
    background: {
      color: { value: "#000000" } // Change this to transparent or brand color
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 60,
        density: { enable: true, area: 800 }
      },
      color: { value: "#00ffcc" },
      shape: { type: "circle" },
      opacity: { value: 0.7 },
      size: { value: { min: 1, max: 5 } },
      move: {
        enable: true,
        speed: 2,
        outModes: { default: "bounce" }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 4 }
      }
    },
    detectRetina: true
  };
  </script>
  
  <style scoped>
  #tsparticles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    pointer-events: none;
  }
  </style>
  