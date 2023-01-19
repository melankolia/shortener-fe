<template>
  <div class="expired flex flex-col h-screen ">
    <div
      class="flex flex-col h-screen justify-center items-center text-center "
    >
      <p class="header-1 leading-normal  text-white pt-40 pb-5">Sorry! your short <br/>link expired</p>
      <p class="body-1 text-white text-center pb-10">
        Your short link has expired, shorten your link again.
      </p>
      <button
          class="rounded-lg  h-16 w-52  "
          style="background-color: #3ed078"
        >
          <span class="caption-1 text-white font-semibold"> Shorten again </span>
        </button>
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

  .expired {
    background-image: url("@/assets/background-full.svg");
    background-position: center;

  }
</style>
