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
		map : [],
		length : 0,
		
		
		init : function(id){
			this.canvas = document.getElementById(id);
			this.c = this.canvas.getContext('2d');
			
			this.createNode().render();
			
			return this;
		},
		createNode : function(custom){
			var newNode = {
				x : 400,
				y : 300,
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
			this.map.push(newNode);
			this.length++;
			return this;
		},
		render : function(){
			for(var i = 0;i < this.length;i++){
				var node = this.map[i];
				
				this.c.fillStyle = node.style.fillStyle;
				this.c.strokeStyle = node.style.strokeStyle;
				
				this.c.translate(node.x,node.y);
				
				this.c.beginPath();
				this.c.moveTo(-0.5*node.w,-0.5*node.h);
				this.c.lineTo(0.5*node.w,-0.5*node.h);
				this.c.lineTo(0.5*node.w,0.5*node.h);
				this.c.lineTo(-0.5*node.w,0.5*node.h);
				this.c.lineTo(-0.5*node.w,-0.5*node.h);
				this.c.fill();
				this.c.stroke();
				
				this.c.closePath();
			}
			return this;
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
			}
		}
	};
	
	if(!window.mindCanvas){
		window.mindCanvas = function(id){
			return new mc(id);
		}
	}
})();

