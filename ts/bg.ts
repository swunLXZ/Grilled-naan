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
export default class NewClass extends cc.Component {

    //结束标志
    public sum = 0;

    // onLoad () {}

    start () {

    }

    
    update (dt) {
        


        if(this.sum == 5){

            if(cc.find("bing1").getComponent("bingCN").h){
                cc.director.loadScene("hu");
            }
            else if(cc.find("bing2").getComponent("bingCN").h){
                cc.director.loadScene("hu");
            }
            else if(cc.find("bing3").getComponent("bingCN").h){
                cc.director.loadScene("hu");
            }
            else if(cc.find("bing4").getComponent("bingCN").h){
                cc.director.loadScene("hu");
            }
            else if(cc.find("bing5").getComponent("bingCN").h){
                cc.director.loadScene("hu");
            }
            else{
                cc.director.loadScene("good");
            }
            //糊了
            /*if(cc.find("bing1").getComponent("bingCN").in>7 || cc.find("bing1").getComponent("bingCN").out >7){
                cc.director.loadScene("hu");
            }
            else if(cc.find("bing2").getComponent("bingCN").in>7 || cc.find("bing2").getComponent("bingCN").out >7){
                cc.director.loadScene("hu");
            }
            else if(cc.find("bing3").getComponent("bingCN").in>7 || cc.find("bing3").getComponent("bingCN").out >7){
                cc.director.loadScene("hu");
            }
            else if(cc.find("bing4").getComponent("bingCN").in>7 || cc.find("bing4").getComponent("bingCN").out >7){
                cc.director.loadScene("hu");
            }
            else if(cc.find("bing5").getComponent("bingCN").in>7 || cc.find("bing5").getComponent("bingCN").out >7){
                cc.director.loadScene("hu");
            }
            //没胡
            else{
                cc.director.loadScene("good");
            }*/
        }

    }
}
