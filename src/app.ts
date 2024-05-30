/*
* File: app.ts
* Author: Viola Máté
* Copyright: 2024, Viola Máté
* Group: I/2/N
* Date: 2024-05-30
* Github: https://github.com/matukav
* Licenc: GNU GPL
*/

class Diagonal {
    aSide?: HTMLInputElement | null
    bSide?: HTMLInputElement | null
    diagonal?: HTMLInputElement | null
    calcButton?: HTMLInputElement | null

    constructor() {
        this.bindHTML()
        this.buttonClick()
    }

    bindHTML() {
        this.aSide = document.querySelector("#aSide")
        this.bSide = document.querySelector("#bSide")
        this.diagonal = document.querySelector("#diagonal")
        this.calcButton = document.querySelector("#calcButton")
    }

    buttonClick() {
        this.calcButton?.addEventListener("click", () => {
            this.startCalc()
        })
    }

    startCalc() {
        const a = Number(this.aSide?.value)
        const b = Number(this.bSide?.value) 
        const diagonalOut = this.calcDiagonal(a, b)
        this.diagonal!.value = String(diagonalOut)
    }

    calcDiagonal(a:number , b:number):number {
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
    }
}

new Diagonal()