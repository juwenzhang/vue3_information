export class DrawCanvas {
    // 构造函数维护 canvas 画布的状态
    constructor(x, y, canvasRef) {
        this._x = x
        this._y = y
        this._width = window.innerWidth
        this._height = window.innerHeight
        this._canvasRef = canvasRef.value
        this._ctx = this._canvasRef.getContext('2d')
    }

    // 渲染我们的 canvas
    renderCanvas = () => {
        this._ctx.fillStyle = "#000"
        this._ctx.fillRect(0, 0, this._width, this._height)
    }

    // 开始定义更新的方法
    updateCanvas = () => {
        let timer = setInterval(() => {
            this._ctx.clearRect(0, 0, this._width, this._height)
            this._ctx.fillRect(this._x, this._y, this._width, this._height)
            if (++this._x >= this._width) {
                this._canvasRef.style.zIndex = "-1"
                clearInterval(timer)
            }
            timer = null
        }, 10)
    }
}