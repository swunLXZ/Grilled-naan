// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class _04cn extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        cc.director.getCollisionManager().enabled = true //开启碰撞检测
    }
    onCollisionStay(other){
        this.node.getChildByName("yan4").active = false;
        this.node.getChildByName("wyan4").active = false;
        if(other.getComponent("bingCN").out>6 ){
            this.node.getChildByName("yan4").active = true;
        }
        else{
            this.node.getChildByName("wyan4").active = true;
        }
    }
    onCollisionExit(other){
        this.node.getChildByName("yan4").active = false;
        this.node.getChildByName("wyan4").active = false;
        
    }

    // update (dt) {}
}
