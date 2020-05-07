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
        redirect: 'list'
      }, {
        path: 'list',
        name: 'user-list',
        props: {
          name: 'AP router'
        },
        component: () => import('../views/UserList.vue')    
      }, {
        path: 'info/:id?',
        name: 'user-details',
        component: () => import('../views/UserDetails.vue')
      }
    ]
  }
];