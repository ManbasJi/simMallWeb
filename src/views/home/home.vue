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
			  	<el-button type="text" style="text-decoration: underline;" @click="toLogin">登录</el-button>
			  </el-col>
			  <el-col :span="4"></el-col>
			</el-row>
			<!-- 顶部搜索、logo -->
			<el-row style="line-height:160px;height: 160px;margin-left: -30px;margin-right: -30px;">
				<el-col :span="24">
					<div style="width:100%;height: 160px;line-height: 160px;text-align: center;">
						<img src="/static/logo.png" style="margin-bottom: -10px;">
						<font style="font-size: 30px">专爱商城</font>
						<input placeholder="请输入内容" v-model="searchContent" style="margin-left:100px;height: 36px;line-height: 36px;width: 400px;padding: 5px;border-radius: 5px;">
						  <el-button slot="append" icon="el-icon-search" @click="onSearchGoods"></el-button>
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

			<el-row style="background: #f2f2f2;height: 50px;line-height: 50px;border:1px solid #cdcdcd;margin-left: -30px;margin-right: -30px;">
				<el-col :span="24" style="text-align: center;">
					<el-button type="text" style="color:#333;font-weight: bold;">主页</el-button>
					<el-button type="text" style="color:#333;font-weight: bold;" @click="toCategory">商城</el-button>
					<el-button type="text" style="color:#333;font-weight: bold;">联系我们</el-button>
				</el-col>
			</el-row>
		</el-header>
		<!-- banner -->
		<el-carousel class="el-carousel">
			<el-carousel-item v-for="item in bannerList" :key="item">
				<div style="width:100%;text-align: center;">
					<img :src="item" style="width:100%;height: 610px;"></img>
				</div>
			</el-carousel-item>
		</el-carousel>
		<el-main style="">
			<!-- banner分类 -->
			<el-row style="background:#f2f2f2;width:100%;padding-top:50px;padding-left: 20%;padding-right: 20%;">
				<el-col :span="8">
					<div class="category-banner" @click="toCategory">
						<a>
							<img :src="categoryBanner[0].url">
						</a>
						<h3>{{categoryBanner[0].title}}</h3>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="category-banner" @click="toCategory">
						<a>
							<img :src="categoryBanner[1].url">
						</a>
						<h3>{{categoryBanner[1].title}}</h3>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="category-banner" @click="toCategory">
						<a>
							<img :src="categoryBanner[2].url">
						</a>
						<h3>{{categoryBanner[2].title}}</h3>
					</div>
				</el-col>
			</el-row>
			<!-- 店主推荐 -->
			<el-row style="margin-top: 80px;width: 60%;margin-left: auto;margin-right: auto">
         <div class="section-heading">
    	      <h3>店主推荐</h3>
         </div>
			</el-row>
			<el-row style="width: 60%;margin-left: auto;margin-right: auto">
				<div class="feature-tab wow fadeIn">
					<ul class="my-tab" style="margin-right: 40px">
	            <li :class="isRecommendType=='new'?'active':''"><a @click="changeRecommedList('new')">新品</a></li>
	            <li :class="isRecommendType=='men'?'active':''"><a @click="changeRecommedList('men')">男装</a></li>
	            <li :class="isRecommendType=='wom'?'active':''"><a @click="changeRecommedList('wom')">女装</a></li>
	        </ul>
	      </div>
			</el-row>
			<!-- 店主推荐商品列表 -->
			<div style="width: 60%;margin-left: auto;margin-right: auto;">
				<div v-for="item in recommendList" :key="o" style="margin-bottom: 40px;width: 260px;height: 360px;display: inline-block;margin-right: 20px;">
					<el-card :body-style="{ padding: '0px',width: '100%'}">
						<img :src="item.url" class="image" @click.stop="onToProDetail(item)">
						<div style="padding: 14px">
							<span style="font-size: 14px;font-weight: bold;">{{item.title}}</span>
												<el-rate
													v-model="item.hot"
													disabled
													text-color="#ff9900"
													score-template="{value}">
												</el-rate>
												<div class="price-box">
													<span class="price">￥{{item.price.toFixed(2)}}</span>
													<span class="old-price">￥{{item.originPrice.toFixed(2)}}</span>
												</div>
												<div class="product-action">
													<el-button class="action-btn" type="info" @click.stop="onAddShopCart(item)">加入购物车</el-button>
												</div>
						</div>
					</el-card>
				</div>
			</div>
			<!-- 竖向商品列表 -->
			<div class="bestseller-area">
				<div class="container">
					<el-row style="width: 60%;margin-left: auto;margin-right: auto">
						<!-- 热销产品 -->
						<el-col :span="8">
							<div class="best-seller-col fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
								<h3>热销产品</h3>
								<div class="best-seller-content"  v-for="item in bestGoodsList" key="index">
									<div class="single-new-product" v-if="item.isHot" @click.stop="onToProDetail(item)">
										<div class="product-img">
											<a><img :src="item.url" alt="" style="width: 100%;"></a>
										</div>
										<div class="product-details">
											<div class="single-product-content">
												<div class="product-title">
													<h5><a>{{item.title}}</a></h5>
												</div>
												<el-rate
													v-model="valueH"
													disabled
													text-color="#ff9900"
													score-template="{value}">
												</el-rate>
												<div class="price-box">
													<span class="price">￥{{item.price.toFixed(2)}}</span>
													<span class="old-price">￥{{item.originPrice.toFixed(2)}}</span>
												</div>
												<div class="product-action">
													<el-button type="info" @click.stop="onAddShopCart(item)">加入购物车</el-button>
												</div>
										</div>
									</div>
								</div>
							</div>
							</div>
						</el-col>
						<!-- 浏览最多 -->
						<el-col :span="8">
							<div class="best-seller-col fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
								<h3>浏览最多</h3>
								<div class="best-seller-content"  v-for="item in bestGoodsList" key="index" >
									<div class="single-new-product" v-if="item.isLook" @click.stop="onToProDetail(item)">
										<div class="product-img">
											<a><img :src="item.url" alt="" style="width: 100%;"></a>
										</div>
										<div class="product-details">
											<div class="single-product-content">
												<div class="product-title">
													<h5><a>{{item.title}}</a></h5>
												</div>
												<el-rate
													v-model="item.hot"
													disabled
													text-color="#ff9900"
													score-template="{value}">
												</el-rate>
												<div class="price-box">
													<span class="price">￥{{item.price.toFixed(2)}}</span>
													<span class="old-price">￥{{item.originPrice.toFixed(2)}}</span>
												</div>
												<div class="product-action">
													<el-button type="info" @click.stop="onAddShopCart(item)">加入购物车</el-button>
												</div>
										</div>
									</div>
								</div>
							</div>
							</div>
						</el-col>
						<!-- 收藏最多 -->
						<el-col :span="8">
							<div class="best-seller-col fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
								<h3>收藏最多</h3>
								<div class="best-seller-content"  v-for="item in bestGoodsList" key="index">
									<div class="single-new-product" v-if="item.isCollect" @click.stop="onToProDetail(item)">
										<div class="product-img">
											<a><img :src="item.url" alt="" style="width: 100%;"></a>
										</div>
										<div class="product-details">
											<div class="single-product-content">
												<div class="product-title">
													<h5><a>{{item.title}}</a></h5>
												</div>
												<el-rate
													style="margin-top: 10px;"
													v-model="item.hot"
													disabled
													text-color="#ff9900"
													score-template="{value}">
												</el-rate>
												<div class="price-box">
													<span class="price">￥{{item.price.toFixed(2)}}</span>
													<span class="old-price">￥{{item.originPrice.toFixed(2)}}</span>
												</div>
												<div class="product-action">
													<el-button type="info" @click.stop="onAddShopCart(item)">加入购物车</el-button>
												</div>
										</div>
									</div>
								</div>
							</div>
							</div>
						</el-col>
					</el-row>
				</div>
			</div>
			<!-- 底部分类banner -->
			<el-row style="border-bottom:1px solid #f2f2f2;margin-top:100px;height:400px;width:60%;margin-left: auto;margin-right: auto;white-space: nowrap;overflow: auto;">
				<el-col :span="12">
					<img src="static/banner/11.jpg" style="width: 90%;margin:auto; " @click="toCategory">
				</el-col>
				<el-col :span="12">
					<img src="static/banner/12.jpg" style="width: 90%;margin:auto; " @click="toCategory">
				</el-col>
			</el-row>
			<!-- 邮件联系我们 -->
			<div class="news-letter-area">
        <div class="container">
            <el-row>
                <el-col :span="24">
                    <div class="subscribe-area fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                        <div class="subscribe-title">
                            <h3><span>Subscribe</span>to our newsletter</h3>
                            <p>订阅邮件,以便接收到最新的、最优惠的商品信息.
                            </p>
                            <form>
                                <div class="subscribe-form">
                                    <input type="text" placeholder="你的邮件..." v-model="custEmail" class="form-control search-form" />
                                    <button @click="onToSubscrible">订阅</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
    <!-- 商家服务 -->
    <div class="service-area">
        <div class="container">
            <el-row style="width: 60%;margin-left:auto;margin-right:auto">
                <div class="service wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                    <el-col :span="5" offset="1">
                        <div class="single-service">
                            <i class="fa fa-plane"></i>
                            <h3>3件包邮</h3>
                        </div>
                    </el-col>
                    <el-col :span="5" offset="1">
                        <div class="single-service">
                            <i class="fa fa-taxi"></i>
                            <h3>支持货到付款</h3>
                        </div>
                    </el-col>
                    <el-col :span="5" offset="1">
                        <div class="single-service no-bor">
                            <i class="fa fa-credit-card"></i>
                            <h3>安全支付</h3>
                        </div>
                    </el-col>
                    <el-col :span="5" offset="1">
                        <div class="single-service no-bor">
                            <i class="fa fa-phone"></i>
                            <h3>客服在线</h3>
                        </div>
                    </el-col>
                </div>
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
                                                <input type="text" value="1" v-model="proDetailNum" />
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
                            <input class="form-control" v-model="allPrice"  style="width: 80%;margin-top: 5px;" :disabled="!isLogin" type="text">
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
export default {
  name: 'home',
  data() {
    return {
    	searchContent:'',
    	custEmail:'',
    	isLogin:false,
    	isRecommendType: 'new',
    	currentDate: new Date(),
    	bannerList:this.GLOBAL.list.bigBannerList,
    	categoryBanner:this.GLOBAL.list.categoryBannerList,
    	valueH: 5,
    	valueL:3.7,
    	allPrice:0,
    	dataList:this.GLOBAL.list,//访问全局变量
    	recommendList:this.GLOBAL.list.men,
    	bestGoodsList:[],
    	constantMsg:this.GLOBAL.list.constantMsg,
    	shopCart:[],
    	proDetailNum:1,
    	proDetail:{},
    	selectImgUrl:'',
    	dialogProDetailVisible:false, // 商品详情窗口
    	dialogBalanceVisible:false,	// 结算窗口
    }
  },
  mounted(){
  	this.bestGoodsList = this.bestGoodsList.concat(this.GLOBAL.list.men)
  	this.bestGoodsList = this.bestGoodsList.concat(this.GLOBAL.list.women)
  	this.proDetail = this.GLOBAL.list.men[0]
  	console.log(this.bestGoodsList)
  },
  methods:{
  	changeRecommedList(e){
  		console.log('changeRecommedList===',e)
  		if(e == 'men'){
  			this.isRecommendType = 'men'
  			this.recommendList = this.GLOBAL.list.men
  		}else if(e == 'wom'){
  			this.isRecommendType = 'wom'
  			this.recommendList = this.GLOBAL.list.women
  		}else if(e == 'new'){
  			this.isRecommendType = 'new'
  			this.recommendList = this.GLOBAL.list.men
  		}
  	},
  	toCategory(){
  		console.log('跳转分类')
  		this.$router.push({ path: '/category' })
  	},
  	toLogin(){
  		console.log('跳转登录')
  		this.$router.push({ path: '/login' })
  	},
  	onToSubscrible(){
  		if(this.custEmail == ''){
  			Message({
  				message: '请填写您的邮箱',
  				type: 'warning',
  				duration: 2000
  			})
  			return
  		}
  		Message({
  			message: '订阅成功',
  			type: 'success',
  			duration: 2000
  		})
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
  		let index = null //	判断商品存在于购物车中的商品角标
  		if(this.shopCart.length == 0){
  			if(type == 'proDetail'){
  				if(this.proDetailNum == 0){
  					Message({
  						message: '请输入商品数量',
  						type: 'warning',
  						duration: 2000
  					})
  					return
  				}
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
  			this.onGetAllPrice()
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

	.el-carousel{
		margin-top: 185px;
		background: #f2f2f2;
		height: 610px;
	}


  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
     height: 610px;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
     height: 610px;
  }

  .category-banner{
			width: auto;
			height: 500px;
			text-align: center;
  }

  .section-heading {
    font-weight: bold;
    margin: 0 0 10px;
    position: relative;
    text-align: center;
	}

	.section-heading::before {
	    border-top: 5px dotted #bfbfbf;
	    content: "";
	    left: 0;
	    margin: 0;
	    position: absolute;
	    top: 50%;
	    width: 100%;
	}

	.section-heading h3 {
	    background: #fff none repeat scroll 0 0;
	    display: inline-block;
	    font-size: 18px;
	    font-weight: bold;
	    margin-bottom: 0;
	    padding: 0 15px;
	    position: relative;
	    text-transform: uppercase;
	    width: auto;
	    z-index: 1;
	}

.section-heading h3::before {
    content: "";
    display: inline-block;
    font: 12px/1 FontAwesome;
    margin-right: 10px;
    text-rendering: auto;
    -webkit-box-transform: translate(0px, 0px);
    -moz-box-transform: translate(0px, 0px);
    -ms-box-transform: translate(0px, 0px);
    -o-box-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
}

.section-heading h3::after {
    content: "";
    display: inline-block;
    font: 12px/1 FontAwesome;
    margin-left: 10px;
    text-rendering: auto;
    -webkit-box-transform: translate(0px, 0px);
    -moz-box-transform: translate(0px, 0px);
    -ms-box-transform: translate(0px, 0px);
    -o-box-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
}

.feature-tab {
    position: relative;
}

.feature-tab .my-tab {
    margin: 28px 0 40px;
    text-align: center;
}

.feature-tab .my-tab li {
    display: inline-block;
    padding: 5px 15px;
    position: relative;
}

.my-tab li a {
    font-size: 13px;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
}

.my-tab li.active::before,
.my-tab li.active::after,
.my-tab li a:hover::before,
.my-tab li a:hover::after {
    border-top: 3px double #ff6464;
    content: "";
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
}

.my-tab li.active::after,
.my-tab li a:hover::after {
    bottom: 0;
    top: auto;
}

.my-tab .active>a {
    color: #ff6464;
}

/*竖向商品列表*/
.bestseller-area {
		margin-top: 50px;
    background: rgba(0, 0, 0, 0) url("/static/bg/best1.jpg") no-repeat fixed center center / cover;
    padding: 80px 0;
    margin-left: -20px;
    margin-right:-20px;
    position: relative;
    height: 800px;
}

.bestseller-area::before {
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: black;
    position: absolute;
    opacity: 0.50;
}

.best-seller-col {
    background: #fff none repeat scroll 0 0;
    padding: 25px 15px;
    margin-top: 30px;
    margin-right: 10px;
}

.best-seller-col h3 {
    border-bottom: 3px double;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    padding-bottom: 5px;
    text-transform: uppercase;
}

.collect {
    margin-top: 20px;
}

.best-seller-content{
	margin-right: 10px;
}

.best-collet-content{
	margin-right: 10px;
}

.best-look-content{
	margin-right: 10px;
}

/*.product-details {
    background: #f7f7f7 none repeat scroll 0 0;
    padding: 80px 0;
}*/

.single-new-product {
		width: 100%;
    display: block;
    margin-bottom: 20px;
    overflow: hidden;
    padding: 20px 0;
}

.single-new-product:last-child {
    margin-bottom: 0;
}

.single-new-product .product-img {
    display: inline-block;
    float: left;
    width: 30%;
}

.single-new-product .product-details {
    display: inline-block;
    width: 70%;
    float: left;
    padding: 0 0 0 20px;
    background: transparent;
    margin-top: -20px;
}

.best-seller-content .single-product-content .product-title h5 {
    font-size: 13px;
    margin-bottom: 5px;
}

.best-seller-content .product-action button {
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

/*邮件联系我们*/

.news-letter-area {
    background: rgba(0, 0, 0, 0) url("/static/banner/bg3.jpg") no-repeat fixed center center / cover;
    padding: 80px 0;
    position: relative;
    margin-left: -20px;
    margin-right:-20px;
}

.news-letter-area::before {
    background: black none repeat scroll 0 0;
    content: "";
    height: 100%;
    left: 0;
    opacity: 0.75;
    position: absolute;
    top: 0;
    width: 100%;
}

.subscribe-area {}

.subscribe-title {
    text-align: center;
}

.subscribe-title h3 {
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 30px;
}

.subscribe-title h3 span {
    color: #ff6464;
    font-size: 36px;
    padding-right: 15px;
}

.subscribe-title p {
    color: #e6e6e6;
    display: block;
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
    margin: 0;
}

.subscribe-title form {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    text-align: center;
    width: 582px;
}

.subscribe-form {
    text-align: left;
}

.subscribe-title input {
    border: 1px solid #d7d7d7;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    -o-border-radius: 0;
    border-radius: 0;
    height: 43px;
    line-height: 34px;
    padding: 0 19px 0 15px;
    width: 77%;
}

.subscribe-title button {
    background: #ff6464 none repeat scroll 0 0;
    border: 0 none;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    height: 43px;
    line-height: 41px;
    padding: 0 30px;
    position: absolute;
    right: 0;
    text-align: center;
    text-transform: uppercase;
    top: 0;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
}

.subscribe-title button:hover {
    background: #808080 none repeat scroll 0 0;
}

/* 商家服务 */
.service-area {
    padding: 80px 0;
    text-align: center;
}

.service {}

.single-service {
    -webkit-box-shadow: 0 5px 30px rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0 5px 30px rgba(0, 0, 0, 0.12);
    -ms-box-shadow: 0 5px 30px rgba(0, 0, 0, 0.12);
    -o-box-shadow: 0 5px 30px rgba(0, 0, 0, 0.12);
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.12);
    padding: 30px 0;
    -webkit-transition: all 1s ease 0s;
    -moz-transition: all 1s ease 0s;
    -ms-transition: all 1s ease 0s;
    -o-transition: all 1s ease 0s;
    transition: all 1s ease 0s;
}

.single-service:hover {
    -webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    -moz-box-shadow: 1px 25px 54px rgba(0, 0, 0, 0);
    -ms-box-shadow: 1px 25px 54px rgba(0, 0, 0, 0);
    -o-box-shadow: 1px 25px 54px rgba(0, 0, 0, 0);
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
}

.service .single-service i {
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    border-radius: 100%;
    color: #ff6464;
    font-size: 24px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    -webkit-transition: all 0.3 ease 0s;
    -moz-transition: all 0.3 ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    width: 50px;
}

.service .single-service:hover i {
    background: #ff6464 none repeat scroll 0 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    color: #ffffff;
}

.service .single-service h3 {
    font-size: 18px;
    margin: 20px 0 10px;
    text-transform: capitalize;
}

.service .single-service p {
    font-size: 14px;
}

.no-bor {
    border: none;
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

/*.best-seller-content .single-new-product .product-details {
    margin-bottom: auto;
}*/
</style>


