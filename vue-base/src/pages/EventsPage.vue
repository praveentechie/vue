<template>
  <div class="events-page container">
    <h2 class="page-title">Events & Forms page</h2>
    <hr>
    <h4>Events</h4>
    <b-button @click="eventHandler">Click - Disable form</b-button>
    <b-button @click.ctrl="eventHandler">Ctrl + Click</b-button>
    <!-- ### vue: key + event
      .ctrl
      .alt
      .shift
      .meta
    -->
    <b-button @mouseover="eventHandler">Mouse over</b-button>
    <hr>
    <h4>Form</h4>
    <div class="ap-form-group">
      <b-form-group :disabled="disableForm">
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          description="Hit enter. - a sample description"
          label="Enter your name"
          label-for="input-horizontal"
        >
          <b-form-input @keyup.enter="eventHandler"></b-form-input>
          <!-- ### vue: key events
            .enter
            .tab
            .delete (captures both “Delete” and “Backspace” keys)
            .esc
            .space
            .up
            .down
            .left
            .right
          -->
        </b-form-group>
      </b-form-group>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      disableForm: false
    };
  },
  methods: {
    eventHandler: function (event) {
      if (event.type === 'click') {
        this.disableForm = !this.disableForm;
      }
      alert(`${event.type} event triggered`);
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from, next);
    alert('You are about to leave and next() has to be called');
    next();
  }
}
</script>

// ### vue: scoped style will apply only to this component
<style lang="scss" scoped>
  .events-page {
    background-color: #efefef;
    box-shadow: 0px 0px 30px 5px #aaaaaa;
    // ### css: calc() calculate any prop dynamically
    height: calc(100vh - 56px);
    margin: 0 auto;
    padding: 0 15px 5px;
    width: 90%;

    .ap-form-group {
      margin-top: 15px;
    }
  }
</style>