# vue and other libraries

## Lazy load route & store registration

## Lazy load components
Refer `LazyLoadPage.vue` for loading components dynamically and register in local.
```
  components: {
    'lazy-component': () => import('../components/lazy-component.vue'),
    'lazy-component-v2': () => import('../components/lazy-component-v2.vue')
  }
```

## VueX


## Vue router
### The Full Navigation Resolution Flow
1. Navigation triggered.
2. Call beforeRouteLeave guards in deactivated components.
3. Call global beforeEach guards.
4. Call beforeRouteUpdate guards in reused components.
5. Call beforeEnter in route configs.
6. Resolve async route components.
7. Call beforeRouteEnter in activated components.
8. Call global beforeResolve guards.
9. Navigation confirmed.
10. Call global afterEach hooks.
11. DOM updates triggered.
12. Call callbacks passed to next in beforeRouteEnter guards with instantiated instances.