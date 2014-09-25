function Have(i) {
    this.i = i;
}

Have.prototype.a = function(noun) {
    this.i.my.things.push(noun); 
    return this.i.my.things;
}

Have.prototype.an = Have.prototype.a;
 
