const video = document.getElementById("video");
const button = document.getElementById("btn");

//prompt to selected media stream, pass to video element, play
async function selectMediaStream() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		video.srcObject = mediaStream;
		video.onloadedmetadata = () => {
			video.play();
		};
	} catch (error) {
		console.log("mediaStream error printed: ", error);
	}
}

if ("pictureInPictureEnabled" in document) {
	button.disabled = false;
	button.addEventListener("click", async () => {
		button.disabled = true;
		// await selectMediaStream();
		await video.requestPictureInPicture().catch((error) => console.log(error));

		button.disabled = false;
	});
}

selectMediaStream();
