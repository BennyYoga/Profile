<template>
  <div class="portfolio-app">
    <Header :headerData="data.header" />

    <main class="container py-5">
      <MetaHead />
      <ProfileSection :profileData="data.profile" />
      <SkillsSection :skillsData="data.skills" />
      <ExperienceSection :experienceData="data.experience" />
      <EducationSection :educationData="data.education" />
      <ProjectsSection :projectsData="data.projects" />
      <AwardsSection :awardsData="data.awards" />
    </main>

    <footer class="bg-dark text-white py-4 mt-5">
      <div class="container text-center">
        <p>
          &copy; {{ new Date().getFullYear() }}
          <a href="https://profileku.netlify.app/" class="text-light" target="_blank">ProfileKu</a>.
          All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import { profileData } from './data/config'
import { colors } from './data/color'
import Header from './components/Header.vue'
import ProfileSection from './components/ProfileSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import AwardsSection from './components/AwardsSection.vue'
import MetaHead from './components/MetaHead.vue'

export default {
  name: 'App',
  components: {
    MetaHead,
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
      theme: colors,
    }
  },
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css');

:root {
  --primary: v-bind('$root.data.theme.primary');
  --secondary: v-bind('$root.data.theme.secondary');
  --accent: v-bind('$root.data.theme.accent');
  --background: v-bind('$root.data.theme.background');

  /* Turunan warna untuk komponen */
  --icon-primary: var(--primary);
  --icon-secondary: var(--secondary);
  --icon-accent: var(--accent);
  --text-primary: #333333;
  --text-secondary: #7f8c8d;
  --badge-primary-bg: rgba(52, 152, 219, 0.1);
  --badge-primary-text: var(--primary);
  --badge-secondary-bg: rgba(139, 92, 246, 0.1);
  --badge-secondary-text: var(--secondary);
}

body {
  background-color: var(--background);
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>
