const music = document.querySelector('audio')
const shinji = document.querySelector('#shinji')
shinji.addEventListener('click', () => {
    if (music !== null) {
        if (music.paused) {
            music.play(); // 播放
            shinji.classList.remove('paused')
            shinji.classList.add('play')

        } else {
            music.pause(); // 暂停
            shinji.classList.remove('play')
            shinji.classList.add('paused')
        }
    }
})