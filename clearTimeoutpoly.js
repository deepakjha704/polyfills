// window.timerId = 1234;
// window.timmers = {};

// window.setTimeInterval = function (cb, delay, ...args) {
//   window.timerId++;
//   window.timmers[window.timerId] = {
//     cb,
//     delay,
//     executionTime: Date.now() + delay,
//     args: [...args],
//   };
//   requestIdleCallback(processTimeInterval);
//   return window.timerId;
// };

// window.clearTimeInterval = function (id) {
//   delete window.timmers[id];
// };

// window.processTimeInterval = function () {
//   Object.keys(window.timmers).forEach((key) => {
//     const { cb, delay, executionTime, args } = timmers[key];
//     const currentTime = Date.now();
//     if (currentTime > executionTime) {
//       window.timmers[key] = {
//         cb,
//         delay,
//         args,
//         executionTime: Date.now() + delay,
//       };
//       cb(...args);
//       //   window.processTimeInterval();
//     } else {
//       requestIdleCallback(processTimeInterval);
//     }
//   });
// };

// const a = setInterval((name) => console.log(name), 2000, "deepak");
// clearTimeInterval(a);

window.intervalId = 1000;
window.intervalList = {};

window.setInterval1 = function (cb, interval, ...args) {
  const intervalId = window.intervalId++;

  function excuteCb() {
    cb(...args);
    window.intervalList[intervalId].interval += interval;
  }

  const time = Date.now() + interval;
  window.intervalList[intervalId] = {
    cb: excuteCb,
    interval: time,
    args: [...args],
  };

  process();
  return intervalId;
};

function process() {
  const keys = Object.keys(window.intervalList);

  function executeCallback(key) {
    const { cb, interval } = intervalList[key];
    const currentTime = Date.now();
    if (currentTime >= interval) {
      cb();
    } else {
      requestIdleCallback(process);
    }
  }

  keys.forEach(executeCallback);
}
window.clearInterval = function (timerId) {
  delete intervalList[timerId];
};

const timerid = window.setInterval1(
  (name) => {
    console.log("my name is" + name);
  },
  1000,
  "deepak"
);
// clearInterval(timerid);
