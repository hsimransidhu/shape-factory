'use strict';

function onEvent(element, event, callback) {
  element.addEventListener(event, callback);
}

function getElementById(id) {
  return document.getElementById(id);
}

function createElement(tagName) {
  return document.createElement(tagName);
}

function setTextContent(element, text) {
  element.textContent = text;
}

export { onEvent, getElementById, createElement, setTextContent };
