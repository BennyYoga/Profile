<template>
  <header class="header">
    <div class="particles"></div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-3 text-center mb-4 mb-md-0">
          <div class="profile-frame">
            <img :src="getImageUrl(headerData.image)" alt="Profile Image" class="profile-img" />
          </div>
        </div>
        <div class="col-md-9">
          <h1 class="display-4 fw-bold mb-3 text-white">{{ headerData.name }}</h1>
          <h2 class="h3 mb-4 text-light">{{ headerData.title }}</h2>

          <div class="social-links mb-4">
            <a
              v-for="(link, index) in headerData.socialLinks"
              :key="index"
              :href="link.url"
              target="_blank"
              class="text-white me-3 fs-4 hover-float"
              :title="link.name"
            >
              <i :class="link.icon"></i>
            </a>
            <a href="/CV.pdf" class="btn btn-light btn-sm ms-2 hover-grow" target="_blank">
              <i class="bi bi-envelope me-2"></i>Download CV
            </a>
          </div>

          <div class="d-flex flex-wrap gap-2">
            <a
              v-for="(section, index) in sections"
              :key="index"
              :href="'#' + section.id"
              class="btn btn-outline-light btn-sm hover-grow"
            >
              {{ section.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    headerData: Object,
  },
  data() {
    return {
      sections: [
        { id: 'skills', name: 'Skills' },
        { id: 'experience', name: 'Experience' },
        { id: 'projects', name: 'Projects' },
        { id: 'education', name: 'Education' },
      ],
    }
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`../assets/images/${imageName}`, import.meta.url).href
    },
  },
}
</script>

<style scoped>
.social-links,
.container {
  position: relative;
  z-index: 1;
}

.header {
  background: v-bind('$root.theme.gradientPrimary');
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  transform: scale(0.98);
  transition:
    transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    filter 0.8s ease;
  filter: brightness(0.95);
}

.profile-frame:hover .profile-img {
  transform: scale(1.02);
  filter: brightness(1.05);
}

/* Animasi Frame */
.profile-frame {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  position: relative;
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  animation: morph 8s ease-in-out infinite;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 1s ease-in-out;
}

@keyframes morph {
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
  50% {
    border-radius: 40% 60% 70% 40%/50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
}

/* Efek yang lebih halus */
.profile-frame {
  animation:
    morph 12s ease-in-out infinite,
    float 6s ease-in-out infinite alternate;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}

/* Efek Partikel */
.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='rgba(255,255,255,0.05)' /%3E%3C/svg%3E");
  opacity: 0.5;
}

/* Efek Interaktif */
.hover-float {
  display: inline-block;
  transition: transform 0.3s ease;
}

.hover-float:hover {
  transform: translateY(-5px) scale(1.1);
  color: #fff !important;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
}

.hover-grow {
  transition: all 0.3s ease;
}

.hover-grow:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

/* Responsif */
@media (max-width: 768px) {
  .profile-frame {
    width: 150px;
    height: 150px;
  }

  .header {
    padding: 3rem 0;
  }
}
</style>
