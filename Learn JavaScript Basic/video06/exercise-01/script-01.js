var advancedModule = (function () {
  // Private variables and functions
  var privateCounter = 0

  function privateFunction() {
    console.log('This is a private function')
  }

  // Public interface
  return {
    incrementCounter: function () {
      privateCounter++
      console.log('Counter incremented: ' + privateCounter)
    },
    resetCounter: function () {
      privateCounter = 0
      console.log('Counter reset to 0')
    },
    publicFunction: function () {
      privateFunction()
      console.log('This is a public function')
    }
  }
})()

// Usage of the module
advancedModule.incrementCounter() // Outputs: Counter incremented: 1
advancedModule.resetCounter() // Outputs: Counter reset to 0
advancedModule.publicFunction() // Outputs: This is a private function
