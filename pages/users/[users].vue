<template>
  <div>
    <Nav />
    <section class="max-w-5xl mt-5 w-full mx-auto lg:flex gap-5 relative">
      <div class="lg:block h-max w-full lg:sticky top-[80px] lg:w-[40%]">
        <div
          class="w-full h-auto border flex-col flex justify-center items-center p-5"
        >
          <div class="h-[90px] w-[90px] rounded-full bg-slate-400"></div>
          <h1 class="font-bold text-2xl pt-3">Aravindan_14</h1>
          <div class="grid grid-cols-3 gap-2 mt-4">
            <div class="flex flex-col items-center border p-2 rounded">
              <h1 class="text-center font-bold text-2xl">150</h1>
              <p>Followers</p>
            </div>
            <div class="flex flex-col items-center border p-2 rounded">
              <h1 class="text-center font-bold text-2xl">150</h1>
              <p>Following</p>
            </div>
            <div class="flex flex-col items-center border p-2 rounded">
              <h1 class="text-center font-bold text-2xl">50</h1>
              <p>Posts</p>
            </div>
          </div>
        </div>
      </div>
      <div class="gap-3 w-full lg:w-[60%] grid grid-cols-3 p-2">
        <div
          v-for="n in 12"
          :key="n"
          @click="openPopup()"
          class="aspect-square w-full border rounded-lg"
        >
          <img
            class="w-full h-full object-contain rounded-lg overflow-hidden"
            src="/photo.jpeg"
            alt=""
          />
        </div>
      </div>
    </section>

    <PopupPost v-if="popupisOpen" @closePopup="closePopup()" />
    <btmenu />
  </div>
</template>

<script>
definePageMeta({
  middleware: ["auth"],
});

export default {
  data() {
    return {
      popupisOpen: false,
    };
  },
  methods: {
    openPopup() {
      this.popupisOpen = true;
    },
    closePopup() {
      this.popupisOpen = false;
    },
  },
};
</script>
