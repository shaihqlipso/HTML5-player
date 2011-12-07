function CommentRenderer() {
	
	this.IMAGE_HEIGHT		= 50;
	this.IMAGE_WIDTH 		= 50;
	this.IMAGE_PADDING 		= 2;
	this.HORIZONTAL_GAP 	= 10;
	
	this.data = null;
	
	this.isImageLoaded 		= false;
	this.imageObj 			= new Image();
	this.imageObj.width 	= this.IMAGE_WIDTH;
	this.imageObj.height 	= this.IMAGE_HEIGHT;
	this.imageObj.onload 	= function(){
		isImageLoaded = true;
    };
	
    /**
     * set the data for this renderer
     * @param data 
     */
	this.setData = function (data) {
		if (data) {
			this.data = data;
			// initial asset loading..
			this.imageObj.src = this.data.thumbnail;
		}
	};
	
    /**
     * Draw this renderer at a given position.
     * @param x
     * @param y
     */
	this.draw = function (x,y) {
		
		// can't draw without any data...
		if (this.data) {
			
			// get reference to the comments canvas
			var canvas = document.getElementById("commentsCanvas");
            var context = canvas.getContext("2d");
            
            // draw image's bg
//            context.beginPath();
            context.rect(x, y, this.IMAGE_WIDTH+2*(this.IMAGE_PADDING), this.IMAGE_HEIGHT+2*(this.IMAGE_PADDING));
            context.fillStyle = "#8ED6FF";
            context.fill();
            
            // draw user thumbnail if loaded.
            if (this.isImageLoaded) {
            	context.drawImage(this.imageObj, x+this.IMAGE_PADDING, y+this.IMAGE_PADDING);
            }
            
            // add text
            context.font = "40pt Arial";
            context.fillStyle = this.data.color; 
            context.fillText(this.data.annotation, x+this.IMAGE_WIDTH+this.HORIZONTAL_GAP, y);
		}
	};
}