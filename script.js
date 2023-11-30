/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const volumeSlider = ranges[0];
const speedSlider = ranges[1];
const replay10 =skipButtons[0];
const forward25 = skipButtons[1];

video.src = 'https://www.w3schools.com/html/movie.mp4'
progressBar.style.flex = 'none';
progressBar.style.flexBasis = 'none';
progressBar.style.width = '0%';


toggle.addEventListener("click", playPause);

video.addEventListener("timeupdate", progressChange);
video.addEventListener("ended", videoEnded);

volumeSlider.addEventListener("input", volumeChange);
speedSlider.addEventListener("input", rateChange);

replay10.addEventListener("click", skipPrevious);
forward25.addEventListener("click", skipNext);

function playPause (event) {
	// event is toggle button press
	// target is toggle button
	// alert(video.paused);
	if(video.paused) {
		// start playback and change to pause button
		video.play();
		toggle.innerText='❚ ❚';
	}
	else {
		// pause playback and change to play button
		video.pause();
		toggle.innerText='►';
	}
}

function progressChange (event) {
	let progressWidth = Math.floor((video.currentTime/video.duration) * 100);
	progressBar.style.width = `${progressWidth}%`;	
}
function videoEnded (event) {
	reset();
}
function reset() {
	progressBar.style.width = '0%';
	toggle.innerText = '►';
	
	speedSlider.value = 1;
	video.playbackRate = 1;
	
	volumeSlider.value = 1;
	video.volume = 1;
	
	video.load();
}

function volumeChange (event) {
	video.volume = event.target.value;	
}
function rateChange (event) {
	video.playbackRate = event.target.value;
}

function skipPrevious (event) {
	video.currentTime = Math.max(video.currentTime - 10, 0);
}
function skipNext (event) {
	video.currentTime = Math.min(video.currentTime + 25, video.duration-0.05);
}



