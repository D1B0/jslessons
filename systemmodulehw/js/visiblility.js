export function visibilityType(id){
    let visibleToken =document.getElementById(`${id}`)

    if (visibleToken.classList.contains('hidden')){
        visibleToken.classList.remove('hidden')
    }else{
        visibleToken.classList.add('hidden')
    }
}