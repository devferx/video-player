const $playButton = document.getElementById('play')
const $pauseButton = document.getElementById('pause')
const $forwardButton = document.getElementById('forward')
const $backButton = document.getElementById('back')

const $progressBar = document.getElementById('progress')

const $video = document.getElementById('video')

$playButton.addEventListener('click', () => {
  $video.play()
  $playButton.classList.toggle('hidden')
  $pauseButton.classList.toggle('hidden')
})

$pauseButton.addEventListener('click', () => {
  $video.pause()
  $playButton.classList.toggle('hidden')
  $pauseButton.classList.toggle('hidden')
})

$forwardButton.addEventListener('click', () => {
  $video.currentTime += 3
})

$backButton.addEventListener('click', () => {
  $video.currentTime -= 3
})

$video.addEventListener('loadedmetadata', () => {
  $progressBar.max = $video.duration
})

$video.addEventListener('timeupdate', () => {
  $progressBar.value = $video.currentTime
})

$progressBar.addEventListener('change', () => {
  $video.currentTime = $progressBar.value
})
