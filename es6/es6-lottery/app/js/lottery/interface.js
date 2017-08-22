import $ from 'jquery'
/**
 * [self 创建计算模块]
 * @type {[type]}
 */

class Interface{
    /*
     * getOmit 获取遗漏数据
     * issue 期号
     */
    getOmit(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
              url: '/get/omit',
              data:{
                issue: iusse
              },
              dataType: 'json',
              success: function(res){
                self.setOmit(res.data);
                resolve.call(self,res);
              },
              error: function(err){
                 reject.call(err);
              }
            })
        })
    }
    /**
     * getOpenCode 获取开奖号码
     */
    getOpenCode(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url: '/get/opencode',
                data:{
                  issue: issue
                },
                dataType: 'json',
                success: function(res){
                    self.setOpenCode(res.data);
                    resolve.call(self,res);
                },
                error: function(res){
                  reject.call(err)
                }
            })
        })
    }

    /**
     * [getState 获取当前状态]
     * @param  {[type]} issue [当前期号]
     * @return {[type]}       [description]
     */

    getState(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
          $.ajax({
            url:'/get/state',
            data:{
              iusse: issue
            },
            dataType: 'json',
            success: function (res) {
              resolve.call(self,res)
            },
            error: function (er) {
              reject.call(err);
            }

          })
        })
    }
}

export default Interface
