<template>
  <div>
    <Nav />
    <h1 class="text-center text-7xl mt-5 font-bold">Explore</h1>
    <section
      class="max-w-5xl mt-5 w-full mx-auto flex justify-center gap-5 relative p-2"
    >
      <div class="gap-3 w-full lg:w-[60%] grid grid-cols-3">
        <div
          v-for="n in 12"
          :key="n"
          @click="openPopup()"
          class="aspect-square w-full border rounded-lg"
        >
          <img
            class="w-full h-full object-cover rounded-lg overflow-hidden"
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
