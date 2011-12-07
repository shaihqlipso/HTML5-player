var Model = {

	params : new Array(),

	// --------------------------------------------------------------------------------------------------
	// User data
	// --------------------------------------------------------------------------------------------------
	thumbnail : null,
	euid : null,
	nickname : "guest",
	userID : null,
	userColor : 0x000000,
	source : "veoh",
	fbid : null,
	type : "guest",
	qToken : '',
	isVeohLoggedIn : false,
	isFacebookLoggedIn : false,

	// --------------------------------------------------------------------------------------------------
	// Video data
	// --------------------------------------------------------------------------------------------------
	permalinkId : null,
	videoSource : null,
	duration : -1,
	chunkCount : -1,

	parseParams : function(url) {
		// parse location string:
		var urlparams = url.substring(url.indexOf('?') + 1, url.length);
		if (urlparams != null) {

			var rawparams = urlparams.split('&');

			if (rawparams != null) {

				for ( var i = 0; i < rawparams.length; i++) {
					var pair = rawparams[i].split("=");
					Model.params[pair[0]] = pair[1];
				}

				Model.videoSource 	= Model.params["src"];
				Model.permalinkId 	= Model.params["permalinkid"];
				Model.euid 			= Model.params["euid"];
				Model.fbid 			= Model.params["fbid"];
				Model.thumbnail 	= Model.params["thumbnail"];
				Model.nickname 		= Model.params["nickname"];
			}
		}
	}
};