<template>
  <section id="profile" class="profile-section py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <h2 class="section-title">Professional Profile</h2>
          <div class="profile-card card border-0 shadow-sm mb-4">
            <div class="card-body">
              <p class="lead">{{ profileData.summary }}</p>

              <div class="personal-details mt-4">
                <h3 class="h5 mb-3">Personal Details</h3>
                <div class="row">
                  <div class="col-md-6">
                    <div class="detail-item mb-3">
                      <i class="bi bi-calendar main-color me-2"></i>
                      <strong>Age:</strong> {{ profileData.details.age }}
                    </div>
                    <div class="detail-item mb-3">
                      <i class="bi bi-geo-alt main-color me-2"></i>
                      <strong>Location:</strong> {{ profileData.details.location }}
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="detail-item mb-3">
                      <i class="bi bi-envelope main-color me-2"></i>
                      <strong>Email:</strong> {{ profileData.details.email }}
                    </div>
                    <div class="detail-item mb-3">
                      <i class="bi bi-phone main-color me-2"></i>
                      <strong>Phone:</strong> {{ profileData.details.phone }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="highlights-card card border-0 shadow-sm">
            <div class="card-body">
              <h3 class="h5 card-title main-color mb-4">
                <i class="bi bi-stars me-2"></i>Key Strengths
              </h3>
              <ul class="strengths-list">
                <li
                  v-for="(strength, index) in profileData.strengths"
                  :key="index"
                  class="d-flex align-items-start mb-3"
                >
                  <i class="bi bi-check-circle-fill main-color mt-1 me-2"></i>
                  <div>
                    <h4 class="h6 mb-1">{{ strength.title }}</h4>
                    <p class="small text-muted mb-0">{{ strength.description }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    profileData: Object,
  },
}
</script>

<style scoped>
.main-color {
  color: v-bind('$root.theme.textPrimary');
}

.badge-setting {
  background-color: v-bind('$root.theme.bgPrimary');
  color: v-bind('$root.theme.textPrimary');
}

.bg-primary {
  background-color: v-bind('$root.theme.bgPrimary');
}

.gradient-bg {
  background: v-bind('$root.theme.bgPrimary');
}

.profile-section {
  background-color: #f8fafc;
}

.profile-card,
.highlights-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  border-radius: 12px;
}

.profile-card:hover,
.highlights-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
}

.section-title {
  position: relative;
  padding-bottom: 15px;
  margin-bottom: 25px;
}

.section-title:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 60px;
  height: 4px;
  background: v-bind('$root.theme.gradientPrimary');
  border-radius: 2px;
}

.strengths-list {
  list-style: none;
  padding-left: 0;
}

.detail-item {
  padding: 8px 12px;

  background-color: v-bind('$root.theme.bgPrimary');
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.detail-item:hover {
  background-color: v-bind('$root.theme.bgPrimary');
}
</style>
