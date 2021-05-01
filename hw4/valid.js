"use strict"
document.querySelector("#validation")

    .addEventListener("click", event => {
        if (event.target.className === 'validation__button') {
            submitButton()
        }
    })
function submitButton() {
    let nameReg = document.querySelector(".validation__inputname")

    let nameRegExp = /\D[a-zA-Z]\D/g.test(nameReg.value)
    if (nameRegExp) {
        nameReg.style.cssText = "border : 1px solid black; color: black"
        document.querySelector(".validation__errorname").style.cssText = "display: none"
    } else {
        nameReg.style.cssText = "border : 3px solid red; color: black"
        document.querySelector(".validation__errorname").style.cssText = "display:flex;color:red;justify-content : center"
    }
    let mailReg = document.querySelector(".validation__inputmail")

    let mailRegExp = /^[a-zA-Z.-]+@[a-zA-Z]+\.[a-zA-Z]+$/g.test(mailReg.value)
    if (mailRegExp) {
        mailReg.style.cssText = "border : 1px solid black; color: black"
        document.querySelector(".validation__errormail").style.cssText = "display: none"
    } else {
        mailReg.style.cssText = "border : 3px solid red; color: black"
        document.querySelector(".validation__errormail").style.cssText = "display:flex;color:red;justify-content : center"
    }
    let telReg = document.querySelector(".validation__inputtel")

    let telRegExp = /\+7\(\d{3}\)\d{3}-\d{4}$/ig.test(telReg.value)

    if (telRegExp) {
        telReg.style.cssText = "border : 1px solid black; color: black"
        document.querySelector(".validation__errortel").style.cssText = "display: none"
    } else {
        telReg.style.cssText = "border : 3px solid red; color: black"
        document.querySelector(".validation__errortel").style.cssText = "display:flex;color:red;justify-content : center"
    }

}
