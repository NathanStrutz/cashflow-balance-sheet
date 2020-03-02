<template>
  <div id="header-menu" class="no-print">
    <span class="menuHoverOpen">
      <a href="javascript:" tabindex="-1" @click.prevent><img src="@/images/more_vert.svg"/></a>
      <div class="menu">
        <ul>
          <li @click="github"><img src="@/images/github.svg" width="24" height="24" /> <span>GitHub Project</span></li>
          <li @click="save"><img src="@/images/save.svg" width="24" height="24" /> <span>Already Saved Automatically</span></li>
          <li @click="RESET_STATE"><img src="@/images/delete_sweep.svg" width="24" height="24" /> <span>Reset Numbers</span></li>
        </ul>
      </div>
    </span>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["RESET_STATE"]),
    github() {
      window.location.href = "https://github.com/NathanStrutz/cashflow-balance-sheet";
    },
    save() {
      alert(
        "Your game is saved automatically every time you make a change.\
		\nRefresh the page to try it out.\
		\nUse the Reset Numbers menu item to clear it and start over."
      );
    }
  }
};
</script>

<style lang="scss">
$border-color: #ccc;
$hover-bg-color: #eee;

#header-menu {
  position: relative;
  padding: 6px;
  border: 1px solid $border-color;

  .menuHoverOpen {
    .menu {
      display: none;
      position: absolute;
      top: 39px;
      right: 0;
      // Extra space around the edges because the menu will close as soon as the mouse leaves the area
      padding: 0 0 30px 30px;

      ul {
        background-color: #fff;
        border: 1px solid $border-color;
        border-radius: 8px 0 8px 8px;
        list-style: none;
        padding: 0;
        margin: 0;
        box-shadow: -10px 10px 20px -10px rgba(0, 0, 0, 0.75);

        li {
          padding: 12px 1rem;
          border-top: 1px solid $border-color;
          white-space: nowrap;
          cursor: pointer;
          display: flex;
          line-height: 1.75rem;

          &:hover {
            background: $hover-bg-color;
          }

          img {
            margin-right: 1rem;
          }
        }
      }
    }
    &:hover .menu,
    &:focus .menu,
    &:focus-within .menu {
      display: block;
    }
  }
  &:hover .menu {
    display: block;
  }
}
</style>
