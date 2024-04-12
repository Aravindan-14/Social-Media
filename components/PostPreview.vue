<template>
  <div class="flex justify-center">
    <div class="h-auto w-full border p-3 mb-2 max-w-md lg:max-w-full">
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
      <div class="h-[400px] border mt-3">
        <img src="photo.jpeg" class="h-full w-full object-contain" alt="" />
      </div>
      <div class="flex items-center justify-between mt-3">
        <div class="flex gap-2 items-center text-2xl">
          <div><i class="fa-regular fa-heart"></i></div>
          <div><i class="fa-regular fa-comment"></i></div>
        </div>
        <div><p>50k Likes</p></div>
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
              Architecto id similique, laboriosam tempora in velit eveniet nisi
              atque neque labore? Cum obcaecati ducimus expedita, earum illum
              dolore vel illo minus!
            </p>
          </div>
        </div>
      </div>
    </div>
    <btmenu />
  </div>
</template>
<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>

<script>
definePageMeta({
  middleware: ["auth"],
});
</script>
