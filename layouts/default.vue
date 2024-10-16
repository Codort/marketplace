<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <div
    class="flex flex-col min-h-screen min-w-screen w-full bg-gradient-light dark:bg-gradient-dark m-0 h-full"
  >
    <Header />
    <main class="flex-grow flex min-h-screen">
      <slot />
    </main>
    <Footer />
  </div>
</template>
