var State = cc.Enum({
    None    : -1,
    mouse_daiji   : -1,
    mouse_dianji  : -1,
});
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
        _state: {
            default:State.None,
            type: State,
        },
        state:{
            get: function () {
                console.log("state===>get");
                return this._state;
            },
            set:function(state){
                console.log("state===>set="+state,State[state]);

                this._state = state;
                if( this._state != State.None){
                    this.anim.stop();
                    var ainmName = State[this._state];
                    this.anim.play( ainmName);
                }
            },
            type:State,
        }
    },

    // use this for initialization
    onLoad: function () {
        this.anim = this.getComponent(cc.Animation);
        this.mouse = this.getComponent(cc.Sprite);

        this.state = State.mouse_daiji;

        console.log("State=",State.None,State.DaiJi,State.DianJi);
        console.log("play animation");

        this.initClickListener();
    },

    initTouchListener:function(){
        cc.eventManager.addListener({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan:this.onTouchBegan.bind(this)
        },this.node);
    },
    initClickListener: function () {
        this.node.on("touchstart", function (event) {
            this.onClickStart();
        }.bind(this))
    },
    onClickStart:function(){
        console.log("onClickStart");
        this.state = State.mouse_dianji;
    },
    onTouchBegan: function (touch,event) {
        this.state = State.mouse_dianji;
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
