<template>
  <div>
    <div
      class="fixed top-0 h-[60px] w-full bg-white shadow-xl flex justify-between px-5 items-center z-[999999]"
    >
      <h1 class="text-2xl font-bold uppercase">Project</h1>
      <div class="flex items-center gap-10">
        <div @click="handelNotification()">
          <i class="text-2xl fa-regular fa-bell"></i>
        </div>
        <NuxtLink to="/profile">
          <div class="h-10 rounded-full w-10 bg-black"></div
        ></NuxtLink>
      </div>
    </div>
    <div class="h-[60px]"></div>
    <div
      v-if="notificationIsOpen"
      class="fixed h-80 w-64 bg-white drop-shadow-2xl border p-5 top-[85px] right-8 rounded-lg z-[99999999]"
    >
      <h1 class="font-bold text-center">Notification</h1>
      <div class="w-full h-[calc(100%-30px)] mt-3 overflow-auto hide-scrollbar">
        <div
          v-for="n in 5"
          :key="n"
          class="flex items-center mb-2 gap-3 border p-1 rounded-lg"
        >
          <div class="h-8 w-8 bg-slate-500 rounded-full"></div>
          <p class="text-xs">Aravindan_14 Liked Your Post</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notificationIsOpen: false,
    };
  },
  methods: {
    handelNotification() {
      if (this.notificationIsOpen) {
        this.notificationIsOpen = false;
      } else {
        this.notificationIsOpen = true;
      }
    },
  },
};
</script>
