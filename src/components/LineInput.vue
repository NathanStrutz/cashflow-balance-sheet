<template>
	<tr class="line-input">
		<td>
			<label>{{ title }}:</label>
			<input v-if="hasText" type="text" :value="text" @input="$emit('updateText', $event.target.value)" />
		</td>
		<td :colspan="hasText ? 1 : 2">
			<input type="text" class="numeric" :value="value" @input="$emit('updateValue', $event.target.value)" :readonly="readonly" />
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