<template>
  <div
    class="h-screen w-screen fixed top-0 left-0 backdrop-blur-sm bg-black/30 z-[9999999] flex justify-center items-center"
  >
    <div
      class="overflow-auto h-[95%] lg:h-[90%] w-[95%] lg:w-[60%] max-w-5xl bg-white rounded-2xl flex flex-col lg:flex-row relative p-5"
    >
      <div
        @click="closePopup()"
        class="h-8 w-8 bg-black rounded-full absolute right-1 top-1 flex justify-center items-center text-white"
      >
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div class="w-full lg:w-1/2 lg:max-h-full max-h-[250px]">
        <img
          class="w-full h-full object-contain rounded-2xl"
          src="/photo.jpeg"
          alt=""
        />
      </div>
      <div class="w-full lg:w-1/2 lg:p-7 pt-5">
        <div class="flex justify-between items-center">
          <div class="flex gap-3 items-center">
            <div class="h-10 rounded-full w-10 bg-slate-400"></div>
            <h1 class="font-bold">Aravindan_14</h1>
          </div>
          <div>
            <button class="bg-black px-5 py-2 text-white font-bold rounded-xl">
              Login
            </button>
          </div>
        </div>
        <div>
          <p
            class="text-sm mt-2 whitespace-nowrap w-full overflow-hidden text-ellipsis"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            harum minus nesciunt sunt vel adipisci, non modi unde blanditiis
            perferendis.
          </p>
          <p class="font-semibold text-sm">show more</p>
        </div>
        <div
          class="w-full h-auto mt-5 max-h-[200px] overflow-auto hide-scrollbar"
        >
          <h1 class="font-bold mb-3">comments(50)</h1>
          <div v-for="n in 7" :key="n">
            <div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="h-7 w-7 bg-slate-500 rounded-full"></div>
                  <p class="font-bold text-xs">Aravindan_14</p>
                </div>
                <div>
                  <p class="text-xs">18-jun-23</p>
                </div>
              </div>
            </div>
            <div>
              <p class="text-sm w-full mt-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto id similique, laboriosam tempora in velit eveniet
                nisi atque neque labore? Cum obcaecati ducimus expedita, earum
                illum dolore vel illo minus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <btmenu />
  </div>
</template>

<script>
definePageMeta({
  middleware: ["auth"],
});

export default {
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
  },
};
</script>
