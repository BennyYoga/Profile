<template>
  <div class="portfolio-app">
    <Header :headerData="data.header" />

    <main class="container py-5">
      <ProfileSection :profileData="data.profile" />
      <SkillsSection :skillsData="data.skills" />
      <ExperienceSection :experienceData="data.experience" />
      <EducationSection :educationData="data.education" />
      <ProjectsSection :projectsData="data.projects" />
      <AwardsSection :awardsData="data.awards" />
    </main>

    <footer class="bg-dark text-white py-4 mt-5">
      <div class="container text-center">
        <p>&copy; {{ new Date().getFullYear() }} {{ data.header.name }}. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { profileData } from './data/config'
import Header from './components/Header.vue'
import ProfileSection from './components/ProfileSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import AwardsSection from './components/AwardsSection.vue'

export default {
  name: 'App',
  components: {
    Header,
    ProfileSection,
    SkillsSection,
    ExperienceSection,
    EducationSection,
    ProjectsSection,
    AwardsSection,
  },
  data() {
    return {
      data: profileData,
    }
  },
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css');

:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --accent-color: #e74c3c;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.section-title {
  position: relative;
  margin-bottom: 2rem;
  color: var(--secondary-color);
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 50px;
  height: 3px;
  background-color: var(--primary-color);
}

/* Animation effects */
.fade-in {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Progress bar customization */
.progress {
  height: 8px;
  border-radius: 4px;
}

.progress-bar {
  background-color: var(--primary-color);
}

/* Card hover effect */
.card-hover {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>
