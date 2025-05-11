<template>
  <section id="education" class="education-section py-5 bg-light">
    <div class="container">
      <h2 class="section-title text-center mb-5">Education Path</h2>

      <div class="row g-4">
        <div v-for="(edu, index) in educationData" :key="index" class="col-lg-6">
          <div class="education-card card border-0 shadow-sm h-100">
            <div class="card-body">
              <div class="d-flex">
                <div class="edu-icon flex-shrink-0 me-4">
                  <i class="bi" :class="edu.icon"></i>
                </div>
                <div>
                  <h3 class="h4 main-color">{{ edu.degree }}</h3>
                  <h4 class="h5 mb-3">{{ edu.institution }}</h4>

                  <div class="d-flex align-items-center mb-3">
                    <i class="bi bi-calendar3 me-2 text-muted"></i>
                    <span class="text-muted">{{ edu.year }}</span>
                    <span class="mx-2 text-muted">•</span>
                    <i class="bi bi-award me-2 text-muted"></i>
                    <span class="text-muted">{{ edu.gpa }}</span>
                  </div>

                  <p class="mb-3">{{ edu.description }}</p>

                  <div v-if="edu.courses" class="mb-3">
                    <h5 class="h6 text-muted mb-2">Relevant Courses:</h5>
                    <div class="d-flex flex-wrap gap-2">
                      <span
                        v-for="(course, courseIndex) in edu.courses"
                        :key="courseIndex"
                        class="badge badge-setting"
                      >
                        {{ course }}
                      </span>
                    </div>
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
  name: 'EducationSection',
  props: {
    educationData: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.main-color {
  color: v-bind('$root.theme.primary');
}

.badge-setting {
  background-color: v-bind('$root.theme.bgPrimary');
  color: v-bind('$root.theme.textPrimary');
}

.edu-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: v-bind('$root.theme.gradientPrimary');
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.education-card {
  transition: all 0.3s ease;
  border-radius: 12px;
}

.education-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
}
</style>
