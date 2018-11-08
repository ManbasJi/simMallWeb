<template>
  <el-container>
    <el-header>
     <!-- 顶部title -->
     <el-row style="margin-left: -30px;margin-right: -30px;line-height:35px;height: 35px;background: #333">
      <el-col :span="4">
      </el-col>
      <el-col :span="8">
        <font style="float:right;font-size: 14px;color:#fff">欢迎来到专爱商城! <span style="font-weight: bold;">Manbasji</span></font>
      </el-col>
      <el-col :span="8" style="float: right">
        <el-button type="text" style="text-decoration: underline;">登录</el-button>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
    <!-- 顶部搜索、logo -->
    <el-row style="line-height:160px;height: 160px;margin-left: -30px;margin-right: -30px;">
      <el-col :span="24">
       <div style="width:100%;height: 160px;line-height: 160px;text-align: center;">
        <img src="/static/logo.png" style="margin-bottom: -10px;">
        <font style="font-size: 30px">专爱商城</font>
        <input placeholder="请输入内容" v-model="input5" style="margin-left:100px;height: 36px;line-height: 36px;width: 400px;padding: 5px;border-radius: 5px;">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </input>
        <el-popover
          placement="bottom"
          width="300"
          trigger="click">
          <div class="shop-cart" v-for="item in shopCart" :key="item">
            <el-row>
              <el-col :span="8">
                <img class=img :src="item.url">
              </el-col>
              <el-col :span="16">
                <font class="num">x{{item.num}}</font><i class="el-icon-error" style="float: right;" @click="reduceGoods(item.id)"></i><br>
                <font class="desc">{{item.title}}</font><br>
                <font class="price">￥{{item.price}}</font>
              </el-col>
            </el-row>
          </div>
          <p style="border: 1px solid #f2f2f2"></p>
          <font style="font-size: 14px;font-weight: bold;color: #333">总计：</font>
          <font class="allPrice" style="color:#ff6464;font-size: 16px;float: right;">￥{{allPrice}}</font><br>
          <div style="background: #ff6464;width: 70%;color: #fff;margin-left: 15%;height: 30px;line-height: 30px;text-align: center;margin-top: 10px;" @click.stop="onBalance">结算</div>
          <el-button style="margin-left: 100px;" slot="reference" type=""><i class="fa fa-shopping-cart" style="margin-right: 20px;color: #ff4081;"></i>购物车</el-button>
        </el-popover>
</div>

</el-col>
</el-row>
<!-- 导航栏 -->
<el-row style="background: #f2f2f2;height: 50px;line-height: 50px;border:1px solid #cdcdcd;margin-left: -30px;margin-right: -30px;">
  <el-col :span="24" style="text-align: center;">
   <el-button type="text" style="color:#333;font-weight: bold;" @click="toHome">主页</el-button>
   <el-button type="text" style="color:#333;font-weight: bold;">商城</el-button>
   <el-button type="text" style="color:#333;font-weight: bold;">联系我们</el-button>
 </el-col>
</el-row>
</el-header>
<el-main>
  <!-- heading-banner -->
  <div class="heading-banner">
    <div class="container">
      <el-row>
        <el-col :span="24">
          <div class="breadcrumb">
            <a title="Return to Home" href="index.html">
              <i class="icon-home"></i>
            </a>
            <span class="navigation-page">
              <span class="navigation-pipe">></span> 商城
            </span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>	
  <!-- 分类 -->
  <div class="shop-area">
    <div class="container">
      <el-row style="width: 70%;margin-left: auto;margin-right: auto;">
        <el-col :span="5">
          <div class="shop-left-col wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
            <div class="content-box">
              <h2>分类</h2>
              <ul>
                <li>
                  <span class="checkit">
                    <input class="checkbox" type="checkbox" />
                  </span>
                  <label class="check-label">
                    <a href="#">服装 (13)</a>
                  </label>
                </li>
                <li>
                  <span class="checkit">
                    <input class="checkbox" type="checkbox" />
                  </span>
                  <label class="check-label">
                    <a href="#">男装 (9)</a>
                  </label>
                </li>
                <li>
                  <span class="checkit">
                    <input class="checkbox" type="checkbox" />
                  </span>
                  <label class="check-label">
                    <a href="#">女装 (11)</a>
                  </label>
                </li>
                <li>
                  <span class="checkit">
                    <input class="checkbox" type="checkbox" />
                  </span>
                  <label class="check-label">
                    <a href="#">鞋子 (2)</a>
                  </label>
                </li>
                <li>
                  <span class="checkit">
                    <input class="checkbox" type="checkbox" />
                  </span>
                  <label class="check-label">
                    <a href="#">眼镜 (8)</a>
                  </label>
                </li>
              </ul>
            </div>
            <div class="content-box">
              <h2>筛选</h2>
              <ul>
                <li>
                  <span class="checkit">
                    <input class="checkbox" type="checkbox" />
                  </span>
                  <label class="check-label">
                    <a href="#">l (1)</a>
                  </label>
                </li>
                <li>
                  <span class="checkit">
                    <input class="checkbox" type="checkbox" />
                  </span>
                  <label class="check-label">
                    <a href="#">m (1)</a>
                  </label>
                </li>
                <li>
                  <span class="checkit">
                    <input class="checkbox" type="checkbox" />
                  </span>
                  <label class="check-label">
                    <a href="#">s (1)</a>
                  </label>
                </li>
                <li>
                  <span class="checkit">
                    <input class="checkbox" type="checkbox" />
                  </span>
                  <label class="check-label">
                    <a href="#">xl (1)</a>
                  </label>
                </li>
              </ul>
            </div>
            <div class="content-box">
              <h2>颜色</h2>
              <ul>
                <li>
                  <span class="checkit">
                    <input class="checkbox" type="checkbox" />
                  </span>
                  <label class="check-label">
                    <a href="#">黑色 (1)</a>
                  </label>
                </li>
                <li>
                  <span class="checkit">
                    <input class="checkbox" type="checkbox" />
                  </span>
                  <label class="check-label">
                    <a href="#">白色 (8)</a>
                  </label>
                </li>
                <li>
                  <span class="checkit">
                    <input class="checkbox" type="checkbox" />
                  </span>
                  <label class="check-label">
                    <a href="#">橙色 (5)</a>
                  </label>
                </li>
                <li>
                  <span class="checkit">
                    <input class="checkbox" type="checkbox" />
                  </span>
                  <label class="check-label">
                    <a href="#">蓝色 (7)</a>
                  </label>
                </li>
                <li>
                  <span class="checkit">
                    <input class="checkbox" type="checkbox" />
                  </span>
                  <label class="check-label">
                    <a href="#">黄色(11)</a>
                  </label>
                </li>
                <li>
                  <span class="checkit">
                    <input class="checkbox" type="checkbox" />
                  </span>
                  <label class="check-label">
                    <a href="#">红色 (9)</a>
                  </label>
                </li>
              </ul>
            </div>
            <div class="content-box">
              <h2>属性</h2>
              <ul>
                <li>
                  <span class="checkit">
                    <input class="checkbox" type="checkbox" />
                  </span>
                  <label class="check-label">
                    <a href="#">花斑衣服 (2)</a>
                  </label>
                </li>
                <li>
                  <span class="checkit">
                    <input class="checkbox" type="checkbox" />
                  </span>
                  <label class="check-label">
                    <a href="#">长连衣裙 (2)</a>
                  </label>
                </li>
                <li>
                  <span class="checkit">
                    <input class="checkbox" type="checkbox" />
                  </span>
                  <label class="check-label">
                    <a href="#">短连衣裙(4)</a>
                  </label>
                </li>
                <li>
                  <span class="checkit">
                    <input class="checkbox" type="checkbox" />
                  </span>
                  <label class="check-label">
                    <a href="#">短袖 (3)</a>
                  </label>
                </li>
              </ul>
            </div>
            <div class="content-box">
              <h2>标签</h2>
              <ul class="tags">
                <li>
                  <a href="#">热门</a>
                </li>
                <li>
                  <a href="#">时尚</a>
                </li>
                <li>
                  <a href="#">收藏最多</a>
                </li>
                <li>
                  <a href="#">女装</a>
                </li>
                <li>
                  <a href="#">男装</a>
                </li>
                <li>
                  <a href="#">新品</a>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="18" offset="1">
          <div class="shop-right-col wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
            <div class="category-products">
              <div class="topbar-category">
                <div class="pager-area">
                  <div>
                    <!-- Nav tabs -->
                    <ul class="shop-tab">
                      <li role="presentation" class="active"><a href="#gried_view" role="tab" data-toggle="tab">
                        <i class="fa fa-th-large"></i></a>
                      </li>
                      <li role="presentation"><a href="#list_view" role="tab" data-toggle="tab">
                        <i class="fa fa-th-list"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="sort-by hidden-xs">
                  <label>排序</label>
                  <select class="sort_select">
                    <option value="hot">销量</option>
                    <option value="visit">浏览最多</option>
                    <option value="low">价格: 从低到高</option>
                    <option value="high">价格: 从高到低</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="shop-category-product">
              <el-row>
                <div class="category-product">
                 <div v-for="item in productList" :key="o" style="margin-bottom: 40px;width: 260px;height: 360px;display: inline-block;margin-right: 20px;">
                  <el-card :body-style="{ padding: '0px',width: '100%'}">
                   <img :src="item.url" class="image"  @click.stop="onToProDetail(item)">
                   <div style="padding: 14px">
                    <span style="font-size: 14px;font-weight: bold;">{{item.title}}</span>
                    <el-rate
                    style="margin-top: 10px;"
                    v-model="valueH"
                    disabled
                    text-color="#ff9900"
                    score-template="{value}">
                  </el-rate>
                  <div class="price-box">
                   <span class="price">￥{{item.price.toFixed(2)}}</span>
                   <span class="old-price">￥{{item.originPrice.toFixed(2)}}</span>
                 </div>
                 <div class="product-action" style="text-align: right;">
                   <el-button type="info" class="action-btn" @click.stop="onAddShopCart(item)">加入购物车</el-button>
                 </div>
               </div>
             </el-card>
           </div>
         </div>
       </el-row>
     </div>
   </div>
 </el-col>
</el-row>
</div>
</div>
</el-main>
<el-footer>
 <div class="footer-area fadeIn">
  <div class="footer-middle">
    <div class="container">
      <el-row class="row" style="width: 60%;margin-left: auto;margin-right: auto">
        <el-col :span="24">
          <el-row>
            <el-col :span="6">
              <h4>信息</h4>
              <ul class="toggle-footer">
                <li><a title="Specials" href="#">特价</a></li>
                <li><a title="New products" href="#">新产品</a></li>
                <li><a title="Best sellers" href="#">热销产品</a></li>
                <li><a title="Our stores" href="#">商城</a></li>
                <li><a title="Contact us" href="#">联系我们</a></li>
              </ul>
            </el-col>
            <el-col :span="6">
              <h4>我的账号</h4>
              <ul class="toggle-footer">
                <li><a title="My orders" href="#">我的订单</a></li>
                <li><a title="My addresses" href="#">我的收货地址</a></li>
                <li><a title="My personal info" href="#">我的个人信息</a></li>
              </ul>
            </el-col>
            <el-col :span="6">
              <h4>分类</h4>
              <ul class="toggle-footer">
                <li><a title="My orders" href="#">男装</a></li>
                <li><a title="My credit slips" href="#">女装</a></li>
              </ul>
            </el-col>
            <el-col :span="6">
              <h4>商店地址</h4>
              <div class="footer-contact">
                <p class="description">
                  {{constantMsg.address}}
                </p>
                <p class="address add">
                  <span>{{constantMsg.address}}</span>
                </p>
                <p class="phone add">
                  <span> {{constantMsg.qq}}</span>
                </p>
                <p class="email add">
                  <a href="#">{{constantMsg.email}}</a>
                </p>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <el-row>
        <el-col :span="24" class="address">
          Copyright &copy; 2018.专爱商城 <a target="_blank" href="http://www.miibeian.gov.cn/" style="color: #fff">&nbsp;&nbsp;</a>
        </el-col>
      </el-row>
    </div>
  </div>
</div>        
</el-footer>
<el-dialog title="" :visible.sync="dialogProDetailVisible">
  <div class="modal-dialog">
    <div class="modal-content">
      <el-row class="container">
        <el-col :span="8">
          <div style="width: 100%;">
            <a href="#"><img :src="selectImgUrl" alt="" style="width: 100%;" /></a>
            <span class="sale-box">
              <span class="sale">Sale</span>
            </span>
            <span class="new-box">
              <span class="new" v-if="proDetail.isNew">New</span>
            </span>
          </div>
          <div v-for="item in proDetail.imgUrl">
            <a @click="onSelectImgUrl(item)"><img :src="item" style="width: 75px;height: 75px;display: inline-block;float: left;margin-right: 11px;"></a>
          </div>                                  
        </el-col>
        <el-col :span="14" offset="1">
          <div class="product-details-info">
            <h5 class="product-title">{{proDetail.title}}</h5>
            <div class="price-box">
              <span class="price">￥{{proDetail.price.toFixed(2)}}</span>
              <span class="old-price">￥{{proDetail.originPrice.toFixed(2)}}</span>
            </div>
            <div class="rating">
            </div>
            <div class="short-description">
              <p>
              </p>
            </div>
            <div class="add-cart">
              <p class="quantity cart-plus-minus">
                <label>数量：</label>
                <input type="text" value="1" v-modal="proDetailNum" />
              </p>
              <div class="collect">
                <label>收藏：</label>
                <a class="add-wishlist" href="#" title="收藏"><i class="fa fa-heart"></i></a>
              </div>
              <div class="shop-add-cart" style="margin-top: 20px;">
                <el-button @click="onAddShopCart(proDetail,'proDetail')" type="danger" style="">加入购物车</el-button>
              </div>
            </div>
          </div>                      
        </el-col>
      </el-row>
    </div>
  </div>
</el-dialog>
<!-- 结算弹窗 -->
<el-dialog title="" :visible.sync="dialogBalanceVisible">
  <div class="modal-content">
    <div class="modal-body">
      <el-form action="#">
        <div class="form-item">
          <label>请填写收货地址</label>
          <p></p>
          <span style="font-weight: bold;">省份：</span>
          <input class="form-control" type="text">
          <span style="margin-left: 20px;font-weight: bold;">城市：</span>
          <input class="form-control" type="text" style="w">
          <span style="margin-left: 20px;font-weight: bold;">区县：</span>
          <input class="form-control" type="text">
        </div>
        <div class="form-item">
          <label for="">详细地址</label>
          <input class="form-control" style="width: 80%;margin-top: 5px;" type="text">
        </div>
        <div class="form-item">
          <label for="">商品总价</label>
          <input class="form-control" v-model="allPrice" style="width: 80%;margin-top: 5px;" :disabled="!isLogin" type="text">
        </div>
        <div class="pay form-item" style="margin-top: 20px;">
          <a class="wx" @click="onPay('wx')">微信支付</a>
          <a class="zfb" @click="onPay('zfb')">支付宝支付</a>
        </div>
      </el-form>
    </div>
  </div>
</el-dialog> 
</el-container>
</template>

<script>
  import { Message } from 'element-ui'
  export default{
   name: 'category',
   data() {
    return{
      searchContent:'',
      isLogin:false,
      productList:this.GLOBAL.list.men,
      valueH:3.7,
      allPrice:0,
      constantMsg:this.GLOBAL.list.constantMsg,
      shopCart:[],
      proDetailNum:0,
      proDetail:this.GLOBAL.list.men[0],
      selectImgUrl:'',
            dialogProDetailVisible:false, // 商品详情窗口
            dialogBalanceVisible:false, // 结算窗口
          }

        },

        methods:{
          toHome(){
           this.$router.push({ path: '/home' })
         },
         onSearchGoods(){
          if(this.searchContent == ''){
            Message({ 
              message: '请输入商品名称',
              type: 'warning',
              duration: 2000
            })
            return
          }
          this.$router.push({ path: '/category' })
        },
        onAddShopCart(item,type){
          console.log(this.proDetailNum)
          console.log('添加购物车')
        let isExit = false // 判断商品是否存在于购物车中
        let index = null // 判断商品存在于购物车中的商品角标
        if(this.shopCart.length == 0){
          if(type == 'proDetail'){
            item.num = this.proDetailNum
          }else{
            item.num = 1
          }
          this.shopCart.push(item)
          Message({
            message: '添加购物车成功',
            type: 'success',
            duration: 2000
          })
          console.log(this.shopCart)
          return
        }
        for(var i = 0,j = this.shopCart.length;i<j;i++){
          if(item.id == this.shopCart[i].id){
            console.log('购物车中有该商品存在')
            isExit = true
            index = i
            break
          }
        }
        if(isExit){
          this.shopCart[i].num ++
        }else{
          if(type == 'proDetail'){
            item.num = this.proDetailNum
          }else{
            item.num = 1
          }
          this.shopCart.push(item)
        }
        Message({
          message: '添加购物车成功',
          type: 'success',
          duration: 2000
        })
        console.log(this.shopCart)
        this.onGetAllPrice()
      },
      reduceGoods(id){
        for(var i = 0,j = this.shopCart.length;i<j;i++){
          if(this.shopCart[i].id == id){
            this.shopCart.splice(i,1)
            break
          }
        }
        this.onGetAllPrice()
      },
      onGetAllPrice(){
        console.log('结算')
        let allPrice = 0
        for(var i = 0,j = this.shopCart.length;i<j;i++){
          allPrice = allPrice + (this.shopCart[i].num * this.shopCart[i].price)
        }
        this.allPrice = allPrice
        console.log('this.allPrice',this.allPrice)
      },
      onToProDetail(item){
        this.proDetail = item
        this.selectImgUrl = item.imgUrl[0]
        this.dialogProDetailVisible = true
      },
      onSelectImgUrl(item){
        this.selectImgUrl = item
      },
      onBalance(){
        if(this.shopCart.length == 0){
          Message({
            message:'购物车中没有商品',
            type: 'info',
            duration: 2000
          })
          return
        }
        this.dialogBalanceVisible = true
      },
      onPay(type){
        if(type == 'wx'){

        }else if(type == 'zfb'){

        }
      }
    }
  }
</script>

<style>
.shop-cart{
  width: 280px;
}

.shop-cart .img{
  width: 80%;
}

.shop-cart .price{
    color: #ff6464;
    font-size: 18px;
    font-weight: bold;
}

.shop-cart .num{
  font-size: 12px;
  color:#666;
}

.shop-cart .desc{
  font-size: 12px;
  color: #333;
  font-weight: bold;

}

.action-btn {
	margin-top: 10px;
	font-size: 14px;
	padding: 5px 10px;
	color:#fff;
	background: #666;
}

.price-box{
	margin-top: 10px;
}

.price-box .price {
  color: #ff6464;
  font-size: 18px;
  font-weight: bold;
}

.price-box .old-price {
  color: #404040;
  font-size: 13px;
  margin-left: 10px;
  text-decoration: line-through;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
.heading-banner {
  background: rgba(0, 0, 0, 0) url("/static/bg/prodet.jpg") no-repeat fixed 0 0;
  position: relative;
  margin-left: -20px;
  margin-right: -20px;
  margin-top: 165px;
}

.heading-banner::before {
  background: black none repeat scroll 0 0;
  content: "";
  height: 100%;
  left: 0;
  opacity: 0.7;
  position: absolute;
  top: 0;
  width: 100%;
}

.breadcrumb {
  background: transparent none repeat scroll 0 0;
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0;
  padding: 110px 0;
  text-align: center;
  text-transform: uppercase;
}

.breadcrumb>a {
  color: white;
  display: inline-block;
  font-size: 18px;
  height: 25px;
  line-height: 25px;
  padding: 0;
  text-align: center;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -ms-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  z-index: 99;
}

.icon-home::before {
  content: "";
  font-family: FontAwesome;
  font-style: normal;
}

.breadcrumb .navigation-pipe {
  color: white;
  display: inline-block;
  padding: 0 15px;
}

.navigation-page>a {
  color: white;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -ms-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
/* category shop */
.shop-area {
  background: #f7f7f7 none repeat scroll 0 0;
  padding: 80px 0;
}

.shop-left-col {
  border: 1px solid #f6f5f3;
  padding: 0 10px;
}

.content-box {
  padding: 15px 0;
}

.content-box ul li {
  margin-bottom: 5px;
  list-style: none;
}

.content-box h2 {
  border-bottom: 2px solid #cccccc;
  color: #363636;
  display: block;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  text-transform: uppercase;
}

.content-box span {
  float: left;
  position: relative;
  top: 2px;
}

.check-label {
  font-weight: normal;
  margin-left: 8px;
}

.content-box input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  height: 15px;
  width: 15px;
}

.check-label a {
  color: #444;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
}

.price_filter .ui-slider.ui-slider-horizontal.ui-widget.ui-widget-content.ui-corner-all {
  background: #f2f2f2 none repeat scroll 0 0;
  border: medium none;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  -ms-border-radius: 0;
  -o-border-radius: 0;
  border-radius: 0;
  height: 4px;
  margin-right: 5px;
  margin-top: 35px;
}

.price_filter .ui-slider-handle.ui-state-default.ui-corner-all {
  background: #444 none repeat scroll 0 0;
  border: medium none black;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
  height: 21px;
  margin-left: -2px;
  margin-top: -5px;
  width: 6px;
}

.price_filter .ui-slider-range {
  background: #444 none repeat scroll 0 0;
  height: 4px;
  margin-top: 0;
}

.price_slider_amount>input[type="text"] {
  border: medium none;
  font-weight: bold;
  letter-spacing: 3px;
  margin-left: -15px;
  text-align: center;
  width: 130px;
}

.price_slider_amount>input[type="submit"] {
  border-image: none;
  border-style: solid solid solid none;
  border-width: 0;
  color: #444444;
  float: left;
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 1px;
  margin-top: 2px;
  text-transform: uppercase;
  -webkit-transition: all 400ms ease-in 0s;
  -moz-transition: all 400ms ease-in 0s;
  -ms-transition: all 400ms ease-in 0s;
  -o-transition: all 400ms ease-in 0s;
  transition: all 400ms ease-out 0s;
  width: auto;
}

.shop-filter h2.shop-sidebar-title {
  margin: 0 0 20px;
}

.price_slider_amount {
  margin: 25px 0;
}

.content-box .price-filter {
  background: black none repeat scroll 0 0;
  border: medium none;
  color: white;
  font-weight: bold;
  padding: 5px 13px;
  text-transform: uppercase;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -ms-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.content-box .price-filter:hover {
  background: #ff6464 none repeat scroll 0 0;
}

.content-box ul.tags>li {
  display: inline-block;
}

ul.tags li {
  margin-bottom: 5px;
  margin-right: 5px;
}

ul.tags li a {
  border: 1px solid #d5d5d5;
  color: black;
  display: block;
  font-weight: 500;
  padding: 5px 15px;
  text-decoration: none;
  text-transform: capitalize;
}

ul.tags li a:hover {
  background: #ff6464 none repeat scroll 0 0;
  border-color: #ff6464;
  color: white;
}

.topbar-category {
  border: 1px solid #e5e5e5;
  clear: both;
  margin-bottom: 40px;
  padding: 15px 15px 10px;
  position: relative;
}

.pager-area {
  display: inline-block;
}

.shop-tab {
  display: inline-block;
  margin-left: 6px;
  margin-top: 1px;
}

.shop-tab li {
  display: inline-block;
}

.shop-tab li a {
  background: #909295 none repeat scroll 0 0;
  border: 0 none;
  color: white;
  display: block;
  height: 30px;
  line-height: 30px;
  text-decoration: none;
  width: 30px;
}

.shop-tab li.active a {
  background: #ff6464 none repeat scroll 0 0;
}

.shop-tab li a i {
  display: block;
  font-size: 17px;
  line-height: 30px;
  padding-left: 7px;
}

.shop-tab li.active a i {}

.sort-by {
  display: inline-block;
  margin-left: 50px;
  margin-top: 0;
  position: absolute;
}

.sort-by label,
.show label,
.show span {
  color: #404048;
  font-size: 14px;
  font-weight: normal;
  padding: 3px 4px 0 0;
}

.sort-by>select {
  background: #fbfbfb none repeat scroll 0 0;
  border: 1px solid #e5e5e5;
  float: right;
  height: 27px;
  margin-left: 2px;
  margin-top: 0;
  padding-left: 5px;
  padding-top: 1px;
  width: 190px;
}

option {
  border-left: 1px solid;
  border-right: 1px solid;
}

.show {
  display: inline-block;
  position: absolute;
  right: 270px;
  top: 15px;
}

.show>label {
  float: left;
}

.show>select {
  background: #fbfbfb none repeat scroll 0 0;
  border: 1px solid #e5e5e5;
  float: left;
  font-size: 11px;
  height: 27px;
  margin-left: 2px;
  margin-right: 5px;
  padding-left: 5px;
  padding-top: 1px;
  width: 55px;
}

.top-mar {
  margin-top: 30px
}

.list-view .single-product .single-product-img {
  margin: auto -10px 0;
}

.list-view .single-product {
  background: transparent none repeat scroll 0 0;
  border: medium none;
  padding: 0 10px;
}

.list-view .single-product-content .product-desc {
  color: #464646;
  font-size: 14px;
  font-weight: normal;
  line-height: 25px;
  margin: 15px 0;
  padding: 0;
}

.list-view .product-action a {
  opacity: 1;
  -webkit-box-transform: scale(1);
  -moz-box-transform: scale(1);
  -ms-box-transform: scale(1);
  -o-box-transform: scale(1);
  transform: scale(1);
  visibility: visible;
}

.availability,
.not-available {
  display: block;
  margin-top: 30px;
}

.availability span,
.not-available span {
  background-color: #008000;
  border: 1px solid #36943e;
  color: white;
  display: inline-block;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 3px 8px 4px 9px;
}

.not-available span {
  background-color: #b30000;
  border: 1px solid #b30000;
}

.shop-breadcrumb {
  display: inline-block;
  float: right;
}

.shop-breadcrumb ul {}

.shop-breadcrumb ul li {
  display: inline-block;
}

.shop-breadcrumb ul li a {
  border: 1px solid #ddd;
  color: #444;
  display: block;
  height: 25px;
  line-height: 21px;
  text-align: center;
  text-decoration: none;
  width: 25px;
}

.shop-breadcrumb ul li a:hover,
.shop-breadcrumb ul li.active a {
  background: #ff6464 none repeat scroll 0 0;
  border-color: #ff6464;
  color: #fff;
}

.shop-area .single-product:hover {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  -ms-box-shadow: none;
  -o-box-shadow: none;
  box-shadow: none;
}

/* 底部footer */
.footer-area {
  background-color: #1a001a;
  margin-left: -20px;
  margin-right: -20px;
}

.footer-area p {
  margin: 0 0 10px;
}

.footer-top {}

.footer-logo {
  border-bottom: 1px solid #4a4a4a;
  padding: 60px 0;
  text-align: center;
}

.footer-middle {
  background: #1a1a1a none repeat scroll 0 0;
  padding-top: 80px;
}

.foot-mar {
  margin-bottom: 20px;
}

.footer-area h4 {
  color: white;
  font-size: 18px;
  letter-spacing: 2px;
  line-height: 24px;
  margin: 0 0 15px;
  text-transform: capitalize;
}

.footer-area p {
  color: #fff;
  font-size: 14px;
  line-height: 24px;
}

.footer-area .footer-contact .description {
  padding: 10px 0;
}

.footer-area .footer-contact .add,
.footer-area .footer-contact a {
  color: #ff6464;
}

.footer-area .footer-contact .add::before {
  font-family: "FontAwesome";
  padding-right: 7px;
}

.footer-area .footer-contact .add.address::before {
  content: "";
}

.footer-area .footer-contact .add.phone::before {
  content: "";
}

.footer-area .footer-contact .add.email::before {
  content: "";
}

.footer-area ul.toggle-footer li {
  list-style: none;
  line-height: 30px;
  padding-bottom: 5px;
  padding-top: 5px;
  -webkit-transition: all 300ms ease-in 0s;
  -moz-transition: all 300ms ease-in 0s;
  -ms-transition: all 300ms ease-in 0s;
  -o-transition: all 300ms ease-in 0s;
  transition: all 300ms ease-in 0s;
}

.footer-area ul.toggle-footer li a::before {
  font-family: "FontAwesome";
  content: "";
  font-size: 14px;
  line-height: 1;
  padding-right: 7px;
  vertical-align: middle;
}

.footer-area ul.toggle-footer li:hover {
  padding-left: 10px;
  -webkit-transition: all 300ms ease-in 0s;
  -moz-transition: all 300ms ease-in 0s;
  -ms-transition: all 300ms ease-in 0s;
  -o-transition: all 300ms ease-in 0s;
  transition: all 300ms ease-in 0s;
}

.footer-area ul.toggle-footer li a:hover {
  color: #ff6464;
}

.footer-social {}

.footer-social h3 {
  color: white;
  cursor: pointer;
  font-size: 20px;
  letter-spacing: 2px;
  margin-bottom: 19px;
  margin-top: 34px;
  text-transform: capitalize;
}

.footer-social a {
  color: #fff;
  display: block;
  float: left;
  font-size: 16px;
  height: 35px;
  line-height: 33px;
  text-align: center;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -ms-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  width: 35px;
}

.footer-social a:nth-child(2) {
  background: #3C5A99;
}

.footer-social a:nth-child(3) {
  background: #55ACEE;
}

.footer-social a:nth-child(4) {
  background: #F57D00;
}

.footer-social a:nth-child(5) {
  background: #C30000;
}

.footer-social a:nth-child(6) {
  background: #DD4B38;
}

.footer-social a:hover {
  background: #C06B81;
}

.footer-area .payment {
  border-top: 1px solid #4a4a4a;
  margin-top: 60px;
  padding: 30px 0;
  text-align: center;
}

.footer-area .footer-bottom {
  background: #0d0d0d none repeat scroll 0 0;
  padding: 30px 0;
}

.footer-bottom .address {
  color: #fff;
  font-size: 14px;
  text-align: center;
}

.footer-bottom .address a {
  color: #ff6464;
}

.footer-bottom .address a:hover {
  text-decoration: underline;
}

.footer-link {
  text-align: left;
}

.footer-link ul {}

.footer-link ul li {
  display: inline-block;
}

.footer-link ul li a {
  padding: 0 12px;
}

.footer-link ul li:first-child a {
  padding-left: 0;
}

.footer-link ul li a:hover {
  color: #ff6464;
}

footer ul li a {
  color: #fff;
  display: block;
  text-transform: capitalize;
}

/*-------------------------
modal
-------------------------*/
.modal{
  z-index: 9999999;
}
.modal-dialog {
  margin: 30px auto;
  width: 1080px;
}

.modal-content .product-details {
  margin: 0 auto;
}

.modal-content .container {
  width: 1044px;
}

.modal-content .pic-tabs>li {
  margin-bottom: 17px;
}

.modal-content .product-details {
  padding: 15px 0 0;
}
.modal-body .form-item{
  display: table;
  width: 100%;
  margin-bottom: 10px;
}
.modal-body .form-item label{
  display: block;
}

select.form-control{
  display: inline-table;
  width: 33.33333%;
  font-size:12px;
}
.modal-body .submit{
  display: block;
  width: 100%;
  padding: 10px;
  text-align: center;
  background: rgba(255,0,0,1);
  margin-top: 10px;
  color: white;
  border-radius: 5px;
}
.modal-body .pay a{
  display: block;
  width: 95%;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  color: white;
  margin:auto;
}
.modal-body .pay .wx{
  background: olive;
  margin-bottom: 10px;
}
.pay .zfb{
  background: rgba(0,0,255,.6);
}
.modal-body .size{
  margin-top: 20px;
}
.modal-body .size a{
  border: 1px solid silver;
  padding: 5px;
  margin-right: 5px;
}

.picture-tab .single-product {
  padding-bottom: 0;
}

.picture-tab .single-product:hover {
  -webkit-box-transform: translate(0px, 0px);
  -moz-box-transform: translate(0px, 0px);
  -ms-box-transform: translate(0px, 0px);
  -o-box-transform: translate(0px, 0px);
  transform: translate(0px, 0px);
}

.picture-tab .single-product-img {
  margin-bottom: 0;
}

.pic-tabs {
  float: right;
  width: 17.5%;
}

.picture-tab .tab-content {
  float: left;
  padding-right: 10px;
  width: 82.5%;
}

.pic-tabs>li {
  border: 1px solid #999999;
  margin-bottom: 20px;
  overflow: hidden;
}

.pic-tabs img {
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -ms-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 3s ease 0s;
}

.pic-tabs>li:last-child {
  margin: 0;
}

.pic-tabs img:hover {
  -webkit-box-transform: scale(1.2);
  -moz-box-transform: scale(1.2);
  -ms-box-transform: scale(1.2);
  -o-box-transform: scale(1.2);
  transform: scale(1.2);
}

.product-details-info .product-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.product-details-info .price-box {
  margin-bottom: 15px;
}

.add-cart {
  margin-top: 20px;
}

.product-details-info .short-description {
  margin-top: 15px;
}

.new-box,
.sale-box {
  height: 50px;
  overflow: hidden;
  position: absolute;
  text-align: center;
  top: -16px;
  width: 75px;
  z-index: 0;
}

.sale-box {
  left: 2px;
}

.new-box {
  left: 2px;
  top: 10px;
}

.new,
.sale {
  height: 31px;
  left: 0px;
  position: absolute;
  top: 18px;
  width: 67px;
}

.sale,
.new {
  background: #ff6464 none repeat scroll 0 0;
  border: 1px solid #ff6464;
  border-radius: 15px 0;
  color: white;
  font-size: 14px;
  font-weight: bold;
  line-height: 30px;
}

.new {
  background: #46B255 none repeat scroll 0 0;
  border-color: #46B255;
}
</style>