<!-- State-connected, just provide the property index -->
<!-- This replaces the property name <input> to provide property editing and add-a-row buttons -->
<template>
  <span class="hover-inline-buttons">
    <slot name="input" />
    <slot name="left-1" />
    <slot name="left-2" />
    <slot name="right-3" />
    <slot name="right-2" />
    <slot name="right-1" />
  </span>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
input {
  .left-1,
  .left-2,
  .right-3,
  .right-2,
  .right-1 {
    filter: alpha(opacity=0);
    transition: all 0.2s ease-in-out;
  }
}
input:hover {
  .left-1,
  .left-2,
  .right-3,
  .right-2,
  .right-1 {
    filter: alpha(opacity=1);
    transition: all 0.2s ease-in-out;
  }
}
.hover-inline-buttons {
  position: relative;
  width: 100%;

  & a,
  & button {
    opacity: 0;
    transition: all 0.2s ease-in-out;
    position: absolute;
    cursor: pointer;

    &.left-1,
    &.left-2,
    &.right-1,
    &.right-2,
    &.right-3 {
      position: absolute;

      img {
        background-color: #fff;
      }
    }

    &.left-1 {
      left: 3px;
    }
    &.left-2 {
      left: 27px;
    }
    &.right-3 {
      right: 48px;
    }
    &.right-2 {
      right: 24px;
    }
    &.right-1 {
      right: 0;
    }
  }

  &:hover a,
  &:hover button {
    opacity: 1;
  }
}
</style>
