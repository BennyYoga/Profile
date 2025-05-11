<template>
  <section id="projects" class="projects-section py-5 bg-light fade-in">
    <div class="container">
      <h2 class="section-title">Project Portfolio</h2>
      <div class="row g-4">
        <div v-for="(project, index) in projectsData" :key="index" class="col-md-6 col-lg-4">
          <div class="card card-hover h-100 border-0 shadow-sm overflow-hidden">
            <div class="project-image-container">
              <img :src="getImageUrl(project.image)" alt="Profile Image" />
              <div class="project-overlay">
                <a :href="project.link" target="_blank" class="btn btn-primary btn-sm">
                  View Project <i class="bi bi-arrow-up-right ms-1"></i>
                </a>
              </div>
            </div>
            <div class="card-body">
              <h3 class="h5 card-title">{{ project.title }}</h3>
              <p class="card-text">{{ project.description }}</p>
            </div>
            <div class="card-footer bg-transparent border-top-0">
              <div class="d-flex flex-wrap gap-2">
                <span
                  v-for="(tag, tagIndex) in project.tags"
                  :key="tagIndex"
                  class="badge badge-setting"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  props: {
    projectsData: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`../assets/images/${imageName}`, import.meta.url).href
    },
  },
}
</script>

<style scoped>
.badge-setting {
  background-color: v-bind('$root.theme.bgPrimary');
  color: v-bind('$root.theme.textPrimary');
}

.projects-section {
  position: relative;
}

.project-image-container {
  position: relative;
  overflow: hidden;
  height: 180px;
}

.project-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover .project-overlay {
  opacity: 1;
}

.card:hover .project-image-container img {
  transform: scale(1.1);
}

.badge {
  font-size: 0.8rem;
  font-weight: normal;
}
</style>
