<template>
    <section class="explore-aios-section">
      <button class="explore-btn" @click="goToAIos">
        Explore AIos
      </button>
    </section>
  </template>
  
  <script>
  export default {
    name: "ExploreAIosSection",
    methods: {
      goToAIos() {
        window.open("https://singh-harnoor.github.io/AIos/", "_blank");
      },
    },
  };
  </script>
  
  <style scoped>
  .explore-aios-section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0a0a0a;
  }
  
  .explore-btn {
    padding: 18px 42px;
    font-size: 1.4rem;
    font-weight: 600;
    color: white;
    background: #111;
    border: 2px solid white;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 1px;
  }
  
  .explore-btn:hover {
    background: white;
    color: #0a0a0a;
    transform: scale(1.05);
  }
  </style>
  