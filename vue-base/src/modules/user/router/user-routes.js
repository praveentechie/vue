export default [
  {
    path: '/users',
    component: () => import('../views/UserPage.vue'),
    /**
     * ### vue-router: nested routes
     */
    children: [
      {
        path: '',
        props: {
          name: 'AP router'
        },
        component: () => import('../views/UserList.vue')    
      },
      {
        path: ':id',
        component: () => import('../views/UserDetails.vue')
      }
    ]
  }
];