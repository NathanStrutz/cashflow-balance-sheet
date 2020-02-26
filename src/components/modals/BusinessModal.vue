<template>
  <modal-window @del="deleteBusiness(index)" @close="closeModal">
    <template #header>Business</template>
    <template #body>
      <table>
        <tbody>
          <tr>
            <td><label>Property Name:</label></td>
            <td><input type="text" autocomplete="off" :value="item.name" @input="changeName($event.target.value)" /></td>
          </tr>
          <tr>
            <td><label>Down Payment:</label></td>
            <td>
              <dollar-format-input name="downPayment" :value="item.downPayment" @input="changeDownPayment" />
            </td>
          </tr>
          <tr>
            <td><label>Cost:</label></td>
            <td><dollar-format-input name="cost" :value="item.cost" @input="changeCost" /></td>
          </tr>
          <tr>
            <td><label>Liability:</label></td>
            <td><dollar-format-input name="liability" :value="item.liability" @input="changeLiability" /></td>
          </tr>
          <tr>
            <td><label>Income:</label></td>
            <td><dollar-format-input name="income" :value="item.income" @input="changeIncome" /></td>
          </tr>
        </tbody>
      </table>
    </template>
  </modal-window>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import DollarFormatInput from "@/components/misc/DollarFormatInput.vue";
import ModalWindow from "@/components/application/ModalWindow.vue";

export default {
  components: { ModalWindow, DollarFormatInput },
  props: {
    index: { type: Number, default: -1 }
  },
  computed: {
    ...mapGetters("investments", ["getBusiness"]),
    item() {
      return this.getBusiness(this.index);
    }
  },
  methods: {
    ...mapMutations("investments", [
      "changeBusinessName",
      "changeBusinessDownPayment",
      "changeBusinessCost",
      "changeBusinessLiability",
      "changeBusinessIncome",
      "deleteBusiness",
      "closeModal"
    ]),
    changeName(value) {
      this.changeBusinessName({ index: this.index, value });
    },
    changeDownPayment(value) {
      this.changeBusinessDownPayment({ index: this.index, value });
    },
    changeCost(value) {
      this.changeBusinessCost({ index: this.index, value });
    },
    changeLiability(value) {
      this.changeBusinessLiability({ index: this.index, value });
    },
    changeIncome(value) {
      this.changeBusinessIncome({ index: this.index, value });
    }
  }
};
</script>
