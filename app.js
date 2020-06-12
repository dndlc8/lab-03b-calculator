import {add, sub, multi, div} from '../test/equations.js'


const addButton = document.getElementById('sum-button');
const subButton = document.getElementById('sub-button');
const multiButton = document.getElementById('multi-button');
const divButton = document.getElementById('div-button');

const input1 = document.getElementById('add-one');
const input2 = document.getElementById('add-two');
const input3 = document.getElementById('minus-one');
const input4 = document.getElementById('minus-two');
const input5 = document.getElementById('multi-one');
const input6 = document.getElementById('multi-two');
const input7 = document.getElementById('div-one');
const input8 = document.getElementById('div-two');


addButton.addEventListener('click', () => {
    // post-click logic goes here!
    const resultSpan = document.getElementById('sum-result');
    resultSpan.textContent = add(Number(input1.value), Number(input2.value));
});

subButton.addEventListener('click', () => {
    // post-click logic goes here!
    const resultSpan = document.getElementById('sub-result');
    resultSpan.textContent = sub(Number(input3.value), Number(input4.value));
});

multiButton.addEventListener('click', () => {
    // post-click logic goes here!
    const resultSpan = document.getElementById('multi-result');
    resultSpan.textContent = multi(Number(input5.value), Number(input6.value));
});

divButton.addEventListener('click', () => {
    // post-click logic goes here!
    const resultSpan = document.getElementById('div-result');
    resultSpan.textContent = div(Number(input7.value), Number(input8.value));
});