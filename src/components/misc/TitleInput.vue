 <template>
  <div class="title-input">
    <label>
      <slot />
    </label>
    <input type="text" autocomplete="off" :value="value" @input="$emit('input', $event.target.value)" :tabindex="tabindex" />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    tabindex: { type: Number, default: 0 }
  }
};
</script>

<style lang="scss" >
.title-input {
  font-family: Georgia, Times, serif;
  display: flex;
  justify-content: stretch;
  flex-wrap: nowrap;

  label {
    font-size: 2rem;
    width: 10rem;
    background-color: #000;
    color: #fff;
    padding: 0.1rem 0.5rem;
  }

  input {
    font-size: 1.5rem;
  }
}
</style>