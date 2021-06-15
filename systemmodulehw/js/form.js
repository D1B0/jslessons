
import {diffDate} from "./calc.js";
import addMessage,{resetMessage, renderDiff} from './common.js'
const form = document.getElementById('dateForm')
let message = document.querySelector('.message')
form.addEventListener('submit',(env)=> {
    env.preventDefault();
    resetMessage()

    const formdata = new FormData(env.target)
    const date1 = formdata.get('data1')
    console.log(date1)
    const date2 = formdata.get('data2')
    console.log(date2)

    if(!date1 || !date2){
        addMessage('ERROR')
    }else{
       const result = diffDate(date1,date2)
       renderDiff(result)
    }
})
