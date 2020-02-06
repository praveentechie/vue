<template>
  <section>
    <h1>Hello from home page!</h1>
    <b-button @click="toggleTheme">Toggle theme</b-button>
    <div class="hot-key-wrapper">
      <label class="col-md-3">Hot key sample</label>
      <input class="col-md-9" @keydown.ctrl.83="hotKeyPress" placeholder="Click here and press 'Ctrl + s' and see console"/>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: false
    }
  },
  methods: {
    hotKeyPress(event) {
      console.log('hot key works');
      event.preventDefault();
      console.log('Prevented default save and can perform any op when the combination is selected')
    },
    toggleTheme: () => {
      let hasLightTheme = document.getElementsByClassName('light-theme');
      if (hasLightTheme && hasLightTheme[0]) {
        let updatedClasses = hasLightTheme[0].className.replace('light-theme', '');
        hasLightTheme[0].className = updatedClasses ? `dark-theme ${updatedClasses}` : 'dark-theme';
      } else {
        let darkTheme = document.getElementsByClassName('dark-theme');
        let updatedClasses = darkTheme[0].className.replace('dark-theme', '');
        darkTheme[0].className = updatedClasses ? `light-theme ${updatedClasses}` : 'light-theme';
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.hot-key-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  width: 50%;
}
</style>