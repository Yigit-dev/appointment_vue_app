<template>
  <!-- SEARCH -->
  <div class="header">
    <div class="search-bar">
      <div class="search-icon">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </div>
      <input type="text" placeholder="Search" />
    </div>
    <div class="user-settings">
      <Avatar size="40" />
      <div class="user-name">Yigit</div>
      <font-awesome-icon icon="fa-solid fa-angle-down" />
      <div class="notify">
        <div class="notification"></div>
        <font-awesome-icon icon="fa-solid fa-bell" />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar.vue";
export default { components: { Avatar } };
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 30px;
}
.search-bar {
  position: relative;
  height: 34px;
  display: flex;
  width: 100%;
  max-width: 450px;
  .search-icon {
    position: absolute;
    top: 0;
    right: 0;
    width: 44px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--c-body-color);
  }
  input {
    cursor: pointer;
    width: 100%;
    height: 100%;
    border: none;
    background-color: var(--c-input);
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    padding: 0 40px 0 16px;
    box-shadow: 0 0 0 2px rgba(134, 140, 160, 0.02);
    color: var(--c-text);
    &::placeholder {
      color: var(--c-disable);
    }
  }
}
.user {
  &-settings {
    display: flex;
    align-items: center;
    padding-left: 20px;
    flex-shrink: 0;
    margin-left: auto;
    svg {
      width: 10px;
      flex-shrink: 0;
      @media screen and (max-width: 575px) {
        display: none;
      }
    }
    .notify {
      position: relative;
      svg {
        width: 22px;
        height: 22px;
        margin-left: 24px;
        flex-shrink: 0;
      }
      .notification {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--c-red);
        position: absolute;
        right: 1px;
        border: 1px solid var(--theme-bg);
        top: -2px;
        @media screen and (max-width: 575px) {
          display: none;
        }
      }
    }
  }
  &-img {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 50%;
  }
  &-name {
    color: var(--c-text);
    font-size: 14px;
    margin: 0 6px 0 12px;
    @media screen and (max-width: 575px) {
      display: none;
    }
  }
}
</style>
