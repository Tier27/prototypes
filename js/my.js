function My(att) {
    this.att = att;
    this.things = new Array();
}

function _my(att) {
    if( typeof(_my) == 'undefined' )
        my = new My();
    my.att = att;
    return my;
}

My.prototype.is = function(str) {
    this[this.att] = str;
    return this;
}

My.prototype.are = function(arr) {
    this[this.att] = arr; 
    return this;
}

