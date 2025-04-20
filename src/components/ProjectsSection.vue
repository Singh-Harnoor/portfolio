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
          <!-- AI with EA  -->
          <div class="videplayer" v-if="selectedProject.title === 'AI with Emotional Analysis for SIBOS Conference'">
            <video width="100%" controls>
              <source src="../assets/sibos.3gp" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <!-- Income Predictor -->
           <div class="padding_house"  v-if="selectedProject.title.includes('Household Income Prediction')">
            <div class="breathing-container">
              <img src="../assets/money.png" alt="Money" class="breathing-image" />
            </div>
           </div>
           <!-- Bird Animation --> 
           <div class="bird_padding" v-if="selectedProject.title.includes('Tweet Scheduler for Twitter')">
            <div class="bird-wrapper">
              <img src="../assets/twitter_bird.svg" alt="Twitter Bird" class="twitter-bird" />
            </div>
          </div>

          <!-- Data Visualiztion -->
           <div class="data_padding" v-if="selectedProject.title.includes('ScriBe Mobile App and Scribe Website for Media Recording and Analysis')">
            <div class="histogram-container">
              <div
                v-for="(bar, index) in bars"
                :key="index"
                class="bar"
                :style="{
                  height: bar.height + '%',
                  animationDelay: (index * 0.1) + 's'
                }"
              ></div>
            </div>
           </div>
          <!-- Job Prediction -->
          <div class="job_padding" v-if="selectedProject.title.includes('Interview Selection Predictor')">
            <div class="scout-container">
              <img
                src="../assets/scout.png"
                alt="Scout Icon"
                class="scout"
                :class="{ 'scout-rotate': state === 'rotate' }"
              />
            </div>
          </div>
          <!-- Kevin Bacon -->
          <div class="kevin_padding" v-if="selectedProject.title.includes('Neo4j-Powered Six Degrees of Kevin Bacon')">
            <div class="graph-container">
              <div class="node center-node">KB</div>
              <div
                v-for="n in 6"
                :key="n"
                class="node child-node"
                :class="`node-${n}`"
                :style="getNodeStyle(n)"
              >
                A{{ n }}
              </div>
              <svg class="edges">
                <line
                  v-for="n in 6"
                  :key="n"
                  :x1="center.x"
                  :y1="center.y"
                  :x2="getNodePos(n).x"
                  :y2="getNodePos(n).y"
                  class="edge"
                  :style="{ animationDelay: `${0.5 * n}s` }"
                />
              </svg>
            </div>
          </div>
          <!-- Dragon 12 Calculator --> 
          <div class="bird_padding" v-if="selectedProject.title.includes('Dragon 12 Calculator')">
            <div class="calculator-container">
              <div class="screen">{{ display }}</div>
              <div class="keys">
                <button v-for="key in keys" :key="key" @click="pressKey(key)">
                  {{ key }}
                </button>
                <button @click="clear">C</button>
                <button @click="calculate">=</button>
              </div>
            </div>
            <div class="bird-wrapper">
              <img src="../assets/dragon.png" alt="Flying Dragon" class="twitter-bird" />
            </div>
          </div>
          <!-- Eye Tracker -->
          <div class="eye-tracker" v-if="selectedProject.title.includes('Eye Tracking')">
            <img src="../assets/eye-icon.svg" class="eye-icon" ref="eye"  />
          </div>
          <!-- Project Title -->
          <h3>{{ selectedProject.title }}</h3>
          <!-- Project Description -->
          <p v-html="selectedProject.fullDescription || selectedProject.description"></p>
          <!-- Project Link -->
          <a :href="selectedProject.link" target="_blank">LEARN MORE</a>

          <div class="dialog-fill-effect" />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, watch, nextTick } from 'vue';

  const bars = ref([
    { height: 40 },
    { height: 65 },
    { height: 30 },
    { height: 90 },
    { height: 50 },
    { height: 75 },
    { height: 35 },
    { height: 60 },
  ])


  const state = ref('rotate')

  function runAnimationLoop() {
      state.value = 'rotate' // set it once and leave it
    }

    onMounted(() => {
      runAnimationLoop()
    })

    const center = { x: 150, y: 150 }

  function getNodePos(index) {
    const radius = 100
    const angle = (index - 1) * (360 / 6) * (Math.PI / 180)
    return {
      x: center.x + radius * Math.cos(angle),
      y: center.y + radius * Math.sin(angle),
    }
  }

  function getNodeStyle(index) {
    const pos = getNodePos(index)
    return {
      top: `${pos.y - 20}px`,
      left: `${pos.x - 20}px`,
      animationDelay: `${0.5 * index}s`,
    }
  }


  const display = ref('')
  const keys = ['1', '+', '2']
  let currentIndex = 0

  function pressKey(key) {
    display.value += key
  }

  function calculate() {
    try {
      display.value = eval(display.value)
    } catch (e) {
      display.value = 'Error'
    }
  }

  function clear() {
    display.value = ''
    currentIndex = 0
    autoType()
  }

  // Auto-type animation on load
  function autoType() {
    const sequence = ['1', '+', '2']
    const typingSpeed = 500

    if (currentIndex < sequence.length) {
      pressKey(sequence[currentIndex])
      currentIndex++
      setTimeout(autoType, typingSpeed)
    } else {
      setTimeout(calculate, typingSpeed)
    }
  }

  onMounted(() => {
    autoType()
  })


  const projects = [
    {
      title: 'AI with Emotional Analysis for SIBOS Conference',
      description: 'Developed an NLP-based system to detect emotional tone in real-time, demoed at the global SIBOS conference.',
      link: 'mailto:harnoorsohal249@gmail.com',
      fullDescription: `<br><br>
        <strong>Date:</strong> September 2023<br> 
        <strong>Role:</strong> AI Engineer, Software Developer, and Speaker<br>
        <strong>Location:</strong> Toronto, Ontario<br>
        <strong>Project type:</strong> AI & Robotics<br><br>

        <strong>Overview:</strong><br>
        As an AI Engineer and Speaker, I spearheaded the creation of an innovative AI personal assistant tailored for the SIBOS Conference. This groundbreaking project seamlessly integrates emotional analysis, offering users a uniquely empathetic experience. The assistant, accessible via various interfaces including WebUI, Furhat Robotics, Mobile App, and AR/VR, ensures a comprehensive and engaging interaction.<br><br>

        <strong>Key Features:</strong><br>
        <strong>Emotional Awareness:</strong> The AI personal assistant boasts emotional intelligence, recognizing and acknowledging users' emotional states. Real-time sentiment analysis contributes to a more nuanced and personalized interaction.<br>
        <strong>Proactive Measures:</strong> By understanding users' emotions, the assistant takes proactive measures to enhance their experience. Tailored responses and actions align with users' emotional needs, fostering a more empathetic interaction.<br>
        <strong>Multi-Platform Accessibility:</strong> The project prioritizes accessibility, allowing users to engage with the AI assistant through diverse interfaces. Whether through WebUI, Furhat Robotics, Mobile App, or AR/VR, the assistant ensures a consistent and immersive experience.<br><br>

        <strong>Technological Toolbox:</strong><br>
        <strong>Kotlin:</strong> Leveraging Kotlin, a versatile programming language, facilitated Natural Language Processing (NLP) and sentiment analysis. This choice ensured efficient handling of complex linguistic nuances.<br>
        <strong>OpenAI:</strong> Integration of OpenAI empowered the AI assistant to generate contextually relevant and emotionally resonant responses. The synergy between Kotlin and OpenAI elevated the overall conversational quality.<br><br>

        <strong>Project Impact:</strong><br>
        The AI with Emotional Analysis project for the SIBOS Conference redefines the paradigm of human-AI interaction. By infusing emotional intelligence into the assistant, I aimed to create an experience that transcends traditional boundaries. This project underscores my commitment to pushing the boundaries of AI capabilities and delivering solutions that resonate on a deeply human level.`

    },
    {
      title: 'Household Income Prediction',
      description: 'Created a machine learning model to predict household income levels using demographic and social data.',
      link: 'https://github.com/Singh-Harnoor/Machine-Learning/blob/main/IncomePredictorML.ipynb',
      fullDescription: `<br><br>
        <strong>Date:</strong> October 2023<br> 
        <strong>Role:</strong> Machine Learning Engineer, Data Scientist<br>
        <strong>Location:</strong> Toronto, Ontario<br>
        <strong>Project type:</strong> Machine Learning and AI<br><br>

        <strong>Overview:</strong><br>
        In my role as a proficient Machine Learning Engineer and Data Scientist, I spearheaded a pivotal project focused on predicting household income. Through the application of robust machine learning methodologies, the aim was to create an accurate model capable of forecasting income levels based on relevant factors.<br><br>

        <strong>Key Objectives:</strong><br>
        <strong>Data Exploration and Analysis:</strong> Utilized Jupyter Notebook as the primary tool for in-depth data exploration and analysis. Employed various statistical and machine learning models to uncover patterns and relationships within the dataset.<br>
        <strong>Classification and Quantitative Modeling:</strong> Implemented a diverse set of classification and quantitative-based learning models to predict household income levels. Fine-tuned models to ensure optimal accuracy and reliability in predicting income brackets.<br><br>

        <strong>Technological Toolbox:</strong><br>
        <strong>Jupyter Notebook:</strong> Served as the central platform for developing, refining, and documenting machine learning models. Its interactivity and visual capabilities enabled seamless data exploration and collaboration.<br>
        <strong>Machine Learning Models:</strong> Leveraged a spectrum of classification algorithms and quantitative-based models to create a comprehensive prediction framework. This showcased my versatility in applying different models to real-world socioeconomic forecasting scenarios.<br><br>

        <strong>Project Impact:</strong><br>
        The Household Income Prediction project exemplifies my dedication to leveraging data science for impactful insights. By harnessing the capabilities of machine learning, this project delivers a reliable predictive model for household income levels. The application of diverse models underscores the adaptability of the technological tools employed, ensuring robust and accurate predictions in the realm of socioeconomic forecasting.`

    },
    {
      title: 'Tweet Scheduler for Twitter',
      description: 'Developed a Python-based automation tool to schedule tweets for Twitter accounts.',
      link: 'mailto:harnoorsohal249@gmail.com',
      fullDescription: `Tweet Scheduler for Twitter — Embedded Systems Developer<br><br>
        <strong>Date:</strong> December 2023<br>
        <strong>Location:</strong> Toronto, Ontario<br>
        <strong>Project type:</strong> Embedded Systems and AI<br><br>

        <strong>Overview:</strong><br>
        In my capacity as an Embedded Systems Developer, I conceived and executed a Tweet Scheduler leveraging the IoT capabilities of Beaglebone AI. This innovative system automates tweet generation and engagement, enhancing user interaction through dynamic features like polls. Built with Python and integrated with the Twitter API, it represents a seamless fusion of embedded systems and social media functionality.<br><br>

        <strong>Key Features:</strong><br>
        <strong>IoT-Powered Tweet Scheduling:</strong> Harnessing the IoT capabilities of Beaglebone AI, the system enables automated tweet generation and scheduling. Tweets are dynamically crafted and scheduled to be posted after a specified duration, optimizing engagement strategies.<br>
        <strong>User Interaction via Polls:</strong> Enhances user engagement by generating polls within tweets, fostering interactive communication. The system intelligently incorporates user preferences and trends into poll creation for a personalized touch.<br><br>

        <strong>Technological Framework:</strong><br>
        <strong>Beaglebone AI:</strong> Leveraged the IoT functionalities of Beaglebone AI, showcasing its prowess in managing embedded systems for real-world applications.<br>
        <strong>Python:</strong> Utilized Python for its versatility and efficiency in developing the backend logic, ensuring seamless integration with the Twitter API.<br>
        <strong>Twitter API:</strong> Interfaced with the Twitter API to enable automated tweet scheduling and interaction, bringing together embedded systems and social media functionalities.<br><br>

        <strong>Project Impact:</strong><br>
        The Tweet Scheduler for Twitter project exemplifies my proficiency in merging embedded systems and social media dynamics. By seamlessly integrating Beaglebone AI's IoT capabilities with Python and the Twitter API, this project creates an automated and engaging platform for scheduled tweets and user interaction. This intersection of technologies underscores my commitment to innovative solutions within the realm of embedded systems development.`

    },
    {
      title: 'ScriBe Mobile App and Scribe Website for Media Recording and Analysis',
      description: 'Built a mobile app and website for efficient media recording and analysis in the context of interviews and storytelling.',
      link: 'https://www.youtube.com/watch?v=jdO1kY-QnCo',
      fullDescription: `<br><br>
                      <strong>Date:</strong> January 2023<br>
                      <strong>Location:</strong> University of Twente, Enschede, Netherlands<br>
                      <strong>Project type:</strong> Mobile App and Website<br><br>

                      <strong>Overview:</strong><br>
                      As a Mobile App and Web Front-End Developer, I designed and developed the ScriBe App and Scribe Website to support media recording, analysis, and visualization for students at the University of Twente. The cross-platform solution empowers users with efficient tools to capture and analyze audio-visual content for academic and research purposes.<br><br>

                      <strong>Key Features:</strong><br>
                      <strong>Media Recording:</strong> The mobile app allows seamless recording of media content, storing it temporarily on the device before transferring to the server.<br>
                      <strong>Efficient Resource Management:</strong> Once files are transmitted, they are automatically deleted from the device, optimizing local storage.<br>
                      <strong>Server-Side Archiving:</strong> Media files are stored, analyzed, and visualized on the server for future reference and insight.<br>
                      <strong>Web-Based Project Management:</strong> Users can create media analysis projects, upload and select files, and apply multiple analyzation tools through the website.<br><br>

                      <strong>Technological Framework:</strong><br>
                      <strong>Ionic Framework:</strong> Ensured a performant and consistent UI across iOS and Android platforms.<br>
                      <strong>Angular:</strong> Empowered the mobile app’s architecture with dynamic and responsive interface components.<br>
                      <strong>Capacitor Plug-in:</strong> Enabled access to native device functionalities, enhancing the mobile experience.<br>
                      <strong>Vue.js:</strong> Used for developing a fast, scalable, and modular web interface for project management and media interaction.<br><br>

                      <strong>Project Impact:</strong><br>
                      This project exemplifies my ability to deliver cohesive cross-platform applications by bridging mobile and web technologies. The ScriBe system significantly improved how students at the University of Twente record, manage, and analyze media, reinforcing my commitment to building practical and research-supportive digital solutions.`

      
    },
    {
      title: 'Interview Selection Predictor',
      description: 'Designed a machine learning model to predict the success of job candidates based on their resumes and historical hiring data.',
      link: 'https://github.com/Singh-Harnoor/Machine-Learning/blob/main/Job%20Selection%20Machine%20Learning%20Project.pdf',
      fullDescription: `<br><br>
                      <strong>Date:</strong> December 2023<br>
                      <strong>Location:</strong> Toronto, Ontario<br>
                      <strong>Project type:</strong> Machine Learning Engineering and Data Science<br><br>

                      <strong>Overview:</strong><br>
                      As a dedicated Machine Learning Engineer and Data Scientist, I took charge of a transformative project centered around optimizing interview selection processes. The goal was to enhance decision-making and streamline the candidate selection journey by applying advanced machine learning techniques.<br><br>

                      <strong>Key Objectives:</strong><br>
                      <strong>Data-Driven Decision Making:</strong> I leveraged cutting-edge machine learning models within Jupyter Notebook to analyze and interpret data. Through various classification models, I identified patterns and factors influencing successful interview outcomes.<br>
                      <strong>Predictive Insights:</strong> I developed quantitative-based learning models to predict interview success, applying predictive analytics to offer valuable insights into candidate suitability and optimize the interview selection process.<br><br>

                      <strong>Technological Toolbox:</strong><br>
                      <strong>Jupyter Notebook:</strong> Served as the central hub for project development, offering an interactive and collaborative environment to refine machine learning models.<br>
                      <strong>Machine Learning Models:</strong> A range of classification algorithms and quantitative-based learning models were employed to create a holistic solution, showcasing the efficiency of various models in predicting outcomes.<br><br>

                      <strong>Project Impact:</strong><br>
                      The Interview Selection Predictor project highlights my commitment to leveraging data science for strategic decision-making. By utilizing machine learning, the project enhances the efficiency of interview processes and provides predictive insights that ensure a more informed and optimized selection journey for candidates.`

    },
    {
      title: 'Neo4j-Powered Six Degrees of Kevin Bacon',
      description: 'Created a graph database model using Neo4j to calculate the six degrees of separation between Kevin Bacon and other actors.',
      link: 'https://github.com/Singh-Harnoor/Software-Design',
      fullDescription: `<br><br>
        <strong>Date:</strong> June 2022<br>
        <strong>Role:</strong> Back-end Software Developer<br>
        <strong>Location:</strong> Toronto, Canada<br>
        <strong>Project type:</strong> Back-End Software Development<br><br>
        I spearheaded the development of an advanced application that calculates the "Six Degrees of Kevin Bacon," leveraging graph database technology and RESTful architecture to map and traverse relationships between actors and movies.<br><br>

        <strong>Key Features:</strong><br>
        <strong>Neo4j Graph Database:</strong> Harnessed Neo4j for its unparalleled ability to model and query complex relationships, making it the ideal solution for actor-movie relationship mapping.<br>
        <strong>Java-Powered Backend:</strong> Developed the backend using Java, integrating with Neo4j to create a fast, responsive system.<br>
        <strong>REST API:</strong> Designed and implemented a robust REST API that allowed users to add actors, insert movies, establish connections, and calculate Bacon numbers dynamically.<br><br>

        <strong>Challenges Overcome:</strong><br>
        <strong>Dynamic Relationship Mapping:</strong> Ensured scalability and flexibility while mapping relationships through Neo4j’s graph traversal methods.<br>
        <strong>Optimized Bacon Number Computation:</strong> Implemented an efficient traversal algorithm to compute the shortest path (Bacon number) between any actor and Kevin Bacon with high performance.<br><br>

        <strong>Additional Highlights:</strong><br>
        <strong>Client-Server Architecture:</strong> Abstracted backend complexities from users, delivering a clean and intuitive interaction model.<br>
        <strong>Status Code Feedback:</strong> Integrated standard HTTP response codes (200, 400, 404, 500) for better user understanding and error handling.<br><br>

        <strong>Impact and Significance:</strong><br>
        This project goes beyond entertainment—it demonstrates my proficiency in graph databases, backend architecture, and API development. It reflects my passion for transforming complex systems into interactive, educational tools. The fusion of Neo4j and Java showcases my ability to deliver impactful, efficient, and scalable software solutions.`

    },
    {
      title: 'Dragon 12 Calculator',
      description: 'Developed an embedded systems calculator using the Dragon 12 microcontroller, featuring assembly programming for optimal performance.',
      link: 'mailto:harnoorsohal249@gmail.com',
      fullDescription: `<br><br>
        <strong>Date:</strong> November 2023<br>
        <strong>Role:</strong> Embedded Systems Developer<br>
        <strong>Location:</strong> Toronto, ON<br>
        <strong>Project type:</strong> Embedded Systems<br><br>

        As the lead Embedded Systems Developer, I spearheaded the creation of the Dragon 12 Calculator — a project that integrates software and hardware seamlessly to deliver advanced calculation functionality. This endeavor showcased my ability to work at the intersection of electronics and code, bringing complex embedded systems to life.<br><br>

        <strong>Key Features:</strong><br>
        <strong>Advanced Calculation Capabilities:</strong> The calculator performs a range of mathematical operations with precision. Built on the Dragon 12 development board, it exemplifies accurate, real-time processing within a compact footprint.<br>
        <strong>User-Friendly Interface:</strong> Designed with simplicity and efficiency in mind, the calculator's interface promotes smooth user interaction, ensuring clarity and responsiveness in every operation.<br><br>

        <strong>Technological Framework:</strong><br>
        <strong>Dragon 12 Development Board:</strong> The core hardware platform, enabling direct control over hardware components and integration of display/input modules.<br>
        <strong>Embedded Systems Design:</strong> Applied embedded systems principles to develop an efficient, responsive, and power-conscious device, illustrating practical embedded software development skills.<br><br>

        <strong>Impact and Significance:</strong><br>
        The Dragon 12 Calculator goes beyond basic functionality to demonstrate a scalable embedded solution, merging innovation with real-world usability. It reflects my hands-on experience with microcontroller-based systems and my commitment to crafting technology that is both functional and user-centric.`
    },
    {
      title: 'Eye Tracking Software for University of Twente Students',
      description: 'Created a research tool using Python and OpenCV for tracking eye movement and visual behavior of university students.',
      link: 'mailto:harnoorsohal249@gmail.com',
      fullDescription: `<br><br>
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
        lastX += (targetX - lastX) * 0.3;  // Easing factor
        lastY += (targetY - lastY) * 0.3;  // Easing factor

        eye.value.style.transform = `translate(${lastX / 10}px, ${lastY / 10}px)`;
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
  
  .videplayer{
    padding-top: 5%;
    padding-bottom: 5%;
  }

  .padding_house{
    padding-top: 5%;
    padding-bottom: 5%;
  }

  .breathing-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    overflow: hidden;
    
  }

  .breathing-image {
    height: 200px;
    animation: breathe 4s ease-in-out infinite;
  }

  @keyframes breathe {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.08);
    }
  }

  .bird_padding {
    padding-top: 5%;
    padding-bottom: 5%;
    align-content: center;
    position: relative;
    overflow: hidden;
  }

  .bird-wrapper {
    position: absolute;
    width: 40px;
    height: auto;
    z-index: 20;
    animation: flyAndFlap 30s linear infinite;
    top: 10px;
    left: 0px; /* Start a bit off-screen */
  }

  .twitter-bird {
    width: 100%;
    height: auto;
    animation: flap 0.4s ease-in-out infinite;
    transform-origin: center;
  }

  /* Bird flying across screen */
  @keyframes flyAndFlap {
    0% {
      transform: translateX(0vw) ;
      opacity: 0.6;
    }
    50% {
      transform: translateX(50vw) ;
      opacity: 1;
    }
    100% {
      transform: translateX(110vw);
      opacity: 0;
    }
  }

  /* Flapping animation */
  @keyframes flap {
    0%, 100% {
      transform: scale(1) rotate(0deg);
    }
    50% {
      transform: scaleY(0.85) scaleX(1.05) rotate(1deg);
    }
  }

  


  .data_padding{
    padding-top: 5%;
    padding-bottom: 5%;
    align-content: center;
    position: relative;
    overflow: hidden;
  }

  .histogram-container {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 300px;
    padding: 20px;
    margin-top: 2rem;
  }

  .bar {
    width: 30px;
    background: linear-gradient(180deg, #c5e4ec, #00fff2);
    border-radius: 6px 6px 0 0;
    transform: scaleY(0);
    transform-origin: bottom;
    animation: fillBar 4s ease-out forwards;
  }

  @keyframes fillBar {
    to {
      transform: scaleY(1);
    }
  }

  .job_padding {
    padding-top: 5%;
    padding-bottom: 5%;
    align-content: center;
    position: relative;
    overflow: hidden;
  }

  .scout-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10%;
  }

  .scout {
    width: 40px;
    height: 40px;
    transition: transform 6s ease;
  }

  .scout-rotate {
    animation: rotateOnly 4s linear infinite;
  }

  @keyframes rotateOnly {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(30deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }


  .kevin_padding {
    padding-top: 5%;
    padding-bottom: 5%;
    align-content: center;
    position: relative;
    overflow: hidden;
  }

  .graph-container {
    position: relative;
    width: 300px;
    height: 300px;
    margin: auto;
    animation: fadeIn 1s ease-in-out;
  }

  .node {
    position: absolute;
    width: 40px;
    height: 40px;
    background: #00fff2;
    border-radius: 50%;
    color: black;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    animation: popIn 1s ease forwards;
  }

  .center-node {
    top: 130px;
    left: 130px;
    z-index: 2;
    animation-delay: 0s;
  }

  .child-node {
    z-index: 1;
  }

  @keyframes popIn {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  .edges {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
  }

  .edge {
    stroke: #00fff2;
    stroke-width: 2;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: drawLine 1s ease forwards;
  }

  @keyframes drawLine {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .calculator-container {
    width: 200px;
    margin: 50px auto;
    background: #333;
    padding: 20px;
    border-radius: 10px;
    color: white;
    font-family: 'Courier New', Courier, monospace;
  }

  .screen {
    background: #000;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 24px;
    text-align: right;
    border: 2px inset #666;
  }

  .keys {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }

  button {
    padding: 10px;
    background: #555;
    border: none;
    color: white;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background: #777;
  }


  .eye-tracker {
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 50%;
    padding-right: 50%;
    }
  
  .eye-icon {
    width: 50px;
    height: 50px;
    transition: transform 0.3s ease-out;
    /* filter: drop-shadow(0 0 5px rgba(0, 255, 242, 0.8)); */
    background: transparent; /* Ensure the background is clear */
    border-radius: 50%; /* Keep it circular if it's an icon */
  }


  @media only screen and (max-width: 600px) {
    .bird_padding {
      padding-top: 10%;
      padding-bottom: 15%;
    }
    .bird-wrapper {
      animation: flyAndFlap 20s linear infinite;
    }
    .job_padding{
      padding-top: 10%;
      padding-bottom: 15%;
    }
    }
  </style>
  
  
