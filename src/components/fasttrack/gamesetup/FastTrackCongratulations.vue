<template>
  <section>
    <h1>Congratulations!</h1>
    <h2>You are out of the Rat Race!</h2>

    <div class="inset">
      <h5>New Goals:</h5>
      <ol>
        <li>Buy your "Dream" by landing on the Fast Track space you selected at the start of the game and purchasing it.</li>
        <li>Increase Your Monthly Cash Flow by buying businesses.</li>
      </ol>
    </div>

    <div class="inset">
      <h5>You win if:</h5>
      <ol>
        <li>You are the 1st person to buy your Dream.</li>
        <div><br />&mdash; OR &mdash;<br /><br /></div>
        <li>You ar ethe 1st person to accumulate $50,000 in Monthly Cash Flow from businesses purchased on the Fast Track.</li>
      </ol>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1,
h2 {
  text-align: center;
}
h1 {
  font-size: 2.6rem;
  margin: 0.1rem;
}
h2 {
  font-size: 1.5rem;
  margin: 0.2rem 0 1.5rem;
}
h5 {
  font-size: 1rem;
  margin: 2rem 0 0 0;
}
.inset {
  margin: 0 10%;
}
ol {
  padding-left: 1rem;
  > div {
    text-align: center;
  }
}
</style>