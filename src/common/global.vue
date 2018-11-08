<script>
var list = {
	men: [{
		id: 1,
		title: '男士连帽白色风衣男春秋短款2017新款学生帅气冬季男生外套潮',
		price: 299,
		originPrice: 529,
		url: 'static/singlepro/men1.jpg',
		imgUrl: ['static/singlepro/men1.jpg', 'static/singlepro/men1.jpg', 'static/singlepro/men1.jpg', 'static/singlepro/men1.jpg'],
		isNew: true,
		collect: 1,
		isRecomment: false,
		isHot: true,
		isLook: false,
		isCollect: false,
		scoring: 4,
		visit: 5,
		hot: 5,
		isExclusive: false,
		best: false
	}, {
		id: 2,
		title: '官方旗舰店秋款男装外套2017新款秋季帅气潮牌欧美休闲风衣男',
		price: 239,
		originPrice: 379,
		url: 'static/singlepro/men5.jpg',
		imgUrl: ['static/singlepro/men5.jpg', 'static/singlepro/men6.jpg', 'static/singlepro/men8.jpg', 'static/singlepro/men9.jpg'],
		isNew: true,
		collect: 1,
		isRecomment: false,
		isHot: true,
		isLook: false,
		isCollect: false,
		scoring: 4,
		visit: 5,
		hot: 5,
		isExclusive: false,
		best: false
	}, {
		id: 3,
		title: '连帽风衣男 2017秋季新款街头时尚青年字母印花简约短款外套',
		price: 199,
		originPrice: 349,
		url: 'static/singlepro/men10.jpg',
		imgUrl: ['static/singlepro/men10.jpg', 'static/singlepro/men11.jpg', 'static/singlepro/men12.jpg'],
		isNew: true,
		collect: 1,
		isRecomment: false,
		isHot: false,
		isLook: true,
		isCollect: false,
		scoring: 4,
		visit: 5,
		hot: 5,
		isExclusive: false,
		best: false
	}, {
		id: 4,
		title: '秋季风衣男连帽迷彩印花青年男装秋装2017新款潮男外套时尚',
		price: 219,
		originPrice: 369,
		url: 'static/singlepro/men13.jpg',
		imgUrl: ['static/singlepro/men13.jpg', 'static/singlepro/men14.jpg', 'static/singlepro/men15.jpg', 'static/singlepro/men16.jpg'],
		isNew: true,
		collect: 1,
		isRecomment: false,
		isHot: true,
		isLook: false,
		isCollect: false,
		scoring: 4,
		visit: 5,
		hot: 5,
		isExclusive: false,
		best: false
	}, {
		id: 5,
		title: '连帽休闲风衣男 2017秋季新款青年时尚拼色短款夹层男装外套',
		price: 219,
		originPrice: 349,
		url: 'static/singlepro/men17.jpg',
		imgUrl: ['static/singlepro/men17.jpg', 'static/singlepro/men18.jpg', 'static/singlepro/men19.jpg', 'static/singlepro/men20.jpg'],
		isNew: true,
		collect: 1,
		isRecomment: false,
		isHot: false,
		isLook: true,
		isCollect: false,
		scoring: 4,
		visit: 5,
		hot: 5,
		isExclusive: false,
		best: false
	}],
	women: [{
		id: 6,
		title: '官方旗舰店秋冬女装长袖牛仔夹克 纯棉宽松翻领时尚刺绣外套女',
		price: 239,
		originPrice: 349,
		url: 'static/singlepro/women1.jpg',
		imgUrl: ['static/singlepro/women1.jpg', 'static/singlepro/women2.jpg', 'static/singlepro/women3.jpg', 'static/singlepro/women4.jpg'],
		isNew: false,
		collect: 1,
		isRecomment: false,
		isHot: false,
		isLook: true,
		isCollect: false,
		scoring: 4,
		visit: 5,
		hot: 5,
		isExclusive: true,
		best: {
			timeEnd: '2020/09/01',
			disCount: '-12%'
		}
	}, {
		id: 7,
		title: '官方旗舰店冬季新款女装轻薄羽绒服女纯色防风外套女士上衣',
		price: 279,
		originPrice: 619,
		url: 'static/singlepro/women5.jpg',
		imgUrl: ['static/singlepro/women5.jpg', 'static/singlepro/women6.jpg', 'static/singlepro/women7.jpg'],
		isNew: false,
		collect: 1,
		isRecomment: false,
		isHot: false,
		isLook: false,
		isCollect: true,
		scoring: 4,
		visit: 5,
		hot: 5,
		isExclusive: true,
		best: {
			timeEnd: '2020/09/01',
			disCount: '-12%'
		}
	}, {
		id: 8,
		title: '新款冬天衣服女2017女装软妹毛衣女 绑带宽松可爱小清新针织衫',
		price: 149,
		originPrice: 249,
		url: 'static/singlepro/women8.jpg',
		imgUrl: ['static/singlepro/women8.jpg', 'static/singlepro/women9.jpg', 'static/singlepro/women10.jpg', 'static/singlepro/women11.jpg'],
		isNew: false,
		collect: 1,
		isRecomment: false,
		isHot: false,
		isLook: false,
		isCollect: true,
		scoring: 4,
		visit: 5,
		hot: 5,
		isExclusive: true,
		best: {
			timeEnd: '2020/09/01',
			disCount: '-12%'
		}
	}, {
		id: 9,
		title: '秋装女装长袖风衣女春秋2017新款 休闲宽松连帽撞色女士外套女',
		price: 239,
		originPrice: 369,
		url: 'static/singlepro/women12.jpg',
		imgUrl: ['static/singlepro/women12.jpg', 'static/singlepro/women13.jpg', 'static/singlepro/women14.jpg', 'static/singlepro/women15.jpg'],
		isNew: false,
		collect: 1,
		isRecomment: false,
		isHot: false,
		isLook: false,
		isCollect: true,
		scoring: 4,
		visit: 5,
		hot: 5,
		isExclusive: true,
		best: {
			timeEnd: '2020/09/01',
			disCount: '-12%'
		}
	}, {
		id: 10,
		title: '秋冬新款2017女装长袖卫衣外套女开衫拉链刺绣连帽宽松上衣',
		price: 179,
		originPrice: 299,
		url: 'static/singlepro/women16.jpg',
		imgUrl: ['static/singlepro/women16.jpg', 'static/singlepro/women17.jpg', 'static/singlepro/women18.jpg', 'static/singlepro/women19.jpg'],
		isNew: false,
		collect: 1,
		isRecomment: false,
		isHot: false,
		isLook: false,
		isCollect: false,
		scoring: 4,
		visit: 5,
		hot: 5,
		isExclusive: true,
		best: {
			timeEnd: '2020/09/01',
			disCount: '-12%'
		}
	}],
	bigBannerList:[
		'/static/slider/41.jpg',
    '/static/slider/42.jpg'
	],
	categoryBannerList:[
		{	
			url:'/static/banner/banner1.jpg',
			title:'服装新品'
		},
		{
			url:'/static/banner/banner2.jpg',
			title:'女装'
		},{
			url:'/static/banner/banner3.jpg',
			title:'男装'
		}
	],
	constantMsg:{
		address:'广西省桂林市临桂区临桂镇桂康路金水湾-翠园雅筑竹景苑A2-4-6-A',
		qq:'QQ:1833317387',
		email:'1833317387@qq.com',
	}
}
export default{
	list,//全局数据
}	
</script>