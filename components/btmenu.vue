<template>
  <div class="h-screen">
    <div
      class="max-w-5xl   fixed bottom-0 h-[60px] w-full bg-white shadow-zinc-950 md:hidden flex justify-around px-5 items-center z-[999999999]"
    >
      <NuxtLink to="/">
        <div class=""><i class="text-xl fa-solid fa-house"></i></div
      ></NuxtLink>
      <NuxtLink to="/explore"
        ><div class=""><i class="text-xl fa-solid fa-magnifying-glass"></i></div
      ></NuxtLink>
      <NuxtLink to="/create-post">
        <div class=""><i class="text-xl fa-regular fa-square-plus"></i></div
      ></NuxtLink>
      <NuxtLink to="/users/Aravind">
        <div><p class="h-5 w-5 bg-slate-500 rounded-full"></p></div
      ></NuxtLink>
    </div>
  </div>
</template>
