import './styles/index.scss';

const reset = document.querySelector('#reset')
const merge = document.querySelector('#merge')
const quick  = document.querySelector('#quick')
const heap = document.querySelector('#heap')
const bubble = document.querySelector('#bubble')
const insertion = document.querySelector('#insertion') 

const canvas = <HTMLCanvasElement>document.getElementById('canvas')
const ctx = canvas.getContext('2d');

if(!ctx || !(ctx instanceof CanvasRenderingContext2D)) { 
  throw new Error("Couldn't get canvas") 
}

ctx.fillRect(100, 25, 100, 100)