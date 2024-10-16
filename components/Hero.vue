<template>
  <div
    class="w-full h-[50vh] mt-[100px] flex flex-col items-center justify-center"
  >
    <h1 class="pb-5">{{ heading }}</h1>
    <h2 v-if="subheading">{{ subheading }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps({
  heading: {
    type: String,
    required: true,
  },
  subheading: {
    type: String,
    required: false,
  },
});
</script>
