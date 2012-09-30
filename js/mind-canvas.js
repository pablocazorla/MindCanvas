//Debbuger
if(!window.log){
	window.log = function (message) {
		try {
			console.log(message);
		} catch (exception) {
			return;
		}
	}
}



;(function(){
	var mc = function(id){this.init(id);}
	
	mc.prototype = {
		canvas : null,
		c : null,
		centerX :0,
		centerY :0,
		map : {
			nodes :[]
		},
		length : 0,
		nodeSelected : null,
		
		
		init : function(id){
			this.canvas = document.getElementById(id);
			this.c = this.canvas.getContext('2d');
			this.centerX = this.canvas.width/2;
			this.centerY = this.canvas.height/2;
			
			this.createNode().createNode({x:500,y:400}).render();
			
			return this;
		},
		createNode : function(custom){
			var newNode = {
				x : this.centerX,
				y : this.centerY,
				w : 160,
				h : 50,
				borderRadius : 10,
				style : {
					fillStyle : '#FED',
					strokeStyle : '#666'
				},
				text : 'Node'
			}
			newNode = this.utils.extend(newNode,custom);
			this.map.nodes.push(newNode);
			this.length++;
			return this;
		},
		render : function(){
			for(var i = 0;i < this.length;i++){
				var node = this.map.nodes[i];
				
				this.c.fillStyle = node.style.fillStyle;
				this.c.strokeStyle = node.style.strokeStyle;		
				
				this.c.beginPath();
				this.c.moveTo(node.x-0.5*node.w,node.y-0.5*node.h);
				this.c.lineTo(node.x+0.5*node.w,node.y-0.5*node.h);
				this.c.lineTo(node.x+0.5*node.w,node.y+0.5*node.h);
				this.c.lineTo(node.x-0.5*node.w,node.y+0.5*node.h);
				this.c.lineTo(node.x-0.5*node.w,node.y-0.5*node.h);
				this.c.fill();
				this.c.stroke();
				
				this.c.closePath();
			}
			return this;
		},
		
		//Events
		
		onHit : function(element,callback){
			
			/*
			if(mouseX > xmin && mouseX < xmax && mouseY > ymin && mouseY < ymax){
				return true;
			}else{
				return false;
			};
			*/
	},
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		utils : {
			extend : function(destination, source) {
				for (var property in source) {
					if (source[property] && source[property].constructor && source[property].constructor === Object) {
						destination[property] = destination[property] || {};
						arguments.callee(destination[property], source[property]);
					}else{
						destination[property] = source[property];
					};
				};
				return destination;
			},
			mouse : function(event){
				
				var xScroll = 0, yScroll = 0;
				//Get Scroll
			    if( typeof( window.pageYOffset ) == 'number' ) {
			        //Netscape compliant
			        yScrollScroll = window.pageYOffset;
			        x = window.pageXOffset;
			    } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
			        //DOM compliant
			        yScroll = document.body.scrollTop;
			        xScroll = document.body.scrollLeft;
			    } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
			        //IE6 standards compliant mode
			        yScroll = document.documentElement.scrollTop;
			        xScroll = document.documentElement.scrollLeft;
			    }
			    
			    this.x = event.clientX-canvas.offsetLeft + xScroll;
				this.y = event.clientY-canvas.offsetTop + yScroll;
			}
		}
	};
	
	if(!window.mindCanvas){
		window.mindCanvas = function(id){
			return new mc(id);
		}
	}
})();

