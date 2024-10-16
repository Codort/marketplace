<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <div ref="container" class="slow-radial-blur">
    <div
      class="blur-effect absolute inset-0 pointer-events-none transition-all duration-300 ease-out"
      :style="blurStyle"
    ></div>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue';

const container = ref(null);
const mouse = reactive({ x: 0, y: 0 });
const blur = reactive({ x: 0, y: 0 });

const blurStyle = computed(() => ({
  background: `radial-gradient(circle at ${blur.x}px ${blur.y}px, rgba(229,252,245,0.3) 0%, rgba(240,175,174,0.3) 40%, rgba(125,182,195,0.3) 100%)`,
  filter: 'blur(40px)',
}));

function updateMousePosition(event) {
  const rect = container.value.getBoundingClientRect();
  mouse.x = event.clientX - rect.left;
  mouse.y = event.clientY - rect.top;
}

function animateBlur() {
  blur.x += (mouse.x - blur.x) * 0.1;
  blur.y += (mouse.y - blur.y) * 0.1;
  requestAnimationFrame(animateBlur);
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('mousemove', updateMousePosition);
    animateBlur();
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('mousemove', updateMousePosition);
  }
});
</script>

<style scoped>
.slow-radial-blur {
  position: relative;
  overflow: hidden;
}

.blur-effect {
  z-index: 1;
}
</style>
