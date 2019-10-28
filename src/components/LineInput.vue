<template>
	<tr class="line-input">
		<td>
			<label>{{ title }}:</label>
			<input type="text" :value="text" @input="$emit('updateText', $event.target.value)" />
		</td>
		<td>
			<input type="text" class="numeric" :value="value" @input="$emit('updateValue', $event.target.value)" />
		</td>
	</tr>
</template>

<script>
export default {
	props: {
		title: String,
		text: String,
		value: Number
	}
};
</script>

<style>
</style>