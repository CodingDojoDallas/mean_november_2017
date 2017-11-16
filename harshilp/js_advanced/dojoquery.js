const $Dojo = function (id) {
    return (function () {
        this.myId = document.getElementById(id);
        this.click = function (callback) {
            this.myId.addEventListener("click", callback);
        };
    
        this.hover = function (hoverinCall, hoveroutCall=hoverinCall) {
            this.myId.addEventListener("mouseover", hoverinCall);
            this.myId.addEventListener("mouseout", hoveroutCall);
        };
    
        return this;
    }());
}
