<template>
  <li>
    <div class="agent">
      <div class="brand">
        <Avatar size="50" />
      </div>
      <div class="title">
        <CustomText tag="h3" size="l">Analog</CustomText>
        <CustomText size="s">by yigit cakmak</CustomText>
      </div>
    </div>
    <div class="time">
      <font-awesome-icon icon="fa-solid fa-clock" />
      <CustomText size="s">3h 15m</CustomText>
    </div>
    <div class="actions">
      <Button color="var(--c-softBlue)" size="xxsmall">
        <font-awesome-icon icon="fa-solid fa-pen" />
      </Button>
      <Button color="var(--c-red)" size="xxsmall">
        <font-awesome-icon icon="fa-solid fa-trash" />
      </Button>
    </div>
  </li>
</template>

<script>
import Avatar from "../Avatar.vue";
import Button from "../Button.vue";
import CustomText from "../CustomText.vue";
export default {
  components: { Avatar, Button, CustomText },
};
</script>

<style lang="scss" scoped>
li {
  background-color: var(--c-appointment);
  width: 100%;
  max-width: 600px;
  padding: 30px 2px;
  border-radius: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 15px 0;

  .agent {
    display: flex;
    align-items: center;
    .brand {
      margin-right: 16px;
    }
    @media screen and (max-width: 520px) {
      padding-bottom: 16px;
    }
  }
  .time svg {
    margin-right: 8px;
  }

  .actions button {
    margin-left: 8px;
    svg {
      color: #fff;
    }
  }
}
</style>
