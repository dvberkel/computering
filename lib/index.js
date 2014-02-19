var Readable = require('stream').Readable;
var util = require('util');
util.inherits(LiveCoder, Readable);

function LiveCoder(stream, options){
    Readable.call(this, options);
    this.stream = stream;
}
LiveCoder.prototype._read = function(){
}
LiveCoder.prototype.trigger = function(){
    this.push(this.stream.read(1));
}

module.exports = LiveCoder;
