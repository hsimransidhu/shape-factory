 'use strict';
 
 // Import utility functions
import { onEvent, select } from './utils.js';  // Adjust the path as needed

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

  static getColorName(colorCode) {
    const colorMap = {
      '#09f': 'Blue',
      '#9f0': 'Green',
      '#f90': 'Orange',
      '#f09': 'Pink',
      '#90f': 'Purple'
    };

    return colorMap[colorCode] || colorCode;
  }

  getInfo() {
    const colorName = Shape.getColorName(this.colour);
    return `Shape: ${this.name}, Colour: ${colorName}`;
  }
}

let shapeCount = 0;
const maxShapes = 24;

function createShape() {
  if (shapeCount < maxShapes) {
    let shapeSelect = select("#shapeSelect");
    let colorSelect = select("#colorSelect");
    let shapeContainer = select("#shapeContainer");
    let h3 = select('#text');
    let selectedShape = shapeSelect.value;
    let selectedColor = colorSelect.value;
    let newShape = new Shape(selectedShape, selectedColor);
    let shapeDiv = create("div");

    shapeDiv.className = `shape ${selectedShape}`;
    shapeDiv.style.backgroundColor = selectedColor;
    onEvent(shapeDiv, 'click', function () {
      h3.textContent = newShape.getInfo();
    });

    shapeContainer.appendChild(shapeDiv);
    shapeCount++;

    h3.textContent = `Shapes created: ${shapeCount}/${maxShapes}`;
  } else {
    const h3 = select('#text');
    h3.textContent = 'Storage is full (24 shapes created)';
  }
}

// Add event listener to the button
document.addEventListener("DOMContentLoaded", function () {
  const createButton = select('#createButton');
  onEvent(createButton, 'click', createShape);
});
