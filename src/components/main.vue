<style scoped>
@import "../assets/css/animate.css";
.main_box {
  width: 100%;
  height: 100%;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.layout-logo {
  width: 20%;
  height: 100%;
  border-radius: 3px;
  float: left;
  position: relative;
  display: flex;
}
.logo {
  margin: 10px 0;
  float: left;
}
.logo_title {
  color: white;
  line-height: 62px;
  font-size: 26px;
  margin-left: 2%;
}
.layout_titbtn {
  width: 20%;
  height: 100%;
  float: left;
}
.titleBtn {
  margin: 0 5px;
}
.ivu-breadcrumb {
  background: #f2f9fd;
  padding: 13px 0 13px 30px;
  border-bottom: solid 1px rgba(5, 151, 183, 0.7);
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
  height: calc(100%-64px);
}
.sider_box {
  height: calc(100%-64px);
  height: -moz-calc(100%-64px);
  height: -webkit-calc(100%-64px);
  height: -webkit-fill-available;
  width: 100%;
}
.sider_left {
  height: -webkit-fill-available;
  border-right: solid 1px rgba(5, 151, 183, 0.7);
}
.ivu-layout-header {
  background: url("../assets/bg.jpg") no-repeat 0 -1000px;
}
.ivu-menu-dark {
  background: transparent;
}
.ivu-menu-light {
  background: transparent;
}
.loginIp {
  color: white;
  line-height: 90px;
  text-align: right;
}
</style>
<template>
  <div class="main_box">
    <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo animated fadeInDown" v-show="flag">
              <Avatar
                class="logo"
                size="large"
                src="https://i.loli.net/2017/08/21/599a521472424.jpg"
              />
              <div class="logo_title">“雪亮工程”后台管理系统</div>
            </div>
            <!-- <div class="layout_titbtn">
              <Button type="success" class="titleBtn">
                <Icon type="home"></Icon>前台首页
              </Button>
              <Button type="info" class="titleBtn">
                <Icon type="wrench"></Icon>清除缓存
              </Button>
              <Button type="error" class="titleBtn">
                <Icon type="power"></Icon>退出登录
              </Button>
            </div> -->
            <div class="layout-nav">
              <div class="loginIp">{{loginIp}}</div>
            </div>
          </Menu>
        </Header>
        <Layout class="sider_box">
          <Sider hide-trigger :style="{background: '#f2f9fd'}" class="sider_left">
            <Menu active-name="1" theme="light" width="auto" :open-names="['1']">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>基本设置
                </template>
                <MenuItem
                  :name="i"
                  v-for="(item,i) in links"
                  @click.native="routername(item.text,item.route)"
                  :key="i"
                >{{item.text}}</MenuItem>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>内容管理
                </template>
                <MenuItem
                  v-for="(items,i) in links2"
                  :key="i"
                  :name="'2-'+i"
                  @click.native="routerlinks(items.text,items.route)"
                >{{items.text}}</MenuItem>
              </Submenu>
            </Menu>
          </Sider>
          <Layout>
            <Breadcrumb>
              <BreadcrumbItem to="/vmain">
                <Icon type="home"></Icon>首页
              </BreadcrumbItem>
              <BreadcrumbItem :to="fromPath">
                <Icon type></Icon>
                {{name}}
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Icon type></Icon>
                {{rouName}}
              </BreadcrumbItem>
            </Breadcrumb>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
              <router-view></router-view>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  </div>
</template>
 
<script>
import vdefult from "@/components/setup/defult";
import vinfo from "@/components/setup/info";
import vpass from "@/components/setup/pass";
import vsafety from "@/components/setup/safety";
import vcardefult from "@/components/subsetup/cardefult";
import vtableinfo from "@/components/tableview/tableinfo";
export default {
  name: "vmain",
  data() {
    return {
      loginIp: null,
      flag: true,
      name: "基本信息",
      rouName: null,  //三级导航
      pathName:null,  
      fromPath:null,  //二级导航
      links: [
        {
          text: "基本信息",
          route: "/vmain"
        },
        {
          text: "修改密码",
          route: "/vmain/vinfo"
        },
        {
          text: "网站安全",
          route: "/vmain/vpass"
        },
        {
          text: "数据备份",
          route: "/vmain/vsafety"
        }
      ],
      links2: [
        {
          text: "首页轮播",
          route: "/vmain/vcardefult"
        },
        {
          text: "栏目管理",
          route: ""
        },
        {
          text: "添加内容",
          route: ""
        },
        {
          text: "分类管理",
          route: ""
        },
        {
          text: "数据演示",
          route: "/vmain/vtableinfo"
        }
      ]
    };
  },
  methods: {
    textName() {
      console.log(this.$refs.nameText);
    },
    loginIP() {
      const cityCode = returnCitySN.cname;
      const cityIp = returnCitySN.cip;
      this.loginIp =
        "欢迎您，admin! 本次登录：" + cityCode + "  " + "IP" + cityIp;
    },
    routername(name, route) {
      this.name = name;
      this.$goRoute(route);
      this.rouName=null
      this.fromPath=route
    },
    routerlinks(name, route) {
      this.name = name;
      this.$goRoute(route)
      this.rouName=null
      this.fromPath=route
    }
  },
  mounted() {
    this.loginIP();
  },
  watch: {
    $route(to, from) {
      this.pathName=to.path
      if(to.path=='/vmain/vcardefult/vaddtext'){
           this.rouName=this.$route.query.name
           this.pathName=to.path
      }
    }
  },
  components: {
    vinfo: vinfo,
    vpass: vpass,
    vsafety: vsafety,
    vdefult: vdefult
  }
};
</script>