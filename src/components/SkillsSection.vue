<template>
  <section id="skills" class="skills-section py-5">
    <div class="container">
      <h2 class="section-title text-center mb-5">Kompetensi</h2>

      <div class="row g-4">
        <!-- Technical Skills -->
        <div class="col-lg-6">
          <div class="skill-card card h-100 border-0 shadow-sm">
            <div class="card-body">
              <div class="d-flex align-items-center mb-4">
                <div class="skill-icon bg-primary bg-opacity-10 text-primary">
                  <i class="bi bi-code-square"></i>
                </div>
                <h3 class="h4 mb-0 ms-3">Kemampuan Teknis</h3>
              </div>

              <div
                class="skill-category mb-4"
                v-for="(category, index) in skillsData.technical"
                :key="'tech-cat-' + index"
              >
                <div class="d-flex justify-content-between mb-2">
                  <h4 class="h5">{{ category.name }}</h4>
                  <span class="text-muted">{{ category.level }}%</span>
                </div>
                <div class="progress" style="height: 8px">
                  <div
                    class="progress-bar"
                    :style="{ width: category.level + '%', 'background-color': primaryColor }"
                    role="progressbar"
                  ></div>
                </div>
              </div>

              <div class="software-skills mt-5">
                <h4 class="h5 mb-3">Penguasaan Software</h4>
                <div class="d-flex flex-wrap gap-3">
                  <div
                    class="software-item"
                    v-for="(software, idx) in skillsData.software"
                    :key="'soft-' + idx"
                  >
                    <div class="software-icon mb-2">
                      <i :class="software.icon" class="fs-4"></i>
                    </div>
                    <div class="software-name small text-center">{{ software.name }}</div>
                    <div class="software-level">
                      <div class="stars" :style="{ color: primaryColor }">
                        <i
                          v-for="star in 5"
                          :key="'star-' + idx + '-' + star"
                          :class="star <= software.level ? 'bi bi-star-fill' : 'bi bi-star'"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Professional Skills -->
        <div class="col-lg-6">
          <div class="skill-card card h-100 border-0 shadow-sm">
            <div class="card-body">
              <div class="d-flex align-items-center mb-4">
                <div class="skill-icon bg-primary bg-opacity-10 text-primary">
                  <i class="bi bi-people"></i>
                </div>
                <h3 class="h4 mb-0 ms-3">Soft Skills</h3>
              </div>

              <div class="row g-3">
                <div
                  class="col-md-6"
                  v-for="(skill, index) in skillsData.professional"
                  :key="'prof-' + index"
                >
                  <div class="soft-skill-item p-3 rounded">
                    <div class="d-flex align-items-center">
                      <div
                        class="skill-bullet me-3"
                        :style="{ backgroundColor: primaryColor }"
                      ></div>
                      <h5 class="h6 mb-0">{{ skill.name }}</h5>
                    </div>
                    <p class="small text-muted mt-2 mb-0">{{ skill.description }}</p>
                  </div>
                </div>
              </div>

              <div class="language-skills mt-5">
                <h4 class="h5 mb-3">Kemampuan Bahasa</h4>
                <div
                  class="language-item mb-3"
                  v-for="(lang, idx) in skillsData.languages"
                  :key="'lang-' + idx"
                >
                  <div class="d-flex justify-content-between mb-1">
                    <span>{{ lang.language }}</span>
                    <span class="text-muted">{{ lang.proficiency }}</span>
                  </div>
                  <div class="progress" style="height: 6px">
                    <div
                      class="progress-bar"
                      :style="{ width: lang.level + '%', 'background-color': primaryColor }"
                    ></div>
                  </div>
                </div>
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
  name: 'SkillsSection',
  props: {
    skillsData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    primaryColor() {
      return this.$root.data.theme.primaryColor
    },
  },
}
</script>

<style scoped>
.skills-section {
  background-color: var(--background);
}

.skill-card {
  transition: all 0.3s ease;
  border-radius: 12px;
  height: 100%;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
}

.skill-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.progress {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.software-item {
  width: 80px;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.software-item:hover {
  background-color: rgba(0, 0, 0, 0.03);
  transform: translateY(-3px);
}

.software-icon {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stars {
  font-size: 0.8rem;
}

.soft-skill-item {
  background-color: rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;
  height: 100%;
}

.soft-skill-item:hover {
  background-color: rgba(0, 0, 0, 0.05);
  transform: translateY(-3px);
}

.skill-bullet {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.language-item {
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.language-item:hover {
  background-color: rgba(0, 0, 0, 0.03);
}

@media (max-width: 768px) {
  .software-item {
    width: 70px;
  }
}
</style>
