<template>
  <tr :class="title ? 'line-input' : 'blank-line-input'">
    <td>
      <label v-if="title">{{ title }}:</label>
      <input v-if="hasText" type="text" autocomplete="off" :value="text" @input="$emit('updateText', $event.target.value)" />
    </td>
    <td :colspan="hasText ? 1 : 2">
      <dollar-format-input :value="value" @input="$emit('updateValue', $event)" :readonly="readonly" />
    </td>
  </tr>
</template>

<script>
import DollarFormatInput from "./DollarFormatInput.vue";

export default {
  components: { DollarFormatInput },
  props: {
    title: String,
    text: String,
    value: Number,
    readonly: { type: Boolean, default: false },
    hasText: { type: Boolean, default: true }
  }
};
</script>

<style lang="scss">
tr.line-input > td:first-child {
  display: flex;
  flex-direction: row;
  white-space: nowrap;
}

tr.line-input > td:first-child > label {
  min-width: 150px;
  max-width: 40%;
}

.line-input {
  font-family: sans-serif;
  &.all-text {
    font-size: 0.9rem;
    border-bottom: 2px solid #000;
  }
  label {
    font-size: 0.9rem;
  }
}
</style>
