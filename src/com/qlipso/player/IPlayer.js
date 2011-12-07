var IPlayer = {
		
	player: null,
		
	/**
	 * Constructor... Parse current location string and extract video's
	 * permalinkid and player type.
	 * 
	 * @param location
	 */
	init : function(videoSource) {

		// create the right type of player
		switch (videoSource) {
		// case "vimeo": {
		// createVimeoPlayerInstance();
		// break;
		// }
		case "yt":
		default: {
			IPlayer.createYoutubePlayerInstance();
			break;
		}
		}
		return this;
	},

	/**
	 * Post player init process
	 */
	onIPlayerInstance : function(iplayerInstance) {
		// save reference to the current player
		player = iplayerInstance;
	},

	// ------------------------------------------------------------------------------
	// Youtube player init functions
	// ------------------------------------------------------------------------------
	createYoutubePlayerInstance : function() {

		var tag = document.createElement('script');
		tag.src = "http://www.youtube.com/player_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	},

	// ------------------------------------------------------------------------------
	// generic player event handlers
	// ------------------------------------------------------------------------------
	onReadyCallback : function(event) {
		Mixin.onIPlayerReadyCallback();
	},
	onStateChangeCallback : function(event) {

		CommentsRenderer.onPlayerStateChanged(player.getPlayerState());
		switch (event.state) {
			case "PLAYING":{
				playerPosIntervalHandler = setInterval(playerPosInterval, 500);
				break;
			}
			case "UNSTARTED":
			case "PAUSED":
			case "ENDED":{
				clearInterval(playerPosIntervalHandler);
				break;
			}
		}
		
	},
	onErrorCallback : function(event) {
		alert("onErrorCallback");
	},
	
	/**
	 * 
	 */
	playerPosInterval : function() {
		CommentsRenderer.setPlayerPos(IPlayer.player.getCurrentTime());
	},
	playerPosIntervalHandler : -1,
};


// ------------------------------------------------------------------------------
// Youtube player ready handler
// ------------------------------------------------------------------------------
function onYouTubePlayerAPIReady() {
	var ytp = new YT.Player('playerContainer', {
		height 		: '390',
		width 		: '640',
		videoId 	: Model.permalinkId,
		playerVars	: { 'autoplay': 1, 'controls': 1 },
	});

	IPlayer.onIPlayerInstance(Youtube.init(ytp));
}