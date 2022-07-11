<template>
  <div class="sidebar">
    <span class="logo">LS</span>
    <a class="logo-expand" href="#">Lifesycle</a>
    <div class="side-wrapper">
      <div class="side-menu">
        <router-link to="/" class="sidebar-link home" active-class="is-active">
          <font-awesome-icon icon="fa-solid fa-house" />
          Home
        </router-link>
        <router-link
          to="/appointment"
          class="sidebar-link appointment"
          active-class="is-active"
        >
          <font-awesome-icon icon="fa-solid fa-calendar-check" />
          Appointments
        </router-link>
        <router-link to="/create" class="sidebar-link" active-class="is-active">
          <font-awesome-icon icon="fa-solid fa-plus" />
          Create
        </router-link>
      </div>
    </div>
    <div class="side-wrapper">
      <div class="side-menu side-alt-menu">
        <a class="sidebar-link" href="#">
          <font-awesome-icon icon="fa-solid fa-user" />
        </a>
        <a class="sidebar-link" href="#">
          <font-awesome-icon icon="fa-solid fa-moon" />
        </a>
        <a class="sidebar-link" href="#">
          <font-awesome-icon icon="fa-solid fa-sun" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 220px;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition-duration: 0.2s;
  overflow-y: auto;
  overflow-x: hidden;

  .logo {
    display: none;
    width: 30px;
    height: 30px;
    background-color: #000;
    flex-shrink: 0;
    color: #fff;
    align-items: center;
    border-radius: 50%;
    justify-content: center;

    &-expand {
      text-decoration: none;
      color: #fff;
      font-size: 19px;
      font-weight: 600;
      line-height: 34px;
      position: sticky;
      top: 0;
      &:before {
        content: "";
        position: absolute;
        top: -30px;
        left: 0;
        background: var(--theme-bg);
        width: 200px;
        height: 70px;
        z-index: -1;
      }
    }
  }
  &-link {
    &:hover,
    &.is-active {
      color: #fff;
      font-weight: 600;
      &:nth-child(2n + 1) {
        svg {
          background: #fdad00;
        }
      }
      &:nth-child(2n) {
        svg {
          background: #32a7e2;
        }
      }
      &:nth-child(2n + 3) {
        svg {
          background: #6c5ecf;
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    width: 90px;
    border-right: 1px solid var(--border-color);

    .logo-expand {
      display: none;
    }
    .logo {
      display: flex;
    }
    .side-wrapper {
      width: 30px;
    }
    .side-menu svg {
      margin-right: 30px;
    }
  }
}

@keyframes bottom {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: none;
  }
}

.side-menu {
  display: flex;
  flex-direction: column;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--body-color);
    & + a {
      margin-top: 36px;
    }
  }
  svg {
    width: 16px;
    padding: 8px;
    border-radius: 10px;
    background-color: var(--button-bg);
    flex-shrink: 0;
    margin-right: 16px;
    &:hover {
      color: #fff;
    }
  }
}

.side-wrapper {
  border-bottom: 1px solid var(--border-color);
  padding: 48px 0;
  width: 145px;
  & + & {
    border-bottom: none;
  }
  .side-menu.side-alt-menu {
    flex-direction: row;
    flex-wrap: wrap;
    a {
      padding: 16px 0;

      & + a {
        margin: 0;
      }
    }
  }
}
</style>
