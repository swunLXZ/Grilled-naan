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
export default class _01cn extends cc.Component {

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
        this.node.getChildByName("yan1").active = false;
        this.node.getChildByName("wyan1").active = false;

        /*if(other.getComponent("bingCN").in>6 && other.getComponent("bingCN").flag == 0){
            this.node.getChildByName("yan1").active = true;
        }*/
        /*else*/                             /*&& other.getComponent("bingCN").flag == 1 */
        if(other.getComponent("bingCN").out>6 ){
            this.node.getChildByName("yan1").active = true;
        }
        else{
            this.node.getChildByName("wyan1").active = true;
        }
    }
    onCollisionExit(other){
        this.node.getChildByName("yan1").active = false;
        this.node.getChildByName("wyan1").active = false;
    }

    // update (dt) {}
}
