<template>
  <input
    type="text"
    autocomplete="off"
    class="numeric"
    :readonly="readonly"
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
    value: Number,
    readonly: { type: Boolean, default: false }
  },
  data() {
    return {
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
      if (!this.isFocused && !this.readonly) {
        this.isFocused = true;

        // select all content for easy-overwriting
        const el = this.$refs.thisInput;
        // using nextTick to wait for the editing value to drop in
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
      if (this.isFocused) {
        if (valJustNumbers) {
          this.$emit("input", valJustNumbers);
        } else {
          this.$emit("input", 0);
        }
      }
    }
  }
};
</script>
