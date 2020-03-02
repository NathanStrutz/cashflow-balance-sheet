<!-- State-connected, just provide the property index -->
<!-- This replaces the property name <input> to provide property editing and add-a-row buttons -->
<template>
  <span class="hover-inline-buttons">
    <slot name="input" />
    <slot name="right-3" />
    <slot name="right-2" />
    <slot name="right-1" />
  </span>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
input .add-row-button {
  filter: alpha(opacity=0);
  transition: all 0.2s ease-in-out;
  cursor: ne-resize;
}
input:hover .add-row-button {
  filter: alpha(opacity=1);
  transition: all 0.2s ease-in-out;
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

    &.right-1,
    &.right-2,
    &.right-3 {
      position: absolute;

      img {
        background-color: #fff;
      }
    }

    &.right-1 {
      right: 0;
    }
    &.right-2 {
      right: 24px;
    }
    &.right-3 {
      right: 48px;
    }
  }

  &:hover a,
  &:hover button {
    opacity: 1;
  }
}
</style>
