// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        posX: 0,
        posY: 0,
        statusSquare: 0,
        isClickSquare: false
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },
    drawSquare(A, B) {
        this.posX = A;
        this.posY = B;
        this.statusSquare = 0;
    },
    clickSquare() {
        if (gCaro.isClickSquare) {
            gCaro.isClickSquare = false;

            this.clickSquareO();


        } else {
            gCaro.isClickSquare = true;

            this.clickSquareX();
        }

    },
    clickSquareO() {
        window.gCaro.arrayCaro[this.posX][this.posY] = 1;
        this.node.getChildByName("o").active = true;
        this.node.getChildByName("x").active = false;
        this.checkWin(this.posX, this.posY);

    },
    clickSquareX() {
        window.gCaro.arrayCaro[this.posX][this.posY] = 2;
        this.node.getChildByName("x").active = true;
        this.node.getChildByName("o").active = false;
        this.checkWin(this.posX, this.posY);


    },
    checkWin(xpos, ypos) {
        var _xpos = xpos;
        var _ypos = ypos;
        let pos ={x : _xpos, y : _ypos}
        let arrayCaroX = window.gCaro.arrayCaro;
        let curentSquare = window.gCaro.arrayCaro[xpos][ypos];

        let demLineX = 1;
        let demLineY = 1;

        let lineX0 = true;
        let lineX1 = true;

        let lineY0 = true;
        let lineY1 = true;

        let demCheoT = 1;
        let cheoT0 = true;
        let cheoT1 = true;

        let demCheoP = 1;
        let cheoP0 = true;
        let cheoP1 = true;

        let lineHorizontal =[];
        lineHorizontal.push(pos);
        let lineVertical=[];
        lineVertical.push(pos);
        let lineDiagonalLeft=[]; // Diagonal Line Left to Right
        lineDiagonalLeft.push(pos);
        let lineDiagonalRight=[]; // Diagonal Line Right to Left
        lineDiagonalRight.push(pos);

        for (let i = 0; i < 20; i++) {
            if (lineX0 && _xpos - (i + 1) >= 0) {
                if (arrayCaroX[_xpos - (i + 1)][_ypos] == curentSquare) {
                    demLineX++;
                    let posver0 = {x : (_xpos - (i + 1)), y : _ypos}
                    lineHorizontal.push(posver0);
                }
                else lineX0 = false;
            }
            if (lineX1 && _xpos + (i + 1) < 20) {
                if (arrayCaroX[_xpos + (i + 1)][_ypos] == curentSquare) {
                    demLineX++;
                    let posver1 = {x : (_xpos + (i + 1)), y : _ypos}
                    lineHorizontal.push(posver1);
                }
                else lineX1 = false;
            }
            if (lineY0 && _ypos - (i + 1) >= 0) {
                if (arrayCaroX[_xpos][_ypos - (i + 1)] == curentSquare) {
                    demLineY++;
                    let posver2 = {x : _xpos, y : (_ypos - (i + 1))};
                    lineVertical.push(posver2);
                }
                else lineY0 = false;
            }
            if (lineY1 && _ypos + (i + 1) < 20) {
                if (arrayCaroX[_xpos][_ypos + (i + 1)] == curentSquare) {
                    demLineY++;
                    let posver3 = {x : _xpos, y : (_ypos + (i + 1))};
                    lineVertical.push(posver3);
                }
                else lineY1 = false;
            }

            if (cheoT0 && _xpos - (i + 1) >= 0 && ypos - (i + 1) >= 0) {
                if (arrayCaroX[_xpos - (i + 1)][_ypos - (i + 1)] == curentSquare) {
                    demCheoT++;
                    let posver4 = {x : (_xpos - (i + 1)), y : (_ypos - (i + 1))};
                    lineDiagonalLeft.push(posver4);
                }
                else cheoT0 = false;
            }
            if (cheoT1 && _xpos + (i + 1) <= 19 && ypos + (i + 1) <= 19) {
                if (arrayCaroX[_xpos + (i + 1)][_ypos + i + 1] == curentSquare) {
                    demCheoT++;
                    let posver5 = {x : (_xpos + (i + 1)), y : (_ypos + i + 1)};
                    lineDiagonalLeft.push(posver5);
                }
                else cheoT1 = false;
            }
            if (cheoP0 && _xpos + (i + 1) < 20 && ypos - (i + 1) >= 0) {
                if (arrayCaroX[_xpos + (i + 1)][_ypos - (i + 1)] == curentSquare) {
                    demCheoP++;
                    let posver6 = {x : (_xpos + (i + 1)), y : (_ypos - (i + 1))};
                    lineDiagonalRight.push(posver6);
                 }
                else cheoP0 = false;
            }
            if (cheoP1 && _xpos - (i + 1) >= 0 && ypos + (i + 1) <= 19) {
                if (arrayCaroX[_xpos - (i + 1)][_ypos + (i + 1)] == curentSquare) {
                    demCheoP++;
                    let posver7 = {x : (_xpos - (i + 1)), y : (_ypos + (i + 1))};
                    lineDiagonalRight.push(posver7);
                }
                else cheoP1 = false;
            }
        }
        console.log(demLineX + "||" + demLineY + "||" + demCheoT + "||" + demCheoP);
        console.log(lineHorizontal);
        console.log(lineVertical);
        console.log(lineDiagonalLeft);
        console.log(lineDiagonalRight);
        // let lineHorizontal;
        // lineHorizontal.push(pos);
        // let lineVertical;
        // lineVertical.push(pos);
        // let lineDiagonalLeft; // Diagonal Line Left to Right
        // lineDiagonalLeft.push(pos);
        // let lineDiagonalRight; // Diagonal Line Right to Left
        // lineDiagonalRight.push(pos);
    },
    showLine(){
        // Horizontal Line
        // Vertical Line
        // Diagonal Line Left to Right
        // Diagonal Line Right to Left

    }




    // update (dt) {},
});
