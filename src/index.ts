import './styles/index.scss';

const canvas = <HTMLCanvasElement>document.getElementById('canvas')
const ctx = canvas.getContext('2d');

if(!ctx || !(ctx instanceof CanvasRenderingContext2D)) { 
  throw new Error("Couldn't get canvas") 
}

ctx.fillRect(100, 100, 100, 100)