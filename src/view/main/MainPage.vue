<template>
  <div class='MainPage'>
      <!--缓存的页面-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" class="main-router-view" v-keep-scroll-position>
      </router-view>
    </keep-alive>
    <!--不缓存的页面-->
    <router-view v-if="!$route.meta.keepAlive" class="main-router-view">
    </router-view>
       <!--下方的TabBar-->
    <van-tabbar v-model="tabBarSelect">
      <!--TabBar项目-->
      <van-tabbar-item v-for="(item, i) in tabItemList" :key="i" :to="item.to" replace>
        <div class="tab-txt">{{item.name}}</div>
        <img :src="getTabIconSrc(item, props.active)" slot="icon" slot-scope="props" class="icon-img"/>
     </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data(){
    return {
       tabBarSelect: 0,
        // Tab栏数据
        tabItemList: [
          {
            active: 'main_tab_3.png',
            normal: 'main_tab_2.png',
            name: '主页',
            to: "home"
          },
          {
            active: 'main_tab_5.png',
            normal: 'main_tab_4.png',
            name: '产品',
            to: "products"
          },
          {
            active: 'main_tab_7.png',
            normal: 'main_tab_6.png',
            name: '发现',
            to: "discover"
          },
          {
            active: 'main_tab_1.png',
            normal: 'main_tab_8.png',
            name: '我的',
            to: "mine"
          },
        ],
      };
    },
  computed: {
      // 获取图标资源
      getTabIconSrc() {
        return (item, active) => {
          let img = active ? item.active : item.normal;
         return require("../../assets/img/main/"+img);
        }
      },
    },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>
 .MainPage{
   width: 100%;
   height: 100%;
 }
</style>
