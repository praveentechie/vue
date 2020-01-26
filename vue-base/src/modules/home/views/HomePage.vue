<template>
  <section>
    <h1>Hello from home page!</h1>
    <b-button @click="toggleTheme">Toggle theme</b-button>
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