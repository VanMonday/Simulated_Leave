function Clock() {
    var date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.date = date.getDate();
    this.day = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()];
    this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    this.minute = date.getMinutes() < 10 ? "0" + (date.getMinutes() +55)%60: (date.getMinutes() +55)%60;
    this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
 
    this.toString = function() {
        return this.date + "日" + this.hour + "时" + this.minute + "分"; 
    };
	
	this.toy = function() {
        return this.date-1 + "日"; 
    };
	
	this.tot = function() {
        return this.date+1 + "日"; 
    };
	
	this.toto = function() {
        return this.date + "日"; 
    };
	
    this.toSimpleDate = function() {
        return this.year + "-" + this.month + "-" + this.date;
    };
    
    this.toDetailDate = function() {
        return this.year + "-" + this.month + "-" + this.date + " " + this.hour + ":" + this.minute + ":" + this.second;
    };
    
    this.display = function(ele) {
        var clock = new Clock();
        ele.innerHTML = clock.toString();
        window.setTimeout(function() {clock.display(ele);}, 1000);
    };
	this.disy = function(ele) {
        var clock = new Clock();
        ele.innerHTML = clock.toy();
        window.setTimeout(function() {clock.disy(ele);}, 1000);
    };
	this.dist = function(ele) {
        var clock = new Clock();
        ele.innerHTML = clock.tot();
        window.setTimeout(function() {clock.dist(ele);}, 1000);
    };
	this.distoday = function(ele) {
        var clock = new Clock();
        ele.innerHTML = clock.toto();
        window.setTimeout(function() {clock.distoday(ele);}, 1000);
    };
}
