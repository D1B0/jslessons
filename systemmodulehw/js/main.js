import {visibilityType} from "./visiblility.js";


document.getElementById('DateButton')
    .addEventListener('click', event =>{
        if (document.getElementById('js/timer.js') === null){
        }else{ document.getElementById('js/timer.js').remove()}
        visibilityType('date-12')
        if (document.getElementById('time1').classList.contains('hidden')){
        }else{
            visibilityType('time1')
        }
        loadScript('js/form.js')}
    )
document.getElementById('Timer')
    .addEventListener("click", event=>{
        if (document.getElementById('js/form.js') === null){
        }else{ document.getElementById('js/form.js').remove()}
        visibilityType('time1')
        if (document.getElementById('date-12').classList.contains('hidden')){
        }else{
            visibilityType('date-12')
        }
        loadScript('js/timer.js')})




function loadScript(url, callback) {

    const element = document.createElement("script");
    element.type = "module";
    element.id=url
    element.src = url;
    element.onload = callback;
    if (document.getElementById(`${url}`) ===null){
        document.body.appendChild(element);
    }else{return false}


}


