<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <div class="w-full h-full">
    <div class="flex flex-col items-center justify-center h-full pt-[150px]">
      <h1 class="pb-5">Find SCM tools</h1>
      <h2 class="pb-10">Start coding how you want</h2>
      <UInput
        v-model="search_value"
        icon="i-heroicons-magnifying-glass-20-solid"
        :placeholder="isHovering ? '' : currentPlaceholder"
        size="xl"
        class="shadow-xl w-[400px] typing-input"
        :ui="{ icon: { trailing: { pointer: '' } } }"
        @mouseenter="isHovering = true"
        @mouseleave="isHovering = false"
        @focus="isFocused = true"
        @blur="isFocused = false"
      >
        <template #trailing>
          <UButton
            v-show="search_value !== ''"
            color="gray"
            variant="link"
            icon="i-heroicons-x-mark-20-solid"
            :padded="false"
            @click="search_value = ''"
          />
        </template>
      </UInput>
    </div>
  </div>
</template>

<script setup lang="ts">
const search_value = ref('');

const isHovering = ref(false);
const isFocused = ref(false);

const placeholders = [
  'Search by app or category',
  'GitHub',
  'Code hosting',
  'BitBucket',
  'Open source',
  'Ovio',
  'Marketing',
  'Scarf',
  'CMS',
  'Joomla',
];
const currentPlaceholder = ref('');

function getRandomInt() {
  return Math.floor(Math.random() * placeholders.length);
}

let currentIndex = getRandomInt();

let charIndex = 0;
let isDeleting = false;
const typingInterval = ref(null);
const pauseShowInterval = 1500; // time whole phrase is on screen
const pauseHideInterval = 1000; // time no phrase is on screen
const typingSpeed = 50;

const clearTypingInterval = () => {
  if (typingInterval.value !== null) {
    clearTimeout(typingInterval.value);
    typingInterval.value = null;
  }
};

const typeText = () => {
  clearTypingInterval();

  console.log('active');
  const current = placeholders[currentIndex];

  if (isDeleting) {
    currentPlaceholder.value = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    currentPlaceholder.value = current.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    typingInterval.value = setTimeout(typeText, pauseShowInterval);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentIndex = getRandomInt();
    typingInterval.value = setTimeout(typeText, pauseHideInterval);
  } else {
    typingInterval.value = setTimeout(typeText, typingSpeed);
  }
};

onMounted(() => {
  typeText();
});

onBeforeUnmount(() => {
  clearTypingInterval();
});

onBeforeRouteLeave((to, from, next) => {
  clearTypingInterval();
  next();
});

watch(
  [isHovering, isFocused, search_value],
  ([newHovering, newFocused, newSearchValue]) => {
    console.log('search', newSearchValue);
    currentPlaceholder.value = '';
    if (newHovering || newFocused || newSearchValue !== '') {
      clearTypingInterval();
    } else if (!newHovering && !newFocused) {
      currentPlaceholder.value = '';
      charIndex = 0;
      isDeleting = false;
      currentIndex = getRandomInt();
      typeText();
    }
  }
);

useHead({
  title: 'Codort Marketplace',
});
</script>

<style scoped></style>
