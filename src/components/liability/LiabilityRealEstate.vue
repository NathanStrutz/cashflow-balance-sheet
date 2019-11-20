<template>
	<tbody>
		<tr v-for="(property, index) in realEstate" :key="index" :class="!index ? 'line-input' : 'blank-line-input'">
			<td v-if="!index">
				<label>RE Mortgage:</label>
			</td>
			<td :colspan="!index ? 1 : 2">
				<input type="text" :value="property.name" @input="changeName($event, index)" />
			</td>
			<td>
				<input type="text" class="numeric" :value="property.mortgage" @input="changeMortgage($event, index)" />
			</td>
		</tr>
	</tbody>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
	computed: {
		...mapState("investments", ["realEstate"])
	},
	methods: {
		...mapMutations("investments", ["changeRealEstateName", "changeRealEstateIncome", "changeRealEstateMortgage"]),

		changeName(e, index) {
			this.changeRealEstateName({ index: index, value: e.target.value });
		},
		changeMortgage(e, index) {
			this.changeRealEstateMortgage({ index: index, value: Number(e.target.value) });
		}
	}
};
</script>
