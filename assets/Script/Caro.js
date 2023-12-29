cc.Class({
    extends: cc.Component,

    properties: {
        square: cc.Prefab
    },

    onLoad: function () {
        
    },
    start: function() {
        console.log(">>>>>>>>>>>>");
        for (let i = 0; i < 10; i++) {
            window.gCaro.arrayCaro[i] =[];
            for (let j = 0; j < 20; j++) {
                window.gCaro.arrayCaro[i][j] = 0;
            }
            
        }
        this.makeGrid();
    },
    makeGrid(){
        console.log(">>>>>>>>>>>22>");
        for (let i = 0; i < 10; i++) {
           for (let j = 0; j < 20; j++) {
                var squ = cc.instantiate(this.square);
                squ.setPosition(j*50 + 25, i*-50 - 25);
                squ.getComponent("square").drawSquare(i,j);
                this.node.addChild(squ);
            
           }
            
        }
// 25   - 25, 75 -25


    },

    // called every frame
    update: function (dt) {

    },
});
