var Service = {
	
	SERVICE_URL 	: "http://service.qlipso.com/Qlipso.WCFServices/",
	SERVICE_SSL_URL : "http://service.qlipso.com/Qlipso.WCFServices/",
	
	//--------------------------------------------------------------------------------------------------------
	// Login
	//--------------------------------------------------------------------------------------------------------
	
	login : function (source, uid, nickname, thumbnail, fbid) {
		
		if (iplayer){
			alert("ok!");
		}
		else {alert("not ok :(");}

//		var data = "<login>" +
//						"<source>{0}</source>" +
//						"<externalUserID>{1}</externalUserID>" +
//						"<accountDomain>{2}</accountDomain>" +
//						"<nickName>{3}</nickName>" +
//						"<externalThumbnail>{4}</externalThumbnail>" +
//						"<FBID>{5}</FBID>" +
//						"<comments/>" +
//					'</login>';
		
		var jsonData = {"source":source, "externaluserid":uid, "nickname":nickname,"thumbnail":thumbnail, "fbid":fbid};
		
		/*$.ajax({
				type		: 'POST',
				dataType	: 'jsonp',
				data		: jsonData,
				jsonp		: 'jsonCallback',
				url			: SERVICE_SSL_URL+"LoginService.svc/login",
				success		: this.onLogin,
				error		: function (jqXHR, textStatus, errorThrown) {
					alert("error");
				}
			});*/
	},
	
	onLogin : function (data){
		//TODO: parse data
		//TODO: make sure that result is success
		
		// save user data
		userID = "124";
		
		// invoke get chunck call
	},
	
	
	//--------------------------------------------------------------------------------------------------------
	// GetChunk 
	//--------------------------------------------------------------------------------------------------------
	getchunk : function (culture, chunkId, chunkSize, startTime,  permalinkID, videoLength, videoSource, qToken) {
		var data = 	"<getChunk>" +
						"<culture>{0}</culture>" +
						"<startTime>{1}</startTime>" +
						"<permalinkId>{2}</permalinkId>" +
						"<length>{3}</length>"+
						"<videoSource>{4}</videoSource>" +
						"<segmentCountAvatar>{5}</segmentCountAvatar>" +
						"<segmentDisplayTimespan>{6}</segmentDisplayTimespan>" +
						"<qToken>{7}</qToken>" +
						"<qPubID>{8}</qPubID>" +
						"<chunkID>{9}</chunkID>" +
						"<chunkSize>{10}</chunkSize>" +
					"</getChunk>";
	},
}

function jsonCallback(data) {
	alert("jsonCallback");
}

/*
	private static const LOGIN_FORMATED_STRING:String = 				'<login>' +
																			'<source>{0}</source>' +
																			'<externalUserID>{1}</externalUserID>' +
																			'<accountDomain>{2}</accountDomain>' +
																			'<nickName>{3}</nickName>' +
																			'<externalThumbnail>{4}</externalThumbnail>' +
																			'<FBID>{5}</FBID>' +
																			'<comments>{6}</comments>' +
																		'</login>';
																		
																		<login> <source>veoh</source> <externalUserID/> <accountDomain>veoh.com</accountDomain> <nickName>guest</nickName> <externalThumbnail>null</externalThumbnail> <FBID>null</FBID> <comments/> </login>
*/