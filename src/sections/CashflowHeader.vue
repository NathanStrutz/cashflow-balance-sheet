<template>
	<div>
		<header>
			<title-input id="profession">Profession</title-input>
			<title-input id="player">Player</title-input>
		</header>
		<p>
			Goal: To get out of the Rat Race and onto the Fast Track by building up your Passive Income to be greater than your Total
			Expenses
		</p>
	</div>
</template>

<script>
import TitleInput from "@/components/TitleInput.vue";

export default {
	components: { TitleInput }
};
</script>

<style lang="scss">
header {
	display: flex;
	flex: 1 0 100%;
	justify-content: space-evenly;
}
header > *:not(:last-child) {
	padding-right: 1rem;
}

header ~ p {
	font-size: 0.875rem;
}
</style>