# vue js

## Differences
### $mount() vs el
el renders the element as soon as the new Vue instance is called but $mount() can be called manually, so the it can be rendered after DOM formed or any loading operations are done. 

### v-model vs v-bind
v-bind is for **one** way binding, v-model is for **two** way binding
