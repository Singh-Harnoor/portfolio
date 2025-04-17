<template>
  <section class="experience-section">
    <h2 class="section-title">Experience</h2>
    <div class="timeline-container">
      <div v-for="(item, index) in experiences" :key="index" class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-card-header">
            <h3>{{ item.role }}</h3>
            <p class="company">{{ item.company }} — {{ item.location }}</p>
            <p class="date">{{ item.date }}</p>
          </div>
          <ul class="description">
            <li v-for="(point, i) in item.description" :key="i">{{ point }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    role: 'Creative Technologist / Software Developer (Internship)',
    company: 'BMS Lab, University of Twente',
    location: 'Netherlands',
    date: 'August 2022 – April 2023',
    description: [
      'Developed mobile apps for Android and iOS using Flutter and Ionic Framework.',
      'Created eye-tracking software using Python for research purposes, leading to improved user behavior analysis.',
      'Collaborated on front-end development for web applications using Vue.js and RESTful APIs.',
      'Implemented automated testing strategies, improving application reliability by 15%.',
    ],
  },
  {
    role: 'Web Design and E-commerce Instructor for Entrepreneurs',
    company: 'New Circles Community Services',
    location: 'Toronto',
    date: 'December 2023 – Current',
    description: [
      'Led classes of aspiring entrepreneurs in web design and e-commerce development, resulting in an 80% increase in student engagement and retention.',
      'Delivered hands-on training in UI design, focusing on practical applications like online store setup and UX best practices.',
    ],
  },
  {
    role: 'Assistant Manager (Seasonal)',
    company: 'Cherry Hills Programs',
    location: 'Toronto',
    date: 'November 2023 – January 2024',
    description: [
      'Managed daily operations and facilitated smooth workflow for a team of 12 employees during peak holiday sales.',
      'Contributed to a 25% increase in overall efficiency through streamlined communication and scheduling.',
    ],
  },
  {
    role: 'Academic Peer Support Assistant (Contract)',
    company: 'Lassonde School of Engineering, York University',
    location: 'Toronto',
    date: 'May 2023 – December 2023',
    description: [
      'Supported 100+ students each semester by providing academic assistance and resolving technical issues related to course enrollment.',
    ],
  },
];
</script>

<style scoped>
.experience-section {
  padding: 6rem 2rem;
  background: #0a0a0a;
  color: white;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  font-weight: 600;
}

.timeline-container {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding-left: 30px;
}

.timeline-container::before {
  content: '';
  position: absolute;
  left: 10px;
  top: 0;
  height: 100%;
  width: 4px;
  background-color: #00fff2; /* turquoise */
}

.timeline-item {
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  align-items: flex-start;
}

.timeline-dot {
  position: absolute;
  left: -10px;
  top: 50%;
  transform: translateY(-50%);
  width: 14px;
  height: 14px;
  background-color: #00fff2;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}

.timeline-card {
  width: 100%;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 255, 242, 0.05);
  margin-left: 20px;
  transition: all 0.3s ease-in-out;
}

.timeline-card:hover {
  transform: scale(1.02);
  box-shadow: 0 0 20px rgba(0, 255, 242, 0.2);
}

.timeline-card-header h3 {
  font-size: 1.4rem;
  font-weight: bold;
}

.company,
.date {
  font-size: 0.95rem;
  opacity: 0.8;
}

.description {
  margin-top: 1rem;
  padding-left: 1.2rem;
  list-style-type: disc;
  opacity: 0.9;
  line-height: 1.6;
}
</style>









