<template>
  <div class="container">
    <SideBar />
    <div class="wrapper">
      <Header />
      <main class="pageAnimation">
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import SideBar from "./SideBar.vue";
export default {
  components: {
    Header,
    SideBar,
  },
};
</script>

<style scoped>
.container {
  position: relative;
  background-color: var(--theme-bg);
  transition: background-color 0.5s;
  width: 100%;
  height: 95vh;
  display: flex;
  overflow: hidden;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 500;
  box-shadow: 4px 0 6px 6px rgba(0, 0, 0, 0.6);
}

@media screen and (max-width: 991px) {
  .container {
    height: 100vh;
    border-radius: 0;
  }
}

.container .wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
main {
  display: flex;
  flex-direction: column;
  padding: 0 30px 30px;
  flex-grow: 1;
  overflow: auto;
}
</style>
