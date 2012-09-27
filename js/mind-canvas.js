;(function(){
	var mc = function(id){this.init(id);}
	
	mc.prototype = {
		
	};
	
	if(!window.mindCanvas){
		window.mindCanvas = function(id){
			return new mc(id);
		}
	}
})();

