<template>
  <modal-window @del="deleteRealEstate(index)" @close="closeModal">
    <template #header>Real Estate</template>
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
              <dollar-format-input name="downPayment" :value="item.downPayment" @input="changeDownPayment" @blur="estimateMortgage" />
            </td>
          </tr>
          <tr>
            <td><label>Cost:</label></td>
            <td><dollar-format-input name="cost" :value="item.cost" @input="changeCost" @blur="estimateMortgage" /></td>
          </tr>
          <tr>
            <td><label>Mortgage:</label></td>
            <td><dollar-format-input name="mortgage" :value="item.mortgage" @input="changeMortgage" /></td>
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
  data() {
    return {
      hasEditedMortgage: false
    };
  },
  computed: {
    ...mapGetters("investments", ["getRealEstate"]),
    item() {
      return this.getRealEstate(this.index);
    }
  },
  methods: {
    ...mapMutations("investments", [
      "changeRealEstateName",
      "changeRealEstateDownPayment",
      "changeRealEstateCost",
      "changeRealEstateMortgage",
      "changeRealEstateIncome",
      "deleteRealEstate",
      "closeModal"
    ]),
    changeName(value) {
      this.changeRealEstateName({ index: this.index, value });
    },
    changeDownPayment(value) {
      this.changeRealEstateDownPayment({ index: this.index, value });
    },
    changeCost(value) {
      this.changeRealEstateCost({ index: this.index, value });
    },
    estimateMortgage() {
      if (!this.hasEditedMortgage) {
        this.changeRealEstateMortgage({ index: this.index, value: this.item.cost - this.item.downPayment });
      }
    },
    changeMortgage(value) {
      this.hasEditedMortgage = true;
      this.changeRealEstateMortgage({ index: this.index, value });
    },
    changeIncome(value) {
      this.changeRealEstateIncome({ index: this.index, value });
    }
  },
  mounted() {
    if (this.item.mortgage) {
      this.hasEditedMortgage = true;
    }
  }
};
</script>
