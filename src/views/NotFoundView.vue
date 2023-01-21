<template>
 <div class="notfound flex flex-col h-screen relative">
    <div
      class="flex flex-col h-screen justify-center items-center text-center "
    >
      <p class="text-9xl font-semibold text-white pt-40">404</p>
      <p class="body-1 text-white text-center pb-10">
        Page not found.
      </p>
      <router-link to="/">
      <button
          class="rounded-lg  h-16 w-52  "
          style="background-color: #3ed078"
        >
          <span class="caption-1 text-white font-semibold"> Back to shortener </span>
        </button>
      </router-link>
    </div>
   
    <div class="flex flex-col items-center justify-end h-1/2 mb-3">
      <p class="subtitle-1 text-center text-white">
        Copyright © 2023 cawaproject. <br class="block md:hidden" />
        All Right Reserved.
      </p>
    </div>
  </div>
</template>

<style>

  .notfound {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-image: url("@/assets/background-full.svg");
    background-position: center;
  }
</style>
