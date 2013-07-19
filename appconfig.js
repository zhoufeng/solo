/**
 *
 * @type {Object}
 */
exports.Config={
    /**
     * IsSandBox 1=沙箱开启 0=非沙箱(正式环境)
     */
    SanBox:0,
    /**
     * AppKey
     */
    AppKey:"21550872",
    /**
     * AppSecret
     */
    AppSecret:"e5a9b36b58a9a60905144fb624fe73ee",

    ContainerUrl:function(){
       if(this.SanBox===0)
           return "http://container.open.taobao.com/container?appkey="+this.AppKey;
        else
           return "http://container.api.tbsandbox.com/container?appkey="+this.AppKey ;
    },
    /**
     * 请求环境URL ，默认为沙箱环境地址
     * @return {*}
     * @constructor
     */
     RestUrl:function(){
         if(this.SanBox===0)
             return "http://gw.api.taobao.com/router/rest";
         else
             return "http://gw.api.tbsandbox.com/router/rest";
     }



};
