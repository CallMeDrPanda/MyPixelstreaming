function onParagonLoad() {
	// styleAdditional = grabStyle;
	inputOptions.controlScheme = ControlSchemeType.HoveringMouse;
	inputOptions.fakeMouseWithTouches = true;

	console.log(inputOptions.controlScheme);

	if (document.addEventListener)
	{
	    document.addEventListener('webkitfullscreenchange', onFullscreenChange, false);
	    document.addEventListener('mozfullscreenchange', onFullscreenChange, false);
	    document.addEventListener('fullscreenchange', onFullscreenChange, false);
	    document.addEventListener('MSFullscreenChange', onFullscreenChange, false);
	}

	let fullscreenCheck = document.getElementById('ck-fullscreen');
	if(fullscreenCheck){
		fullscreenCheck.onclick = function(){
			if (!isFullscreen) {
				enterFullscreen();
			} else {
				exitFullscreen();
			}
		};
	}

	// When the data channel is connected we want to ask UE4 if 4K is supported.
	onDataChannelConnected = function() { emitUIInteraction("4K"); };
	addResponseEventListener("handle_responses", myHandleResponseFunction);
}

function showinputstat(){
	console.log(inputOptions.controlScheme);
}