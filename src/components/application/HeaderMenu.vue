<template>
  <nav id="header-menu-area" class="no-print">
    <a
      v-if="this.displaySheet === 'Rat Race'"
      href="javascript:"
      tabindex="-1"
      @click.prevent="toCashFlowDay"
      title="Turn the page to Cash Flow Day"
      ><img src="@/images/swap_calls.svg"
    /></a>
    <a
      v-if="this.displaySheet === 'Cash Flow Day'"
      href="javascript:"
      tabindex="-1"
      @click.prevent="toRatRace"
      title="Turn the page to the Rat Race"
      ><img src="@/images/cached.svg"
    /></a>
    <div id="header-menu">
      <span class="menuHoverOpen">
        <a href="javascript:" tabindex="-1" @click.prevent><img src="@/images/more_vert.svg"/></a>
        <div class="menu">
          <ul>
            <li @click="github" title="Visit this project's GitHub page">
              <img src="@/images/github.svg" width="24" height="24" /> <span>GitHub Project</span>
            </li>
            <li @click="save" title="Your game is saved automatically">
              <img src="@/images/save.svg" width="24" height="24" />
              <span>Already Saved Automatically</span>
            </li>
            <li @click.exact="RESET_STATE" @click.shift="superReset" title="Hold shift for a super-reset">
              <img src="@/images/delete_sweep.svg" width="24" height="24" /> <span>Reset Numbers</span>
            </li>
          </ul>
        </div>
      </span>
    </div>
  </nav>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["displaySheet"])
  },
  methods: {
    ...mapMutations(["RESET_STATE", "toRatRace", "toCashFlowDay"]),
    github() {
      window.location.href = "https://github.com/NathanStrutz/cashflow-balance-sheet";
    },
    save() {
      alert(
        "Your game is saved automatically every time you make a change.\
		\nRefresh the page to try it out.\
		\nUse the Reset Numbers menu item to clear it and start over."
      );
    },
    /** SuperReset - hold shift and click Reset Numbers on the menu to get here */
    superReset() {
      this.RESET_STATE();
      window.localStorage.clear();
      window.location.reload();
    }
  }
};
</script>

<style lang="scss">
$border-color: #ccc;
$hover-bg-color: #eee;

#header-menu-area {
  display: flex;
  flex: 0 0 32px;

  > a {
    position: relative;
    padding: 6px;
    margin-right: 4px;
    border: 1px solid $border-color;
  }
}

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
