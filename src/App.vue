<template>
  <component :is="sheet" />
</template>

<script>
import RatRace from "@/components/RatRace.vue";
import FastTrack from "@/components/FastTrack.vue";
import { mapState } from "vuex";

export default {
  name: "app",
  components: { RatRace },
  computed: {
    ...mapState(["displaySheet"]),
    sheet() {
      return this.displaySheet === "Rat Race" ? RatRace : FastTrack;
    }
  }
};
</script>

<style lang="scss">
html {
  font: normal 16px Georgia, Times, serif;
  color: #000;
  background-color: #fff;
}

input {
  font-size: 0.9rem;
}
input[type="text"] {
  border: 0;
  border-bottom: 2px solid #777;
  border-left: 1px dashed #ccc;
  box-sizing: border-box;
  width: 100%;
  min-width: 5px;
  padding: 4px 10px 6px 10px;
  margin: 0 0 0 5px;
}
input[type="text"]:hover,
input[type="text"]:active {
  border-bottom-color: #000;
  border-left-color: #888;
}

button {
  cursor: pointer;
}

h3.column-title-bar {
  background-color: #000;
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 3px;
}

table {
  flex: 1 1 100%;

  &.line-inputs {
    border: 2px solid #000;
    width: 100%;
  }
  &.line-inputs td {
    padding: 0.3rem;
  }

  &.line-inputs tr td:last-of-type {
    width: 30%;
  }
  &.line-inputs tr.blank-line-input td:first-child input {
    margin-left: 0;
  }
}
#income-summary,
#expense-summary,
.total-io {
  font-family: sans-serif;
}

.total-io {
  display: flex;
  font-weight: 800;
  padding: 0 0 0 50%;
  label {
    flex: 0 0 110px;
  }
  sub {
    display: block;
    color: #666;
  }
}

.numeric {
  text-align: right;
}

input[readonly]:hover,
input[readonly]:active,
input[readonly]:focus {
  background-color: rgb(255, 248, 236);
  cursor: default;
}

@media print {
  html {
    font-size: 18px;
  }
  input[type="text"] {
    border-left-width: 0;
  }
  .no-print {
    display: none !important;
  }
  input {
    color: #fff;
  }
}
</style>
