export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    if (process.client) {
      let isloggedin = window.localStorage.getItem("isloggedin");

      if (!isloggedin) {
        window.location.href = "/login";
      }
    }
  }
});
