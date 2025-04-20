<template>
    <section class="contact-section" id="contact">
      <div class="contact-container">
        <h2 class="section-title">Contact</h2>
        <div class="contact-details">
          <div class="contact-item">
            <a href="mailto:harnoorsohal249@gmail.com" target="_blank" class="contact-link">
              <i class="fas fa-envelope"></i> Email: harnoorsohal249@gmail.com
            </a>
          </div>
          <div class="contact-item">
            <a href="https://www.linkedin.com/in/harnoor-singh-sohal/" target="_blank" class="contact-link">
              <i class="fab fa-linkedin"></i> LinkedIn: in/harnoor-singh-sohal
            </a>
          </div>
          <div class="contact-item">
            <a href="https://github.com/Singh-Harnoor" target="_blank" class="contact-link">
              <i class="fab fa-github"></i> GitHub: /Singh-Harnoor
            </a>
          </div>
          <div class="contact-item">
            <a href="https://x.com/Harry25799368" target="_blank" class="contact-link">
              <i class="fab fa-twitter"></i> X: @Harry25799368
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
    // No specific functionality needed for contact section.
  </script>
  
  <style scoped>
  .contact-section {
    padding: 4rem 2rem;
    background:  #0a0a0a;
    color: #fff;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
  }
  
  .contact-section::before {
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
  
  .contact-section:hover::before {
    height: 100%;
  }
  
  .section-title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    position: relative;
    z-index: 2;
  }
  
  .contact-container {
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }
  
  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
  
  .contact-item {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .contact-link {
    color: #00fff2;
    text-decoration: none;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }
  
  .contact-link:hover {
    color: #00d9d9;
  }
  
  .contact-link i {
    font-size: 1.5rem;
  }
  
  .contact-item:hover .contact-link {
    color: #00d9d9;
  }
  </style>
  