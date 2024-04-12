<template>
  <div>
    <Nav />
    <section class="relative flex w-full max-w-5xl gap-5 mx-auto mt-5">
      <div class="flex flex-col gap-5 w-full lg:w-[50%]">
        <PostPreview v-for="n in 10" :key="n" />
      </div>
      <div class="hidden lg:block h-max w-full sticky top-[80px]">
        <div
          class="flex flex-col items-center justify-center w-full h-auto p-5 border"
        >
          <div class="h-[90px] w-[90px] rounded-full bg-slate-400"></div>
          <h1 class="pt-3 text-2xl font-bold">Aravindan_14</h1>
          <div class="grid grid-cols-3 gap-2 mt-4">
            <div class="flex flex-col items-center p-2 border rounded">
              <h1 class="text-2xl font-bold text-center">150</h1>
              <p>Followers</p>
            </div>
            <div class="flex flex-col items-center p-2 border rounded">
              <h1 class="text-2xl font-bold text-center">150</h1>
              <p>Following</p>
            </div>
            <div class="flex flex-col items-center p-2 border rounded">
              <h1 class="text-2xl font-bold text-center">50</h1>
              <p>Posts</p>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <h1 class="mb-3 text-lg font-bold">Suggested Profile</h1>
          <div class="flex flex-col gap-3">
            <div v-for="n in 3" :key="n">
              <NuxtLink to="/users/aravind"
                ><div class="flex items-center gap-2 p-3 border rounded-lg">
                  <div class="w-10 h-10 rounded-full bg-slate-300"></div>
                  <h1 class="font-bold">Aravindan_14</h1>
                </div></NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <btmenu />
  </div>
</template>

<script>
definePageMeta({
  middleware: ["auth"],
});
</script>
