# vue js

## Differences
### $mount() vs el
el renders the element as soon as the new Vue instance is called but $mount() can be called manually, so the it can be rendered after DOM formed or any loading operations are done. 

### computed vs method
Values calculated in method will get call during every update.
Computed values are cached and reactive i.e. if the source computed values are changing then computed will be updated.
In other words computed values will not be called during each render and will update only when it's values changes

### v-model vs v-bind
v-bind is for **one** way binding, v-model is for **two** way binding
