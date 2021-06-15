const message = document.querySelector('.message')


export default function renderError(text){
   message.textContent = text
}

export function resetMessage(){
    message.textContent = ''
}

export function renderDiff(diff){
    message.innerHTML = `<span>
Года:${Math.abs(diff.years)} , месяца:${Math.abs(diff.months)} , дни:${Math.abs(diff.days)}
</span>`
}

