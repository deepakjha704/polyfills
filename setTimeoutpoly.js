// function createTimeout(cb, delay, ...args) {
//   let timerId = 0;
//   const timermap = {};

//   function mySetTimeeout(cb, delay){
//     if (!timermap[timerId]) return;
//     if(Date().now + delay)
//   }
//   function clearMyTimeout(id){
//     delete timermap[id]
//   }

//   return {mySetTimeeout, clearMyTimeout}
// }

window.timerId = 123;
window.timers = {};

window.mySetTimeout = function (cb, delay, ...args) {
  window.timerId++;
  const time = Date.now() + delay;
  window.timers[window.timerId] = {
    cb,
    time,
    args: [...args],
  };
  requestIdleCallback(processTimer);
  return timerId;
};

window.clearMyTimeout = function (timerId) {
  delete timers[timerId];
};

window.processTimer = function () {
  Object.keys(window.timers).forEach((key) => {
    const { cb, time, args } = window.timers[key];
    const currentTime = Date.now();
    if (currentTime > time) {
      cb(...args);
      delete timers[key];
    } else {
      requestIdleCallback(processTimer);
    }
  });
};

mySetTimeout((name) => console.log(name), 1000, "first Timmer");
mySetTimeout((name) => console.log(name), 5000, "second Timmer");
mySetTimeout((name) => console.log(name), 7000, "third Timmer");
