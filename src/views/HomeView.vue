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
        <div
          class="flex flex-row border-2 h-14 border-gray-300 text-gray-900 text-sm rounded-lg w-full"
        >
          <div
            @click="handleCopy"
            class="hover:cursor-pointer flex inset-y-0 items-center px-6 border-r-2 border-gray-300 my-3"
          >
            <img style="width: 30px; height: 30px" src="@/assets/clip.svg" />
          </div>
          <input
            v-model="inputLink"
            type="text"
            id="simple-search"
            class="w-full pl-4 rounded-r-lg outline-none"
            placeholder="Paste long url and short it"
            required
          />
        </div>
        <button
          @click="handleClick"
          class="btn-shorten flex flex-row justify-center items-center rounded-lg px-4 h-14 w-full md:w-1/6 mt-4 md:mt-0 bg-green-1 hover:bg-white text-white hover:text-green-1 border-2 ring-green-1 border-green-1 transition duration-150 ease-in-out"
        >
          <Transition>
            <div v-if="loading">
              <img class="mr-2 svg-hover" src="@/assets/loading-green.svg" />
              <img class="mr-2 svg-default" src="@/assets/loading-white.svg" />
            </div>
          </Transition>
          <span class="caption-1 font-semibold"> Shorten </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import MainService from "@/shared/services/resources/home.services";

const loading: Ref<boolean> = ref(false);
const inputLink: Ref<string> = ref("");

const handleClick = async (): Promise<void> => {
  try {
    loading.value = true;
    const result = await MainService.postData(inputLink.value);

    const {
      data: { status_code, link },
    } = result;

    if (status_code === 200) {
      inputLink.value = `http://localhost:3000/lk/${link}`;
    }
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

const handleCopy = (): void => {
  let codeToCopy = document.querySelector("#simple-search") as HTMLInputElement;
  codeToCopy.setAttribute("type", "text");
  codeToCopy.select();
  document.execCommand("copy");
};
</script>

<style scoped>
.header {
  background-image: url("@/assets/background.svg");
  background-position: center;
}

.shadow-input {
  box-shadow: 0px 4px 15px rgba(1, 17, 183, 0.06);
}

.svg-hover {
  display: none;
}

.btn-shorten:hover:deep(.svg-hover) {
  display: block;
}

.btn-shorten:hover:deep(.svg-default) {
  display: none;
}
</style>
