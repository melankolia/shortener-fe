<template>
  <div class="flex flex-col h-screen relative">
    <div
      class="flex flex-col header h-1/2 justify-center items-center text-center pb-20"
    >
      <p class="header-1 text-white">Short your link free</p>
      <p class="body-1 text-white text-center">
        Make your link short here for free, so your link doesn't <br />
        go all the way down memory lane
      </p>
    </div>
    <div class="flex flex-col items-center justify-end h-1/2 mb-3">
      <p class="subtitle-1 text-center">
        Copyright © 2023 cawaproject. <br class="block md:hidden" />
        All Right Reserved.
      </p>
    </div>
    <div
      class="bg-white rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-52 shadow-input flex flex-col justify-center"
    >
      <div class="flex flex-col md:flex-row space-x-0 md:space-x-7 px-10">
        <div class="relative w-full">
          <div
            class="flex z-10 absolute inset-y-0 left-0 items-center px-6 pointer-events-none border-r-2 border-gray-300 my-3 focus:ring-blue-500 focus:border-blue-500"
          >
            <img style="width: 30px; height: 30px" src="@/assets/clip.svg" />
          </div>
          <input
            type="text"
            id="simple-search"
            class="bg-gray-50 border-2 h-14 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-24 pr-2"
            placeholder="Paste long url and short it"
            required
          />
        </div>
        <button
          class="rounded-lg px-10 h-14 w-full md:w-auto mt-4 md:mt-0"
          style="background-color: #3ed078"
        >
          <span class="caption-1 text-white"> Shorten </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-image: url("@/assets/background.svg");
  background-position: center;
}

.shadow-input {
  box-shadow: 0px 4px 15px rgba(1, 17, 183, 0.06);
}
</style>
