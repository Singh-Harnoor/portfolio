<template>
    <section class="about-section" ref="aboutSection">
      <div class="about-overlay" :class="{ visible: showContent }">
        <div class="about-content">
          <div class="about-card">
            <div class="about-image">
              <div class="image-background">
                <img src="../assets/Noor_3d.png" alt="Harnoor Profile" />
              </div>
            </div>
            <div class="about-text">
              <h2 class="headline">Who is Harnoor?</h2>
              <p class="intro">
                A creative technologist. A fashion visionary. A problem-solver with code. <br />
                <span class="highlight">Harnoor Singh</span> is not just a developer — he's a <strong>bridge between aesthetic and logic</strong>.
              </p>
              <p class="story">
                With a background in Computer Science, AI engineering, and luxury fashion design, Harnoor has redefined what it means to be a multi-hyphenate creator in the modern world. From building intelligent systems that can feel your emotions to constructing handcrafted couture fashion campaigns, he thrives in paradoxes — the elegant and the efficient, the abstract and the applied.
              </p>
              <p class="quote">“Innovation starts where convention ends.”</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const showContent = ref(false);
  const aboutSection = ref(null);
  
  let observer;
  
  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        showContent.value = entry.isIntersecting;
      },
      { threshold: 0.3 }
    );
  
    if (aboutSection.value) {
      observer.observe(aboutSection.value);
    }
  });
  
  onBeforeUnmount(() => {
    if (observer && aboutSection.value) {
      observer.unobserve(aboutSection.value);
    }
  });
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Bold+Apex&display=swap');
  
  .about-section {
    min-height: 100vh;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 6rem 2rem;
    font-family: 'Bold Apex', sans-serif;
    overflow: hidden;
  }
  
  .about-overlay {
    opacity: 0;
    transform: translateY(40px) scale(0.98);
    transition: opacity 1s ease, transform 1s ease;
    width: 100%;
    max-width: 1400px;
    background: #111;
    border-radius: 28px;
    box-shadow: 0 0 30px rgba(0, 255, 242, 0.06);
    overflow: hidden;
  }
  
  .about-overlay.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  
  .about-content {
    padding: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  
  .about-card {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }

    /* Mobile layout: stack image and text vertically */
    @media only screen and (max-width: 768px) {
    .about-card {
        flex-direction: column;
        gap: 2rem; /* reduce gap for mobile */
        align-items: center; /* center contents */
    }

    .about-image {
        width: 100%; /* Make image full width on mobile */
    }

    .about-text {
        text-align: center; /* Optional: center text for better visual */
        padding: 0 0rem;
    }


    }
  
  .about-text {
    flex: 1 1 70%;
    color: #f1f1f1;
  }
  
    .about-text .headline {
        font-size: 2.8rem;
        margin-bottom: 1.5rem;
        color: #00c8bb;
    }
  
    @media only screen and (max-width: 600px) {
    .about-text .headline{
        font-size: 1.2rem; /* smaller size for mobile */
    }
    }
  
  .intro,
  .story,
  .quote {
    font-size: 1.3rem;
    line-height: 1.8;
    margin-bottom: 1.4rem;
    color: #ccc;
  }

  @media only screen and (max-width: 600px) {
    .intro,
    .story,
    .quote {
        font-size: 1rem; /* smaller size for mobile */
    }
    }
  
  .highlight {
    color: #00c8bb;
    font-weight: bold;
  }
  
  .quote {
    font-style: italic;
    font-weight: bold;
    color: #eee;
    text-align: left;
  }
  
  .about-image {
    flex: 0 0 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #111; /* Background color for the image */
    border-radius: 10px;
    overflow: hidden;
  }
  
  .image-background {
    width: 100%;
    padding-top: 177.78%; /* To maintain 9:16 aspect ratio (16/9 = 1.7778) */
    position: relative;
  }
  
  .about-image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    box-shadow: 0 0 24px rgba(0, 255, 242, 0.1);
    background: transparent;
  }

  
  </style>
  
  
  
  
  
  
  