mycomponent.loadBundle("nbezv56f",["exports"],function(e){var n=window.mycomponent.h,o=function(){function e(){this.colors=["red","green","blue"]}return e.prototype.pickColor=function(e){this._value=e,this.change.emit(e)},e.prototype.onValueChange=function(e){this._value=e},e.prototype.componentDidLoad=function(){this._value=this.value},e.prototype.render=function(){var e=this,o=this.colors.map(function(o){return n("div",{class:e._value===o?"color-box selected":"color-box",style:{background:o},onClick:e.pickColor.bind(e,o)},o)});return n("div",null,o)},Object.defineProperty(e,"is",{get:function(){return"my-color-picker"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{_value:{state:!0},value:{type:String,attr:"value",watchCallbacks:["onValueChange"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".color-box{width:300px;border:1px solid #000;padding:25px;margin:25px;border-radius:50%}.color-box.selected{-webkit-box-shadow:10px 10px grey;box-shadow:10px 10px grey}"},enumerable:!0,configurable:!0}),e}();e.MyColorPicker=o,Object.defineProperty(e,"__esModule",{value:!0})});