var Mixin = {
	
	/**
	 * Constructor...
	 */
	init : function (){
		
		var url = $(document).attr("URL");
		if (url) {
			
			Model.parseParams(url);
			
			IPlayer.init(Model.videoSource, Model.permalinkId);	
		}
	},
	
	//--------------------------------------------------------------------------------------------
	// IPlayer Event handlers
	//--------------------------------------------------------------------------------------------
	onIPlayerReadyCallback : function () {
		
		Service.login(source, uid, nickname, thumbnail, fbid);
	},
	
	onIPlayerErrorCallback : function (info) {
		
	}
};
