<template>
  <div id="app">
    <ParticleBackground />
    <IntroSection />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <ExperienceSection />
    <ContactSection />
  </div>
</template>

<script>
import ParticleBackground from './components/ParticleBackground.vue';
import IntroSection from './components/IntroSection.vue';
import AboutSection from './components/AboutSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import ContactSection from './components/ContactSection.vue';

export default {
  name: 'App',
  components: {
    ParticleBackground,
    IntroSection,
    AboutSection,
    ProjectsSection,
    SkillsSection,
    ExperienceSection,
    ContactSection
  }
};
</script>

