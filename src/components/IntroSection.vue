<template>
  <section class="intro-section">
    <div class="weave-container">
      <svg viewBox="0 0 1200 400" class="weave-svg">
        <defs>
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#00fff2" />
            <stop offset="50%" stop-color="#ff00f7" />
            <stop offset="100%" stop-color="#00fff2" />
          </linearGradient>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" class="weave-svg-text">
          NOOR
        </text>
      </svg>
      <p class="caption">Creative Technologist | ML Engineer | Fashion Visionary</p>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bold+Apex&display=swap');

.intro-section {
  height: 100vh;
  background-color: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.weave-container {
  text-align: center;
}

.weave-svg {
  width: 100%;
  height: 400px;
}

.weave-svg-text {
  font-size: 320px;
  fill: none;
  stroke: url(#neonGradient);
  stroke-width: 3;
  stroke-dasharray: 4000;
  stroke-dashoffset: 4000;
  animation: particleAssemble 5s ease forwards, glowPulseLoop 6s ease-in-out 5s infinite;
  font-family: 'Bold Apex', sans-serif;
  letter-spacing: 8px;
  filter: url(#glow);
}

@keyframes particleAssemble {
  0% {
    stroke-dashoffset: 4000;
    opacity: 0.2;
    transform: scale(0.95);
  }
  50% {
    opacity: 0.6;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes glowPulseLoop {
  0% {
    stroke-width: 3;
    stroke: url(#neonGradient);
    filter: drop-shadow(0 0 4px #00fff2);
  }
  50% {
    stroke-width: 5;
    stroke: #ffffff88;
    filter: drop-shadow(0 0 12px #ff00f7);
  }
  100% {
    stroke-width: 3;
    stroke: url(#neonGradient);
    filter: drop-shadow(0 0 4px #00fff2);
  }
}

.caption {
  font-size: 1.8rem;
  margin-top: 2rem;
  color: white;
  animation: fadeIn 6s ease-in forwards;
  opacity: 0;
  position: relative;
  font-family: 'Bold Apex', sans-serif;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

  