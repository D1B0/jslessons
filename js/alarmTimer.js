


let audio

export function sound() {
    audio = new Audio(); // Создаём новый элемент Audio
    audio.src = './Jim.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}

export function soundStop(){
    audio.pause()
}