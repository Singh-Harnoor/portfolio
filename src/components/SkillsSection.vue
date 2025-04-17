<!-- <template>
    <section class="skills-section">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="skill-row"
        :ref="el => skillRefs[index] = el"
      >
        <div class="skill-info">
          <h3 class="skill-name">{{ skill.name }}</h3>
          <p class="skill-description">{{ skill.description }}</p>
        </div>
        <div class="skill-illustration">
          <div :id="`typed-${index}`" class="typed-text"></div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from 'vue';
  import Typed from 'typed.js';
  
  const skills = ref([
    {
      name: 'Python',
      description: 'A versatile programming language used for AI, ML, and more.',
      code: 'print("Hello, World!")'
    },
    {
      name: 'JavaScript',
      description: 'The language of the web. Dynamic and essential for modern websites.',
      code: "console.log('Hello, JavaScript!');"
    },
    {
      name: 'Java',
      description: 'Popular language used for building enterprise-scale applications.',
      code: 'public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, Java!");\n  }\n}'
    },
    {
      name: 'HTML/CSS',
      description: 'Foundation of web structure and styling. Key to responsive design.',
      code: '&lt;h1&gt;Hello, World!&lt;/h1&gt;\n&lt;style&gt;h1 { color: teal; }&lt;/style&gt;'
    },
    {
    name: 'Vue.js',
    description: 'A progressive JavaScript framework for building interactive UIs.',
    code: '&lt;template&gt;\n  &lt;p&gt;{{ message }}&lt;/p&gt;\n&lt;/template&gt;\n\n&lt;script setup&gt;\nconst message = "Hello Vue!";\n&lt;/script&gt;'
    },
    {
    name: 'C/C++',
    description: 'Efficient system-level languages used in embedded systems, OS kernels, and performance-heavy apps.',
    code: '#include <stdio.h>\nint main() { printf("Hello, C/C++!\n"); return 0; }'
    }
,

    {
      name: 'RISC-V & Verilog',
      description: 'Used in embedded systems and digital circuit design.',
      code: 'module hello;\ninitial begin\n  $display("Hello from Verilog!");\nend\nendmodule'
    },
    {
      name: 'R Programming',
      description: 'Statistical computing language ideal for data science and visualization.',
      code: 'print("Hello, R")'
    },
    {
      name: 'SQL & NoSQL',
      description: 'Data querying and storage with relational and graph databases.',
      code: 'SELECT * FROM users;'
    },
    {
      name: 'Git & Shell/Bash',
      description: 'Version control and command-line scripting for productivity.',
      code: 'git commit -m "Hello Git!"'
    }
  ]);
  
  const skillRefs = [];
  const hasAnimated = ref([]);
  
  onMounted(() => {
    hasAnimated.value = new Array(skills.value.length).fill(false);
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = skillRefs.findIndex(el => el === entry.target);
        if (entry.isIntersecting && !hasAnimated.value[index]) {
          hasAnimated.value[index] = true;
  
          const skill = skills.value[index];
          new Typed(`#typed-${index}`, {
            strings: [skill.code],
            typeSpeed: 30,
            showCursor: false,
          });
        }
      });
    }, { threshold: 0.5 });
  
    nextTick(() => {
      skillRefs.forEach((el) => {
        if (el) observer.observe(el);
      });
    });
  });
  </script>
  
  <style scoped>
  .skills-section {
    padding: 4rem 2rem;
    background-color: #1a1a1a;
    color: white;
  }
  
  .skill-row {
    display: flex;
    align-items: center;
    margin-bottom: 4rem;
    gap: 3rem;
    flex-wrap: wrap;
  }
  
  .skill-info {
    flex: 1;
    text-align: left;
    min-width: 300px;
  }
  
  .skill-name {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  .skill-description {
    font-size: 1.1rem;
    opacity: 0.85;
    line-height: 1.6;
  }
  
  .skill-illustration {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.2rem;
    color: #00fff2;
    text-align: left;
    min-width: 300px;
  }
  
  .typed-text {
    white-space: pre-wrap;
    word-break: break-word;
  }
  </style> -->

  <template>
    <section class="skills-section" id="skills">
      <div class="skills-container">
        <h2 class="section-title">Skills</h2>
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="skill-row"
          :ref="el => skillRefs[index] = el"
        >
          <div class="skill-info">
            <div class="skill-name-row">
              <h3 class="skill-name">{{ skill.name }}</h3>
            </div>
            <div class="skill-description-row">
              <p class="skill-description">{{ skill.description }}</p>
            </div>
          </div>
          <div class="skill-illustration">
            <div :id="`typed-${index}`" class="typed-text"></div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from 'vue';
  import Typed from 'typed.js';
  
  const skills = ref([
    {
      name: 'Python',
      description: 'Versatile language used in AI, ML, and web dev.',
      code: 'print("Hello, World!")'
    },
    {
      name: 'JavaScript',
      description: 'The language of the web, used with frameworks like React and Vue.',
      code: "console.log('Hello, JavaScript!');"
    },
    {
      name: 'Java',
      description: 'Popular for backend and enterprise software.',
      code: 'public class Main { public static void main(String[] args) { System.out.println("Hello, Java!"); } }'
    },
    {
      name: 'HTML/CSS',
      description: 'Foundation of web structure and styling. Key to responsive design.',
      code: '&lt;h1&gt;Hello, World!&lt;/h1&gt;\n&lt;style&gt;h1 { color: teal; }&lt;/style&gt;'
    },
    {
    name: 'Vue.js',
    description: 'A progressive JavaScript framework for building interactive UIs.',
    code: '&lt;template&gt;\n  &lt;p&gt;{{ message }}&lt;/p&gt;\n&lt;/template&gt;\n\n&lt;script setup&gt;\nconst message = "Hello Vue!";\n&lt;/script&gt;'
    },
    {
      name: 'C / C++ / Fortran',
      description: 'System-level programming and scientific computing.',
      code: '#include <stdio.h>\nint main() { printf("Hello C!"); return 0; }'
    },
    {
      name: 'Prolog',
      description: 'Logic programming for AI and symbolic computation.',
      code: 'likes(mary, food). likes(john, X) :- likes(mary, X).'
    },
    {
      name: 'RISC-V & Verilog',
      description: 'Hardware description and computer architecture.',
      code: 'module hello; initial begin $display("Hello from Verilog!"); end endmodule'
    },
    {
      name: 'R Programming',
      description: 'Great for data science and statistical analysis.',
      code: 'print("Hello from R")'
    },
    {
      name: 'SQL & NoSQL',
      description: 'Databases like MySQL, PostgreSQL and Neo4j.',
      code: 'SELECT * FROM users;'
    },
    {
      name: 'Git & Bash',
      description: 'Version control and scripting productivity.',
      code: 'git commit -m "Hello Git!"'
    },
    {
      name: 'Docker & Kubernetes',
      description: 'Containerization and orchestration tools.',
      code: 'docker run hello-world'
    },
    {
      name: 'TensorFlow & PyTorch',
      description: 'Powerful frameworks for deep learning.',
      code: 'import torch \n x = torch.tensor([1.0, 2.0])'
    },
    {
      name: 'React & Angular',
      description: 'Front-end frameworks for interactive UIs.',
      code: 'const App = () => &lt;h1&gt;Hello React!&lt;h1&gt;'
    },
    {
      name: 'Figma & Adobe Suite',
      description: 'UI/UX tools for design and prototyping.',
      code: '// UI designed in Figma & Illustrator'
    },
    {
      name: 'CI/CD & Agile',
      description: 'Streamlined software development workflows.',
      code: '# .github/workflows/deploy.yml'
    },
    {
      name: 'Cloud Platforms',
      description: 'AWS, GCP, and Azure cloud computing solutions.',
      code: 'aws s3 ls'
    },
    {
      name: 'Collaboration Tools',
      description: 'Jira, Confluence, Slack, and Teams for teamwork.',
      code: '// Tasks managed via Jira and Confluence'
    }
  ]);
  
  const skillRefs = [];
  const hasAnimated = ref([]);
  
  onMounted(() => {
    hasAnimated.value = new Array(skills.value.length).fill(false);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = skillRefs.findIndex(el => el === entry.target);
        if (entry.isIntersecting && !hasAnimated.value[index]) {
          hasAnimated.value[index] = true;
          const skill = skills.value[index];
          new Typed(`#typed-${index}`, {
            strings: [skill.code],
            typeSpeed: 30,
            showCursor: false,
          });
        }
      });
    }, { threshold: 0.5 });
  
    nextTick(() => {
      skillRefs.forEach((el) => {
        if (el) observer.observe(el);
      });
    });
  });
  </script>
  
  <style scoped>
  .skills-section {
    padding: 6rem 2rem 8rem;
    background-color: #0d0d0d;
    color: #ffffff;
    max-width: 100%;
    margin: auto;
    border-radius: 18px;
  }
  
  .section-title {
    text-align: center;
    font-size: 2.8rem;
    margin-bottom: 4rem;
    font-weight: 600;
  }
  
  .skill-row {
    display: flex;
    gap: 3rem;
    margin-bottom: 4rem;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(169, 205, 212, 0.08);
    padding-bottom: 3rem;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .skill-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  
  .skill-name-row,
  .skill-description-row {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .skill-name {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 0.8rem;
    color: #00fff2;
  }
  
  .skill-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #d0d0d0;
  }
  
  .skill-illustration {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Courier New', monospace;
    color: #00fff2;
    font-size: 1rem;
    min-height: 160px;
    white-space: pre-wrap;
    min-width: 300px;
  }
  
  .typed-text {
    white-space: pre-wrap;
  }
  </style>
  



