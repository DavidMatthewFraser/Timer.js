class Timer {
    constructor(func) {
        this.started = false
        this.timer = null
        this.func = func
    }
    start () {
        if (!this.started) {
            this.started = true
            this.timer = setInterval(this.func, 1000)
        } else {
            console.log("already started")
        }
    }
    stop () {
        if(this.timer != null) {
            window.clearInterval(this.timer)
            this.timer = null
            this.started = false
        } else {
            console.log("timer has not yet started")
        }
    }
}
