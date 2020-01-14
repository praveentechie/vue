var app = new Vue({
  el: '.content-class',
  data: {
    message: 'AP class',
    arrayList: [
      {name: 'User1'},
      {name: 'User2'},
      {name: 'User3'}
    ]
  },
  methods: {
    clickHandler: function() {
      this.message = `${this.message} clicked`;
    }
  }
});

let arrayList = [
  {name: 'User1'},
  {name: 'User2'},
  {name: 'User3'}
];

var list = Vue.extend({
  template: '#list',
  data: function() {
    return {
      arrayList
    }
  },
  method: function() {}
});

var edit = Vue.extend({
  template: '#edit',
  data: function() {},
  methods: {}
});

var create = Vue.extend({
  template: '#create',
  data: function() {
    return {
      desc: '',
      name: ''
    };
  },
  methods: {
    addUser: function() {
      alert(`user ${this.name} added with desc ${this.desc}`);
      arrayList.push({name: this.name});
    }
  }
});

var router = new VueRouter({
  routes: [
    { path: '/', component: list, name: 'home'},
    { path: '/employee/create', component: create, name: 'create-user'},
    { path: '/employee/:employeeId/edit', component: edit}
  ]
});

var app_id = new Vue({
  el: '#content-id',
  router: router,
  data: {
    message: 'AP',
    arrayList: [
      {name: 'User1'},
      {name: 'User2'},
      {name: 'User3'}
    ]
  },
  methods: {
    clickHandler: function() {
      this.message = `${this.message} clicked`;
    }
  }
});
