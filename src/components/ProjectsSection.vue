<template>
    <section class="projects-section">
      <h2 class="title">My Projects</h2>
      <div class="projects-grid">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-card"
          @click="openProject(project)"
        >
          <div class="fill-effect" />
          <div class="content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>
  
      <div v-if="selectedProject" class="project-dialog" @click.self="closeDialog">
        <div class="dialog-content">
          <div class="eye-tracker" v-if="selectedProject.title.includes('Eye Tracking')">
            <img src="../assets/eye-icon.svg" class="eye-icon" ref="eye"  />
          </div>
          <h3>{{ selectedProject.title }}</h3>
          <p v-html="selectedProject.fullDescription || selectedProject.description"></p>
          <a :href="selectedProject.link" target="_blank">View on GitHub</a>
          <div class="dialog-fill-effect" />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, watch, nextTick } from 'vue';
  
  const projects = [
    {
      title: 'AI with Emotional Analysis for SIBOS Conference',
      description: 'Developed an NLP-based system to detect emotional tone in real-time, demoed at the global SIBOS conference.',
      link: 'https://github.com/Singh-Harnoor'
    },
    {
      title: 'Household Income Prediction',
      description: 'Created a machine learning model to predict household income levels using demographic and social data.',
      link: 'https://github.com/Singh-Harnoor'
    },
    {
      title: 'Tweet Scheduler for Twitter',
      description: 'Developed a Python-based automation tool to schedule tweets for Twitter accounts.',
      link: 'https://github.com/Singh-Harnoor'
    },
    {
      title: 'ScriBe Mobile App and Scribe Website for Media Recording and Analysis',
      description: 'Built a mobile app and website for efficient media recording and analysis in the context of interviews and storytelling.',
      link: 'https://github.com/Singh-Harnoor'
    },
    {
      title: 'Interview Selection Predictor',
      description: 'Designed a machine learning model to predict the success of job candidates based on their resumes and historical hiring data.',
      link: 'https://github.com/Singh-Harnoor'
    },
    {
      title: 'Neo4j-Powered Six Degrees of Kevin Bacon',
      description: 'Created a graph database model using Neo4j to calculate the six degrees of separation between Kevin Bacon and other actors.',
      link: 'https://github.com/Singh-Harnoor'
    },
    {
      title: 'Dragon 12 Calculator',
      description: 'Developed an embedded systems calculator using the Dragon 12 microcontroller, featuring assembly programming for optimal performance.',
      link: 'https://github.com/Singh-Harnoor'
    },
    {
      title: 'Eye Tracking Software for University of Twente Students',
      description: 'Created a research tool using Python and OpenCV for tracking eye movement and visual behavior of university students.',
      link: 'https://github.com/Singh-Harnoor',
      fullDescription: `Eye Tracking Software for University of Twente Students<br><br>
      <strong>Date:</strong> September 2022<br> 
      <strong>Role:</strong> Software Developer<br>
      <strong>Location:</strong> THE BMS Lab, University of Twente, Enschede, Netherlands<br>
      <strong>Project type:</strong> Software<br><br>
      In addressing the need for affordable eye-tracking solutions at the University of Twente, I spearheaded the development of a cost-effective Eye Tracking Software. This initiative aimed to democratize access to eye-tracking technology, enabling a large number of students to benefit without a significant financial burden.<br><br>
      <strong>Key Features:</strong><br>
      <strong>Affordability:</strong> Utilizing a budget-friendly 50€ camera with a custom 3D-printed attachment, the software provided a cost-effective alternative to conventional eye-tracking hardware, making it accessible to a broader student community.<br>
      <strong>Calibration and Gaze Tracking:</strong> The Python script facilitated pupil position evaluation and calibration, ensuring accurate and reliable gaze tracking. Post-calibration, the software masked points on the screen corresponding to the user's gaze, creating a seamless and responsive eye-tracking experience.<br>
      <strong>Data Recording and Manipulation:</strong> Gaze points were recorded in an Excel file, offering a structured format for further data manipulation. The recorded data became a valuable resource for graphing, heat mapping, and in-depth analysis.<br><br>
      <strong>Tools Used:</strong><br>
      <strong>Python:</strong> Leveraging Python's versatility and ease of integration, I crafted a robust script that handled calibration, gaze tracking, and data recording seamlessly.<br>
      <strong>Budget-Friendly Hardware:</strong> The project ingeniously employed a cost-effective 50€ camera coupled with a 3D-printed attachment, demonstrating resourcefulness in achieving project goals within budget constraints.<br><br>
      <strong>Impact and Significance:</strong><br>
      This project underscores my commitment to leveraging technology for educational accessibility. By providing an affordable yet effective eye-tracking solution, I contributed to enhancing research capabilities and learning experiences at the University of Twente. The software's success lies in its ability to democratize advanced technologies, showcasing my dedication to innovative and inclusive solutions in the academic realm.`
    }
  ];
  
  const selectedProject = ref(null);
  const eye = ref(null);
  const dialogContent = ref(null);
  const fillEffect = ref(null);
  
  const openProject = (project) => {
    selectedProject.value = project;
  };
  
  const closeDialog = () => {
    selectedProject.value = null;
  };
  
  watch(selectedProject, async (newVal) => {
    if (newVal && dialogContent.value && fillEffect.value) {
      // Reset the fill effect animation before applying
      fillEffect.value.classList.remove('animate-fill');
      await nextTick(); // Wait for DOM to render
  
      const checkScroll = () => {
        const scrollTop = dialogContent.value.scrollTop;
        const scrollHeight = dialogContent.value.scrollHeight;
        const offsetHeight = dialogContent.value.offsetHeight;
        const atBottom = scrollTop + offsetHeight >= scrollHeight - 10;
  
        if (atBottom && !fillEffect.value.classList.contains('animate-fill')) {
          fillEffect.value.classList.add('animate-fill');
        } else if (!atBottom) {
          fillEffect.value.classList.remove('animate-fill');
        }
      };
  
      dialogContent.value.removeEventListener('scroll', checkScroll); // Prevent duplicates
      dialogContent.value.addEventListener('scroll', checkScroll);
  
      // Trigger once on open
      checkScroll();
    }
  });
  
  // Mousemove event to track eye movement
  onMounted(() => {
    let lastX = 0;
    let lastY = 0;

    const moveEye = (e) => {
        if (eye.value) {
        const targetX = (e.clientX / window.innerWidth) * 200;
        const targetY = (e.clientY / window.innerHeight) * 200;

        // Apply easing for smooth movement
        lastX += (targetX - lastX) * 0.1;  // Easing factor
        lastY += (targetY - lastY) * 0.1;  // Easing factor

        eye.value.style.transform = `translate(${lastX / 20}px, ${lastY / 20}px)`;
        }
    };

    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => moveEye(e));
    });
    });
  </script>
  
  <style scoped>
  .projects-section {
    padding: 4rem 2rem;
    background: rgba(255, 255, 255, 0.02);
    color: white;
    text-align: center;
  }
  
  .title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-weight: 600;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .project-card {
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 2rem;
    height: 240px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .project-card:hover {
    transform: translateY(-6px);
  }
  
  .project-card .fill-effect {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0%;
    width: 100%;
    background: linear-gradient(to top, #00fff2 0%, transparent 100%);
    transition: height 4s ease;
    z-index: 1;
    opacity: 0.2;
  }
  
  .project-card:hover .fill-effect {
    height: 100%;
  }
  
  .project-card .content {
    position: relative;
    z-index: 2;
    color: white;
  }
  
  .project-card h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .project-card p {
    font-size: 0.95rem;
    opacity: 0.85;
  }
  
  .project-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  .dialog-content {
    position: relative;
    background: rgba(30, 30, 30, 0.95);
    padding: 2rem 2rem;
    border-radius: 28px;
    max-width: 960px;
    width: 90%;
    text-align: left;
    overflow-y: auto;
    max-height: 90vh; /* 90% of viewport height */
    z-index: 2;
    font-size: 1.05rem;
    box-sizing: border-box;
  }
  
  .dialog-content::-webkit-scrollbar {
    width: 6px;
  }
  
  .dialog-content::-webkit-scrollbar-thumb {
    background: #464848;
    border-radius: 6px;
  }
  
  .dialog-content h3 {
    font-size: 2.25rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .dialog-content p {
    font-size: 1rem;
    line-height: 1.6;
    color: #ccc;
    margin-bottom: 1.5rem;
  }
  
  .dialog-content a {
    display: inline-block;
    color: #00fff2;
    text-decoration: underline;
    font-weight: bold;
    text-align: center;
    width: 100%;
  }
  
  .dialog-fill-effect {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background: linear-gradient(to top, #00fff2 0%, transparent 100%);
    opacity: 0.08;
    z-index: 1;
    /* Don't animate by default */
  }
  
  .dialog-fill-effect.animate-fill {
    animation: slowFill 24s forwards;
  }
  
  @keyframes slowFill {
    from {
      height: 0%;
    }
    to {
      height: 100%;
    }
  }
  
  .eye-tracker {
    position: fixed;
    top: 15%;
    left: 70%;
    transform: translateX(-50%);
    z-index: 5;
    }
  
  .eye-icon {
    width: 50px;
    height: 50px;
    transition: transform 0.3s ease-out;
    /* filter: drop-shadow(0 0 5px rgba(0, 255, 242, 0.8)); */
    background: transparent; /* Ensure the background is clear */
    border-radius: 50%; /* Keep it circular if it's an icon */
  }
  </style>
  
  
