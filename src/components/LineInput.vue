<template>
  <tr :class="title ? 'line-input' : 'blank-line-input'">
    <td>
      <label v-if="title">{{ title }}:</label>
      <input v-if="hasText" type="text" :value="text" @input="$emit('updateText', $event.target.value)" />
    </td>
    <td :colspan="hasText ? 1 : 2">
      <input
        type="text"
        class="numeric"
        :value="value"
        @input="$emit('updateValue', $event.target.value)"
        :readonly="readonly"
        @keypress="numbersOnly"
      />
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    value: Number,
    readonly: Boolean,
    hasText: { type: Boolean, default: true }
  },
  methods: {
    numbersOnly(e) {
      // make sure only numbers come through
      return Number.isInteger(Number(e.key)) ? true : e.preventDefault();
      // easy formatting because the game doesn't have change.
    }
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
