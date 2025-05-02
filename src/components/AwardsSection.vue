<template>
  <section id="awards" class="awards-section py-5 fade-in">
    <div class="container">
      <h2 class="section-title">Certifications & Awards</h2>
      <div class="row">
        <div v-for="(award, index) in awardsData" :key="index" class="col-md-6 mb-4">
          <div class="card card-hover border-0 shadow-sm h-100">
            <div class="card-body">
              <div class="d-flex">
                <div class="flex-shrink-0 me-3">
                  <i class="bi bi-trophy-fill fs-3 text-warning"></i>
                </div>
                <div>
                  <h3 class="h5 mb-1">{{ award.title }}</h3>
                  <p class="mb-1 text-muted">
                    <i class="bi bi-building me-1"></i>{{ award.issuer }}
                  </p>
                  <p class="mb-2 text-muted"><i class="bi bi-calendar me-1"></i>{{ award.date }}</p>
                  <p v-if="award.description" class="mb-0">{{ award.description }}</p>
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
  name: 'AwardsSection',
  props: {
    awardsData: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.awards-section {
  background-color: white;
}

.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>
