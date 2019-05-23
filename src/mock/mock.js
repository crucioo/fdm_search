import Mock from 'mockjs';

const list=[{
    id:1,
    title:"关于贷款的五级分类",
    isHot:true,
    isGood:false,
    type:"知识",
    label:"信贷/贷款五级分类",
    goodSum:69,
    commentSum:23,
    time:"3分钟前",
    pic:"https://user-gold-cdn.xitu.io/2019/3/27/169bb255233ce443?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1"
},{
    id:2,
    title:"质押和抵押的区别",
    isHot:true,
    isGood:false,
    type:"知识",
    label:"信贷/质押/抵押",
    goodSum:11,
    commentSum:23,
    time:"23分钟前",
    pic:""
},{
    id:3,
    title:"什么是应降为降？",
    isHot:false,
    isGood:false,
    type:"问题",
    label:"贷款",
    goodSum:23,
    commentSum:23,
    time:"1小时前",
    pic:"https://user-gold-cdn.xitu.io/2019/3/27/169bb255233ce443?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1"
},{
    id:4,
    title:"什么是展期？",
    isHot:false,
    isGood:false,
    type:"问题",
    label:"信贷",
    goodSum:64,
    commentSum:23,
    time:"1天前",
    pic:""
},{
    id:5,
    title:"什么是阿尔法套利？",
    isHot:false,
    isGood:false,
    type:"问题",
    label:"证券/股票",
    goodSum:64,
    commentSum:23,
    time:"2天前",
    pic:""
},{
    id:6,
    title:"什么是金融期货？",
    isHot:false,
    isGood:false,
    type:"问题",
    label:"证券/期货",
    goodSum:64,
    commentSum:23,
    time:"1天前",
    pic:"https://user-gold-cdn.xitu.io/2019/3/27/169bb255233ce443?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1"
},{
    id:7,
    title:"金融期货的主要种类有哪些金融期货的主要种类有哪些金融期货的主要种类有哪些金融期货的主要种类有哪些金融期货的主要种类有哪些金融期货的主要种类有哪些金融期货的主要种类有哪些？",
    isHot:false,
    isGood:false,
    type:"问题",
    label:"证券/期货",
    goodSum:64,
    commentSum:23,
    time:"1小时前",
    pic:"https://user-gold-cdn.xitu.io/2019/3/27/169bb255233ce443?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1"
},{
    id:8,
    title:"金融期货交易与金融现货交易的区别是什么？",
    isHot:false,
    isGood:false,
    type:"问题",
    label:"证券/期货",
    goodSum:64,
    commentSum:23,
    time:"1天前",
    pic:"https://user-gold-cdn.xitu.io/2019/3/27/169bb255233ce443?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1"
},{
    id:9,
    title:"关于贷款的五级分类",
    isHot:true,
    isGood:false,
    type:"知识",
    label:"信贷/贷款五级分类",
    goodSum:69,
    commentSum:23,
    time:"3分钟前",
    pic:"https://user-gold-cdn.xitu.io/2019/3/27/169bb255233ce443?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1"
},{
    id:10,
    title:"质押和抵押的区别",
    isHot:true,
    isGood:false,
    type:"知识",
    label:"信贷/质押/抵押",
    goodSum:11,
    commentSum:23,
    time:"23分钟前",
    pic:""
},{
    id:11,
    title:"什么是应降为降？",
    isHot:false,
    isGood:false,
    type:"问题",
    label:"贷款",
    goodSum:23,
    commentSum:23,
    time:"1小时前",
    pic:"https://user-gold-cdn.xitu.io/2019/3/27/169bb255233ce443?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1"
},{
    id:12,
    title:"什么是展期？",
    isHot:false,
    isGood:false,
    type:"问题",
    label:"信贷",
    goodSum:64,
    commentSum:23,
    time:"1天前",
    pic:""
},{
    id:13,
    title:"什么是阿尔法套利？",
    isHot:false,
    isGood:false,
    type:"问题",
    label:"证券/股票",
    goodSum:64,
    commentSum:23,
    time:"2天前",
    pic:""
},{
    id:14,
    title:"什么是金融期货？",
    isHot:false,
    isGood:false,
    type:"问题",
    label:"证券/期货",
    goodSum:64,
    commentSum:23,
    time:"1天前",
    pic:"https://user-gold-cdn.xitu.io/2019/3/27/169bb255233ce443?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1"
},{
    id:15,
    title:"金融期货的主要种类有哪些金融期货的主要种类有哪些金融期货的主要种类有哪些金融期货的主要种类有哪些金融期货的主要种类有哪些金融期货的主要种类有哪些金融期货的主要种类有哪些？",
    isHot:false,
    isGood:false,
    type:"问题",
    label:"证券/期货",
    goodSum:64,
    commentSum:23,
    time:"1小时前",
    pic:"https://user-gold-cdn.xitu.io/2019/3/27/169bb255233ce443?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1"
},{
    id:16,
    title:"金融期货交易与金融现货交易的区别是什么？",
    isHot:false,
    isGood:false,
    type:"问题",
    label:"证券/期货",
    goodSum:64,
    commentSum:23,
    time:"1天前",
    pic:"https://user-gold-cdn.xitu.io/2019/3/27/169bb255233ce443?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1"
}];

Mock.mock(/\/fdm\/homelist\.json/,'get',function(options){
    let url = options.url,arr=[],result,obj={};
    arr = url.substring(url.indexOf('?')+1).split('&');
    for(let i=0;i<arr.length;i++){
        result = arr[i].split('=');
        obj[result[0]] = result[1];
    }

    if(parseInt(obj.page) <= 0){
        return [];
    }

    var start=0,newList=[];
    for(let i=0;i<list.length;i++){
        if((i+1)%(parseInt(obj.size))===0){
            newList.push(list.slice(start,i+1));
            start=i+1;
        }
        if(i===list.length-1){
            if(list.length%obj.size!==0){
                newList.push(list.slice(start));
            }
        }
    }

    if(parseInt(obj.page)>newList.length){
        return [];
    }

    return {
        list:newList[parseInt(obj.page)-1],
        pageTotal:newList.length
    }
});

export default Mock;

