<template>
  <section id="experience" class="experience-section py-5 bg-white">
    <div class="container">
      <h2 class="section-title text-center mb-5">Work Journey</h2>

      <div class="timeline">
        <div
          v-for="(exp, index) in experienceData"
          :key="index"
          class="timeline-item position-relative"
        >
          <div class="timeline-badge">
            <i class="bi bi-briefcase"></i>
          </div>

          <div class="timeline-card card border-0 shadow-sm">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h3 class="h4 mb-0 text-primary">{{ exp.position }}</h3>
                <span class="badge bg-primary bg-opacity-10 text-primary py-2">
                  {{ exp.duration }}
                </span>
              </div>

              <h4 class="h5 mb-3"><i class="bi bi-building me-2"></i>{{ exp.company }}</h4>

              <div class="achievement mb-3 p-3 bg-light rounded">
                <i class="bi bi-trophy-fill text-warning me-2"></i>
                <strong>Key Achievement:</strong> {{ exp.achievement }}
              </div>

              <h5 class="h6 text-muted mb-2">Responsibilities:</h5>
              <ul class="responsibilities">
                <li v-for="(resp, respIndex) in exp.responsibilities" :key="respIndex">
                  <i class="bi bi-arrow-right-short text-primary"></i>{{ resp }}
                </li>
              </ul>

              <div v-if="exp.technologies" class="mt-3">
                <h5 class="h6 text-muted mb-2">Technologies:</h5>
                <div class="d-flex flex-wrap gap-2">
                  <span
                    v-for="(tech, techIndex) in exp.technologies"
                    :key="techIndex"
                    class="badge bg-primary bg-opacity-10 text-primary"
                  >
                    {{ tech }}
                  </span>
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
  name: 'EducationSection',
  props: {
    experienceData: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.timeline {
  position: relative;
  padding-left: 50px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 25px;
  top: 0;
  height: 100%;
  width: 2px;
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
}

.timeline-item {
  padding-bottom: 40px;
}

.timeline-badge {
  position: absolute;
  left: 15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  box-shadow:
    0 0 0 4px white,
    0 4px 8px rgba(0, 0, 0, 0.1);
}

.timeline-card {
  border-left: 3px solid #3b82f6;
  border-radius: 0 8px 8px 8px;
  transition: transform 0.3s ease;
}

.timeline-card:hover {
  transform: translateX(10px);
}

.responsibilities {
  list-style: none;
  padding-left: 0;
}

.responsibilities li {
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.5rem;
}

.responsibilities i {
  position: absolute;
  left: 0;
  top: 0.2rem;
}

.achievement {
  border-left: 3px solid #f59e0b;
}
</style>
