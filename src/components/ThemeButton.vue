<template>
  <div class="theme-switch-wrapper">
    <label class="theme-switch" for="checkbox">
      <input
        v-model="toggleSwitch"
        type="checkbox"
        id="checkbox"
        @change="switchTheme"
      />
      <div class="slider round">
        <font-awesome-icon icon="fa-solid fa-moon" />
      </div>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleSwitch: true,
    };
  },
  created() {
    document.documentElement.setAttribute("data-theme", "dark");
  },
  methods: {
    toggleTheme() {
      const currentTheme = localStorage.getItem("theme");
      if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
        if (currentTheme === "dark") {
          this.toggleSwitch = true;
        }
      }
    },
    switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.theme-switch-wrapper {
  display: flex;
  align-items: center;
}
.theme-switch {
  display: inline-block;
  height: 30px;
  position: relative;
  width: 50px;
}

.theme-switch input {
  display: none;
}

.slider {
  position: absolute;
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  right: 0;
  top: 0;
  transition: 0.4s;
}

.slider:before {
  background-color: #fff;
  bottom: 4px;
  content: "";
  height: 22px;
  left: 4px;
  position: absolute;
  transition: 0.4s;
  width: 22px;
}
.slider svg {
  position: absolute;
  top: 8px;
  left: 8px;
  color: var(--c-purple);
}

input:checked + .slider {
  background-color: #66bb6a;
}

input:checked + .slider:before {
  transform: translateX(22px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.slider .circle {
  border-radius: 50%;
}
</style>
