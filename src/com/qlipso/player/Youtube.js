var Youtube = {

	_player : null,
	
	init : function(ytp) {
		// register event players event.
		if (ytp != null) {
			
			Youtube._player = ytp;
			Youtube._player.addEventListener("onReady", 		Youtube.onReady);
			Youtube._player.addEventListener("onStateChange", 	Youtube.onStateChange);
			Youtube._player.addEventListener("onError", 		Youtube.onError);
			
			return Youtube;
		}
	},

	onReady : function(event) {
		IPlayer.onReadyCallback();
	},

	onStateChange : function(event) {
		/*
		 * -1 (unstarted) 
		 * 0 (ended) 
		 * 1 (playing) 
		 * 2 (paused) 
		 * 3 (buffering) 
		 * 5 (video cued).
		 */
		
		IPlayer.onStateChangeCallback();
	},

	onError : function(event) {
		
		IPlayer.onErrorCallback();
	},
	
	play : function () {
		if (_player) {
			_player.playVideo();
		}
	},
	
	pause : function () {
		if (_player) {
			_player.pauseVideo();
		}
	},
	
	seek : function (seconds){
		if (_player) {
			_player.seekTo(seconds, true);
		}
	},
	
	/*
	 *  scale 0-100
	 */
	setVolume : function (volume){
		if (_player) {
			_player.setVolume(volume);
		}
	},
	
	
	getPlayerState : function (){
		if (_player) {
			_player.getPlayerState();
		}
		else {
			return -1;
		}
	},
	
	getCurrentTime : function (){
		if (_player) {
			_player.getCurrentTime();
		}
		else {
			return -1;
		}
	},
	
	getDuration : function (){
		if (_player) {
			_player.getDuration();
		}
		else {
			return -1;
		}
	},
};
