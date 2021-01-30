import './styles/index.scss';
import { canvasInit } from './canvas'
import { randomizeArray } from './algorithms/randomizeArray';

const LOWER_BOUND = 1
const UPPER_BOUND = 50

const reset = document.querySelector('#reset')
const merge = document.querySelector('#merge')
const quick = document.querySelector('#quick')
const heap = document.querySelector('#heap')
const bubble = document.querySelector('#bubble')
const insertion = document.querySelector('#insertion')

const array: number[] = []; 
randomizeArray(array, LOWER_BOUND, UPPER_BOUND) 

canvasInit() 

reset?.addEventListener('click', () => {
  randomizeArray(array, LOWER_BOUND, UPPER_BOUND)
})
// merge?.addEventListener('click', TODO)
// quick?.addEventListener('click', TODO)
// heap?.addEventListener('click', TODO)
// bubble?.addEventListener('click', TODO)
// insertion?.addEventListener('click', TODO)