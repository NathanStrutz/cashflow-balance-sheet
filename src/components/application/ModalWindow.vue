<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" tabindex="0" @keyup.esc="close" @keyup.ctrl.c="close" @click="close">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription" @click="dontClose">
        <header class="modal-header" id="modalTitle">
          <slot name="header" />
          <button type="button" class="close-x" @click="close" aria-label="Close modal">
            <img src="@/images/close.svg" width="24" height="24" />
          </button>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body" />
        </section>
        <footer class="modal-footer">
          <button type="button" class="modal-delete" @click="del" aria-label="Close modal">
            <img src="@/images/close.svg" width="12" height="12" />
            Delete
          </button>
          <slot name="footer" />
          <button type="button" class="modal-close" @click="close" aria-label="Close modal">
            <img src="@/images/check.svg" width="12" height="12" />
            Done
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    },
    dontClose(event) {
      event.stopPropagation();
    },
    del() {
      this.$emit("del");
    }
  }
};
</script>

<style lang="scss">
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    background: #ffffff;
    box-shadow: 4px 4px 30px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;

    .modal-header,
    .modal-footer {
      padding: 15px;
      display: flex;
      align-items: baseline;
    }

    .modal-header {
      border-bottom: 1px solid $colorW;
      background-color: $colorG;
      color: #000;
      vertical-align: baseline;
      justify-content: space-between;
      font-size: 1.5rem;
      position: relative;

      .close-x {
        // font-size: 100%;
        // font-family: inherit;
        border: 0;
        padding: 0;
        background-color: #fff;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 4rem;
      }
    }

    .modal-footer {
      border-top: 1px solid #eeeeee;
      justify-content: space-between;

      button {
        font-size: 1rem;
        padding: 0.4rem 1.2rem;
        background-color: transparent;
        border: 0;

        &.modal-delete {
          background-color: $colorR;
          color: #fff;
          img {
            filter: invert(1);
          }

          &:hover {
            background-color: darken($colorR, 10);
          }
        }
        &.modal-close {
          background-color: $colorG;
          &:hover {
            background-color: darken($colorG, 10);
          }
        }
      }
    }

    .modal-body {
      position: relative;
      padding: 15px 10px;

      table tr td {
        padding: 3px 6px;
        font-family: sans-serif;
        font-size: 0.9rem;

        input {
          width: 250px;
        }
      }
    }
  }
}
</style>
