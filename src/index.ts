import './styles/index.scss';
import { canvasInit } from './canvas'
import { randomizeArray } from './helpers/randomizeArray';
import { bubbleSort } from './algorithms/bubbleSort';
import { selectionSort } from './algorithms/selectionSort';
import { insertionSort } from './algorithms/insertionSort';

const LOWER_BOUND = 1
const UPPER_BOUND = 50

const reset = document.querySelector('#reset')
const heap = document.querySelector('#heap')
const merge = document.querySelector('#merge')
const quick = document.querySelector('#quick')
const bubble = document.querySelector('#bubble')
const selection = document.querySelector('#selection')
const insertion = document.querySelector('#insertion')

const array: number[] = []; 
randomizeArray(array, LOWER_BOUND, UPPER_BOUND) 

canvasInit() 

reset?.addEventListener('click', () => {
  randomizeArray(array, LOWER_BOUND, UPPER_BOUND)
})
bubble?.addEventListener('click', () => { 
  bubbleSort(array)
})
selection?.addEventListener('click', () => {
  selectionSort(array)
})
insertion?.addEventListener('click', () => {
  insertionSort(array)
})
// merge?.addEventListener('click', TODO)
// quick?.addEventListener('click', TODO)
// heap?.addEventListener('click', TODO)