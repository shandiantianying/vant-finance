<template>
 <div>
    <!--顶部导航-->
    <div class="top-nav">
      <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" class="head-img" fit="cover"></van-image>
      <div>愤怒的小猫</div>
      <div class="top-right">
        <van-icon name="envelop-o"  size="28px" style="margin-right: 6px"/>
        <van-icon name="setting-o" size="28px"/>
      </div>
    </div>
    <!--下部内容-->
    <div class="nav-con">
      <div class="amount-con">
        <div class="red-txt amount-txt">15,564,589,744.63</div>
        <div class="light-txt amount-ins">资产总额(元)></div>
      </div>
      <!--代收收益-->
      <van-row class="receive-all">
        <van-col span="12">
          <div>567,875,565.59</div>
          <div class="light-txt receive-ins">累计投资</div>
        </van-col>
        <van-col span="12" class="receive-right">
          <div>67,875,56</div>
          <div class="light-txt receive-ins">累计赚取</div>
        </van-col>
      </van-row>
      <!--我的余额-->
      <div class="remain-con">
        <div>
          <div class="red-txt avail-amount">6850.65</div>
          <div class="light-txt avail-ins">可用余额(元)</div>
        </div>
        <div class="remain-right">
          <div class="remain-draw">提现</div>
          <div class="remain-divi"></div>
          <van-button type="danger" round size="small" class="remain-charge">充值</van-button>
        </div>
      </div>
      <!--下方应用入口-->
      <van-row class="app-con">
        <van-col span="8" v-for="(it,idx) in bottomApps" :key="idx" class="app-item click-box">
          <van-image v-if="it.flag" :src="setImg('assets/img/mine/'+it.flag)" class="flag-icon"></van-image>
          <div>
            <van-image :src="setImg('assets/img/mine/'+it.icon)" class="app-icon"></van-image>
            <div class="app-text light-txt">{{it.title}}</div>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
    <!--下方应用入口-->
    <!-- <van-row class="app-con">
      <van-col span="8" v-for="(it,idx) in bottomApps" :key="idx" class="app-item click-box">
        <van-image v-if="it.flag" :src="setImg('assets/img/mine/'+it.flag)" class="flag-icon"></van-image>
        <div>
          <van-image :src="setImg('assets/img/mine/'+it.icon)" class="app-icon"></van-image>
          <div class="app-text light-txt">{{it.title}}</div>
        </div>
      </van-col> -->

</template>
<script>
export default {
  name: "TabMine",
  data() {
    return {
      bottomApps: [
        { icon: "mine_app_icon3.png", flag: "", title: "我的投资" },
        { icon: "mine_app_icon8.png", flag: "", title: "回款日历" },
        { icon: "mine_app_icon2.png", flag: "", title: "投资设置" },
        {
          icon: "mine_app_icon6.png",
          flag: "mine_app_flag2.png",
          title: "卡券包"
        },
        { icon: "mine_app_icon9.png", flag: "", title: "积分" },
        {
          icon: "mine_app_icon5.png",
          flag: "mine_app_flag1.png",
          title: "邀请好友"
        },
        { icon: "mine_app_icon4.png", flag: "", title: "我要借款" },
        { icon: "mine_app_icon7.png", flag: "", title: "关于我们" },
        { icon: "mine_app_icon1.png", flag: "", title: "联系客服" }
      ]
    };
  },
  methods: {
    setImg(v) {
      return require("../../../" + v);
    }
  }
};
</script>
<style scoped>
.app-con {
  margin: 12px 0; 
}
.app-item {
  border: 1px solid #f7f7f7;
  text-align: center;
  position: relative;
  padding: 24px 0;
}
.flag-icon {
  position: absolute;
  right: 0;
  top: 0;
  width: 36px;
  height: 36px;
}

.app-text {
  font-size: 14px;
}
.app-icon {
  width: 36px;
  height: 36px;
}
.remain-con {
  margin-top: 12px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 14px;
}
.avail-amount {
  font-size: 20px;
}
.avail-ins {
  margin-top: 4px;
  font-size: 14px;
}

.remain-right {
  display: flex;
  align-items: center;
  font-size: 16px;
}

.remain-divi {
  width: 1px;
  height: 24px;
  margin: 0 18px;
  background-color: #cccccc;
}
.remain-charge {
  height: 24px;
  line-height: 21px;
}
.receive-all {
  text-align: center;
  margin-top: 12px;
  background-color: white;
  padding: 16px;
}

.receive-right {
  border-left: 1px solid #cccccc;
}
.receive-ins {
  font-size: 14px;
  margin-top: 6px;
}
.amount-con {
  width: 100%;
  background-color: white;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 20px;
}
.amount-ins {
  font-size: 14px;
  margin-top: 10px;
}
.amount-txt {
  font-size: 28px;
}

.top-nav {
  background-color: white;
  position: fixed;
  height: 50px;
  z-index: 10;
  border-bottom: 1px solid #f7f7f7;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top-right {
  margin-right: 16px;
}
.head-img {
  width: 30px;
  height: 30px;
  border-radius: 40px;
  overflow: hidden;
  margin-left: 16px;
}
</style>
