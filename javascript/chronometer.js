class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }



  start(callback) {

    this.intervalId = setInterval(() => {
      if (typeof callback === 'function') callback();
      this.currentTime += 1;
    }, 1000);

  }

  getMinutes() {
    return this.currentTime / 60 | 0;
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // let result = value.toString();
    // if (result.length === 1) result = "0" + result;
    // return result;
    return String(value).length === 2 ? String(value) : "0" + value;
  }

  stop() {
    clearInterval(this.intervalId); // ... your code goes here
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
