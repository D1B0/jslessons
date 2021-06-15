import {visibilityType} from "./visiblility.js";
import './form.js'
import './timer.js'


document.getElementById('DateButton')
    .addEventListener('click', event => {
            visibilityType('date-12')
            if (document.getElementById('time1').classList.contains('hidden')) {
            } else {
                visibilityType('time1')
            }
        }
    )
document.getElementById('Timer')
    .addEventListener("click", event => {

        visibilityType('time1')
        if (document.getElementById('date-12').classList.contains('hidden')) {
        } else {
            visibilityType('date-12')
        }
    })


function loadScript(url, callback) {

    const element = document.createElement("script");
    element.type = "module";
    element.id = url
    element.src = url;
    element.onload = callback;
    if (document.getElementById(`${url}`) === null) {
        document.body.appendChild(element);
    } else {
        return false
    }


}


