'use strict';

class Shape {
  constructor(name, colour) {
    this._name = name;
    this._colour = colour;
  }

  get name() {
    return this._name;
  }

  get colour() {
    return this._colour;
  }
   
  static getColor(colorCode) {
    const colors = {
      '#09f': 'Blue',
      '#9f0': 'Green',
      '#f90': 'Orange',
      '#f09': 'Pink',
      '#90f': 'Purple'
    };

    return colors[colorCode] || colorCode;
  }

  getInfo() {
    const colorName = Shape.getColor(this.colour);
    return `Shape: ${this.name}, Colour: ${colorName}`;
  }
}

let shapeCount = 0;
const maxShapes = 24;
function createShape() {
  if (shapeCount < maxShapes) {
     let shapeSelect = document.getElementById("shapeSelect");
    let colorSelect = document.getElementById("colorSelect");
    let shapeContainer = document.getElementById("shapeContainer");
    let h3 = document.getElementById('text');
    let selectedShape = shapeSelect.value;
    let selectedColor = colorSelect.value;
    let newShape = new Shape(selectedShape, selectedColor);
    let shapeDiv = document.createElement("div");

    shapeDiv.className = `shape ${selectedShape}`;
    shapeDiv.style.backgroundColor = selectedColor;
    shapeDiv.onclick = function() {
      h3.textContent = newShape.getInfo();
    };

    shapeContainer.appendChild(shapeDiv);
    shapeCount++;

    h3.textContent = `Shapes created: ${shapeCount}/${maxShapes}`;
  } else {
    const h3 = document.getElementById('text');
    h3.textContent = 'Storage is full (24 shapes created)';
  }
}
