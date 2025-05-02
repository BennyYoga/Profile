<template>
  <section id="skills" class="skills-section py-5 bg-light">
    <div class="container">
      <h2 class="section-title">Kompetensi</h2>
      <div class="row">
        <div class="col-md-6">
          <h3 class="h4 mb-4 text-primary">Kemampuan Teknis</h3>
          <div class="mb-4">
            <h4 class="h5">Analisis Bisnis</h4>
            <ul>
              <li>Analisis SWOT & PESTEL</li>
              <li>Studi Kelayakan Bisnis</li>
              <li>Riset Pasar Kuantitatif & Kualitatif</li>
            </ul>
          </div>
          <div class="mb-4">
            <h4 class="h5">Software</h4>
            <div class="d-flex flex-wrap gap-2">
              <span class="badge bg-primary bg-opacity-10 text-primary py-2 px-3">
                <i class="bi bi-file-earmark-excel me-1"></i>Excel Advanced
              </span>
              <span class="badge bg-primary bg-opacity-10 text-primary py-2 px-3">
                <i class="bi bi-bar-chart-line me-1"></i>SPSS
              </span>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h3 class="h4 mb-4 text-primary">Soft Skills</h3>
          <div class="d-flex flex-wrap gap-2">
            <span
              v-for="(skill, index) in skillsData.professional"
              :key="'prof-' + index"
              class="badge bg-primary bg-opacity-10 text-primary py-2 px-3"
            >
              <i class="bi bi-check-circle me-1"></i>{{ skill }}
            </span>
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
}
</script>

<style scoped>
.skills-section {
  background-color: white;
}

.progress {
  background-color: #e9ecef;
}

.badge {
  font-size: 0.9rem;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
}

.badge:hover {
  transform: translateY(-2px);
  background-color: rgba(52, 152, 219, 0.2) !important;
}
</style>
