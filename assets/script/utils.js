/* AS our program grows bigger , it may contain many lines of code , instead of 
putting everything ina  single file , you can use moddules to separate codes
in seoparate files as per their functionality , thnis maes our code easier to organize and update.

 module in a file that contains acode to perform a sopecific task . A module may cotain
  variables m functions , classes etc.
*/

// Add event listener
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
  }
  
  // Get HTML element by id
  function getElement(selector, parent = document) {
    return parent.getElementById(selector);
  }
  
  // Select HTML element
  function select(selector, parent = document) {
    return parent.querySelector(selector);
  }
  
  // Get a (node) list of HTML elements as array
  function selectAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
  }
  
  // Print
  function print(arg) {
    console.log(arg);
  }
  
  // Sleep
  function sleep(duration) {
    return new Promise(resolve => {
      setTimeout(resolve, duration)
    });
  }
  
  // Generate random number between - and including - 'min' and 'max'
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  // Filter array
  function filterArray(array, callback) {
    return array.filter(callback);
  }
  
  // Create an HTML element
  function create(element, parent = document) {
    return parent.createElement(element);
  }

  export { onEvent, select, selectAll };