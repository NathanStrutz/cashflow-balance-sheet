<template>
  <input
    type="text"
    class="numeric"
    @input="setNewValue($event.target.value)"
    :value="displayValue"
    @focus="focus"
    @blur="blur"
    ref="thisInput"
  />
</template>

<script>
export default {
  props: {
    value: Number
  },
  data() {
    return {
      // valueBeforeApplication: this.value,
      isFocused: false
    };
  },
  computed: {
    displayFormattedValue() {
      return `$ ${new Intl.NumberFormat("en-US").format(this.value)}`;
    },
    displayValue() {
      return this.isFocused ? this.value.toString() : this.displayFormattedValue;
    }
  },
  methods: {
    focus() {
      // Avoid annoying re-selecting of the text value
      if (!this.isFocused) {
        // select all content for easy-overwriting
        this.isFocused = true;
        const el = this.$refs.thisInput;
        this.$nextTick(() => el.select());
      }
    },
    blur() {
      this.isFocused = false;
    },
    setNewValue(val) {
      // only change the value if the user is intentionally changing it
      // (otherwise it may be emitting the displayFormattedValue as the new value)

      const valJustNumbers = parseInt(val.replace(/[^\d]/g, ""));

      // also only if the value is really a number
      if (this.isFocused && Number.isInteger(valJustNumbers)) {
        this.$emit("input", valJustNumbers);
      }
    }
  }
};
</script>

<style>
</style>