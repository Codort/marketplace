<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <footer
    class="mt-auto text-black dark:text-white pt-2 transition-colors z-50"
  >
    <div
      class="w-full bg-[#c99696] dark:bg-[#060910] px-2 sm:px-6 lg:px-10 py-5 sm:flex justify-between"
    >
      <div class="px-4 sm:px-0">
        <h2 class="pb-4 sm:pb-10">Codort</h2>
        <b>Stay up to date</b>
        <p>Sign-up to our newsletter now to never miss an update.</p>
        <NewsletterFormShortLong />
      </div>
      <div class="flex sm:w-[50%] pt-10 sm:pt-2">
        <ul class="flex w-full justify-between">
          <li v-for="item in menu" :key="item.path" class="flex-1 text-center">
            <NuxtLink :key="item.path" :to="item.path" class="no-underline">
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="sm:flex justify-between bg-[#f0afae] dark:bg-[#080d17] w-full px-2 sm:px-6 lg:px-10 py-3"
    >
      <div class="inline mb-2 space-x-2 text-sm text-black dark:text-white">
        <p class="inline text-sm">
          © Codort &#174; {{ new Date().getFullYear() }}
        </p>
        <span>•</span>
        <a
          href="https://docs.google.com/document/d/1wIBfNnJr3G19zIkc7fjeoZVdJZFhx2l4yDhjPws47iM/edit?usp=sharing"
          >Privacy Policy</a
        >
        <span>•</span>
        <p class="inline text-sm">
          Powered by
          <a href="https://nuxt.com/">Nuxt</a>
          and
          <a href="https://github.com/bloggrify/bloggrify">Bloggrify</a>
        </p>
      </div>
      <div class="flex flex-col sm:items-end mt-3 sm:mt-0">
        <div class="flex space-x-4">
          <NuxtLink
            v-if="config.socials.github"
            aria-label="Our GitHub"
            class="text-sm a transition"
            target="_blank"
            rel="nofollow noopener noreferrer"
            :to="config.socials.github"
          >
            <span class="sr-only">github</span>
            <Icon name="fa:github" class="text-xl"></Icon>
          </NuxtLink>
          <NuxtLink
            v-if="config.socials.linkedin"
            aria-label="Our LinkedIn"
            class="text-sm a transition"
            target="_blank"
            rel="noopener noreferrer"
            :to="config.socials.linkedin"
          >
            <span class="sr-only">Linkedin</span>
            <Icon name="fa:linkedin" class="text-xl"></Icon>
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const config: any = useAppConfig();
const menu = config.menu;
</script>

<style lang="scss" scoped>
.transparent {
  background-color: transparent;
}

.opaque {
  background: #1b2629;
}
</style>
