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
export default class bingCN extends cc.Component {

   @property([cc.SpriteFrame])
   pag1 : cc.SpriteFrame[] = [];

   @property([cc.SpriteFrame])
   pag2 : cc.SpriteFrame[] = [];

   public flag = 0;//持续烤饼标记

    //private in = 0;//里面
    public out = 0;//外面

   public h = false;//是否糊了；

   public p = 0;//放回盘子
   

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    }

    start () {

        //开启触摸监听
        this.node.on(cc.Node.EventType.TOUCH_MOVE,(event)=>{
            this.node.setPosition(event.getLocation());
        })

         cc.director.getCollisionManager().enabled = true //开启碰撞检测

    }

    onCollisionStay(other){//持续碰撞
        if(other.tag == 1){
            this.flag = 1;
            cc.log(this.flag);
        }
        else{
            this.flag = 0;
            //cc.log(this.flag);
        }    
    }


    onCollisionEnter(other){
        //解决饼之间的碰撞
        /*if(other.tag == 0){
            cc.director.getCollisionManager().enabled = false;
            setTimeout(function(){
                cc.director.getCollisionManager().enabled = true;
            },100);
        }
        else{
            this.flag = 0;
        }*/
        if(other.tag == 1){
            cc.log("碰撞发生");
            //修改图片
            this.schedule(function(){
                /*if(this.flag == 0 && this.in<8){
                    this.in++;
                    if(this.in>6){
                        this.h = true;
                    }
                }*/
                if(this.flag == 1 && this.out<8){
                    this.node.getComponent(cc.Sprite).spriteFrame = this.pag1[this.out];
                    this.out++;
                    if(this.out>6){
                        this.h = true;
                    }
                }   
            },1)

            //开启点击事件交换正反面
            /*this.node.on(cc.Node.EventType.TOUCH_END,(event)=>{
                if(this.flag == 0){
                    this.node.getComponent(cc.Sprite).spriteFrame = this.pag1[this.in];
                    this.flag = 1;
                    cc.log("背面")
                }
                else{
                    this.node.getComponent(cc.Sprite).spriteFrame = this.pag1[this.out];
                    this.flag = 0;
                    cc.log("正面");
                }
            })*/
        }
       

    }
    onCollisionExit(other){//碰撞结束将flag射程0
        if(other.tag == 1){
            this.flag = 0;
        }
    }

    //碰撞离开关闭点击事件
    /*onCollisionExit(other){
        this.node.off(cc.Node.EventType.TOUCH_END);
    }*/

    update (dt) {

        if(this.node.x>=380 && this.node.x<=480 && this.node.y>= 80 && this.node.y<=200 && this.p == 0){
            this.p = 1;
            this.node.off(cc.Node.EventType.TOUCH_MOVE);
            this.node.setPosition(431,132);
            cc.find("bg").getComponent("bg").sum++;

            //修改字体
        cc.find("label").getComponent(cc.Label).string = "剩余个数:"+ (5-cc.find("bg").getComponent("bg").sum) ;
        }
        //01位置
        /*if(this.node.x>=160 && this.node.x<=180 && this.node.y>=515 && this.node.y<=540 && cc.find("01").getComponent("stopB01").tag == 0){
            this.node.off(cc.Node.EventType.TOUCH_MOVE);
            this.node.setPosition(171,527);
            cc.find("01").getComponent("stopB01").tag++;
            this.node.on(cc.Node.EventType.TOUCH_START,(event)=>{
                cc.log("9");
            })
            
        }
        else if(this.node.x>=190 && this.node.x<=205 && this.node.y>=400 && this.node.y<=415 && cc.find("02").getComponent("stopB02").tag == 0){
            this.node.off(cc.Node.EventType.TOUCH_MOVE);
            this.node.setPosition(197,408);
            cc.find("02").getComponent("stopB02").tag++;
        }
        else if(this.node.x>=315 && this.node.x<=330 && this.node.y>=395 && this.node.y<=410 && cc.find("03").getComponent("stopB03").tag == 0){
            this.node.off(cc.Node.EventType.TOUCH_MOVE);
            this.node.setPosition(323,401);
            cc.find("03").getComponent("stopB03").tag++;
        }
        else if(this.node.x>=360 && this.node.x<=370 && this.node.y>=503 && this.node.y<=523 && cc.find("04").getComponent("stopB04").tag == 0){
            this.node.off(cc.Node.EventType.TOUCH_MOVE);
            this.node.setPosition(369,513);
            cc.find("04").getComponent("stopB04").tag++;
        }
        else if(this.node.x>=265 && this.node.x<=285 && this.node.y>=590 && this.node.y<=614 && cc.find("05").getComponent("stopB05").tag == 0){
            this.node.off(cc.Node.EventType.TOUCH_MOVE);
            this.node.setPosition(275,600);
            cc.find("05").getComponent("stopB05").tag++;
        }*/

    }
    
}
