<template>
  <div>
          <van-nav-bar left-arrow @click-left="_routerBack" title="C计划详情" fixed :z-index="10"></van-nav-bar>
              <div class="align-center bottom-txt">个人资产由银行托管保障安全</div>
  <!--底部选项-->
      <div class="top-mar-16">
        <van-cell-group>
          <van-cell title="计划详情" is-link size="large"></van-cell>
          <van-cell title="购买记录" is-link size="large"></van-cell>
          <van-cell title="常见问题" is-link size="large"></van-cell>
        </van-cell-group>
      </div>

      <!--底部按钮-->
      <van-button type="danger" class="bottom-btn">
        立即投标 <span class="btn-left">(剩余可投70万元)</span>
      </van-button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .bottom-btn {
    position: fixed;
    bottom: 0;
    width: 100%;
    border-radius: 0;
    font-size: 20px;
    height: 46px;
   
  }
   .btn-left {
      font-size: 14px;
    }
</style>