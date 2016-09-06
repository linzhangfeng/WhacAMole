cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        mouse:{
            default :null,
            type: cc.Node,
        }
    },

    // use this for initialization
    onLoad: function () {
        var scale = this.mouse.getScale();
        var action1 = cc.scaleTo(scale*1.0,scale*1.2);
        var action2 = cc.scaleTo(scale*1.0,scale*1.0);
        var action = cc.repeatForever(cc.sequence(action1,action2));
        console.log("mouse="+this.mouse);
        console.log("getComponent="+this.mouse.getComponent(cc.Sprite));
        this.mouse.runAction(action);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
