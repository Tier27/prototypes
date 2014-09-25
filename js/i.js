function I(name) {
    this.name = name;
    this.am = new Am();
    this.my = new My();
    this.have = new Have(this);
    my = this.my;
}

I.prototype.have = function(noun) {
    this.my.things.push(noun); 
    return this;
}
 
function Am(atts) {
    if($.isArray(atts)){
        this.atts = atts;
    } else {
        this.atts = new Array();
    }
}
 
Am.prototype._ = function(attribute) {
    this.atts.push(attribute);
    return this.atts;
}

Am.prototype.not = function(attribute) {
    var index = this.atts.indexOf(attribute);
    if( index > -1 ) {
        this.atts.splice(index, 1);
    }
}

Am.prototype.what = function() {
    return this.atts;
}

