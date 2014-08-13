/**
 * Created by Administrator on 14-2-16.
 */
var PipeLine = cc.Sprite.extend({
    score:false,
    ctor:function(direction){
        this._super();
        this.init(direction);
    },
    init:function(direction){
        var frame= cc.spriteFrameCache;
        var spriteName = "holdback1.png";
        var pipe = frame.getSpriteFrame(spriteName);
        this.initWithSpriteFrame(pipe);
        if(direction == 2) this.setFlippedY(true);
        this.setAnchorPoint(cc.p(0,0));
    },
    setScored:function(){
        this.score = true;
    },
    isScore:function(){
        return this.score;
    }
});
PipeLine.create = function(direction){
    return new PipeLine(direction);
}