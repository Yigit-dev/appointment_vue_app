<template>
  <div class="sidebar">
    <span class="logo">
      <CustomText size="m">LS</CustomText>
    </span>
    <a class="logo-expand" href="#">
      <CustomText size="xl">Mini CRM</CustomText>
    </a>
    <div class="side-wrapper">
      <div class="side-menu">
        <router-link to="/" class="sidebar-link home" active-class="is-active">
          <font-awesome-icon icon="fa-solid fa-house" />
          <CustomText size="m">Home</CustomText>
        </router-link>
        <router-link
          to="/appointment"
          class="sidebar-link appointment"
          active-class="is-active"
        >
          <font-awesome-icon icon="fa-solid fa-calendar-check" />
          <CustomText size="m">Appointments</CustomText>
        </router-link>
        <router-link to="/create" class="sidebar-link" active-class="is-active">
          <font-awesome-icon icon="fa-solid fa-plus" />
          <CustomText size="m">Create</CustomText>
        </router-link>
      </div>
    </div>
    <div class="side-wrapper">
      <div class="side-menu side-alt-menu">
        <a class="sidebar-link" href="#">
          <font-awesome-icon icon="fa-solid fa-user" />
        </a>
        <ThemeButton />
      </div>
    </div>
  </div>
</template>

<script>
import ThemeButton from "../components/ThemeButton.vue";
import CustomText from "@/components/CustomText.vue";
export default { components: { ThemeButton, CustomText } };
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
    flex-shrink: 0;
    color: var(--c-text);
    align-items: center;
    border-radius: 50%;
    justify-content: center;

    &-expand {
      text-decoration: none;
      color: var(--c-text);
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
        width: 200px;
        height: 70px;
        z-index: -1;
      }
    }
  }
  &-link {
    &:hover,
    &.is-active {
      color: var(--c-text);
      &:nth-child(2n + 1) {
        svg {
          background: var(--c-orange);
          color: white;
        }
      }
      &:nth-child(2n) {
        svg {
          background: var(--c-softBlue);
          color: white;
        }
      }
      &:nth-child(2n + 3) {
        svg {
          background: var(--c-purple);
          color: white;
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
    svg {
      color: var(--c-disable);
    }
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
      color: var(--c-text);
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
