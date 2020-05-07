let EventEmitter = function() {
  this.events = {};
};

EventEmitter.prototype.on = function(event, listener) {
  console.log('registered event*************\n', event);
  if (!this.events[event]) {
    this.events[event] = [];
  }

  this.events[event].push(listener);
};

EventEmitter.prototype.removeListener = function(event, listener) {
  console.log('remove event listner******\n', event);
  let listeners = this.events[event];

  if (listeners) {
    let index = listeners.indexOf(listener);
    if (index > -1) {
      this.events[event].splice(index, 1);
    }
  }
}

EventEmitter.prototype.emit = function(event) {
  console.log('triggered event***************\n', event);
  let listeners = this.events[event];
  if (listeners) {
    let length = listeners.length,
      args = [].slice.call(arguments, 1);

    for (let index = 0; index < length; index++) {
      listeners[index].apply(this, args);
    }
  }
};

EventEmitter.prototype.once = function (event, listener) {
  this.on(event, function fireOnce() {
    this.removeListener();
    listener.apply(this, arguments);
  });
}

let eventEmitter = new EventEmitter();
if (process.env.NODE_ENV === 'development') {
  window.eventEmitter = eventEmitter;
}
export default eventEmitter;