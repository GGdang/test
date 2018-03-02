Vue.component('leftNavMenu', {
    template:'#leftNavMenu',
    data:function(){
        return{
            menu:['回到首頁','關於我們','服務流程','服務流程','最新消息','作品集','聯絡我們','登入帳號'],
        }
    }
})

var leftNav=new Vue({
    el:'#leftNav',
    data:{
        hao:5555,
    }
})

Vue.component('midNav',{
    template:'#midNav',
    data:function(){
        return{
            option:[{en:'About Us',ch:'關於我們'},{en:'News',ch:'最新消息'},{en:'Projects',ch:'作品介紹'},{en:'Contact Us',ch:'聯絡我們'}]
        }
    }
})

var midNav=new Vue({
    el:'.midNav',
})

Vue.component('content-two',{
    template:'#content-two',
    props:{
        propNews:null,
    },
    data:function(){
        return{
            newsImg:[],
        }
    },
    created:function(){
        for(var i=0 ; i<this.propNews.length;i++){
            this.newsImg.push('images/'+this.propNews[i].newsImg)
        }
        console.log(this.newsImg);
    }
})

var content=new Vue({
    el:'.content',
    data:{
        news:[{'newsImg':'CafeRoom_001.jpg','newsText1':'美式咖啡店','newsText2':'鬧區中尋找寧靜。','newsDate':'2018-01-11'},
              {'newsImg':'DressingRoom_001.jpg','newsText1':'大更衣間','newsText2':'每個女人的夢想小天地。','newsDate':'2018-01-25'}, 
              {'newsImg':'Room_001.jpg','newsText1':'別墅主臥房','newsText2':'避暑度假，休閒放鬆。','newsDate':'2018-02-10'},
              {'newsImg':'TrumpBuilding_001.jpg','newsText1':'美國川普大樓','newsText2':'觀光旅遊的好去處。','newsDate':'2018-02-20'}]
    },
})

$(function(){
    $('.leftNav li:first').click(function(){
        $('.leftNavMenu').animate({left:'0'},500);
    });
    $('.closeBtn').click(function(){
        $('.leftNavMenu').animate({left:'-250px'},500)
    });
    $('.leftNav li:eq(1)').click(function(){
        $(this).animate({width:'250px'},800);
        $(".leftNav li:eq(1) input").css({display:'inline'});
        $(".leftNav li:eq(1) input").focus();
    })
    $('.leftNav li:eq(1) input').blur(function(){
        $('.leftNav li:eq(1)').animate({width:'50px'},800)
        $(".leftNav li:eq(1) input").css({display:'none'});
    })
    if($(document).scrollTop()>100){
        $('.upTop').css({display:'table'});
    }
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $('.upTop').fadeIn();
            $('.upTop').css({display:'table'});
        }else{
            $('.upTop').fadeOut();
        }
        if($(window).scrollTop()>350){
            $('.midNav').animate({opacity:1},800);
            $('.midNav ul li:even').delay(800).animate({opacity:1},800);
            $('.midNav ul li:odd').delay(1600).animate({opacity:1},800);
            $('.content').animate({opacity:'1',top:'0'},2000);
        }
        if($(window).scrollTop()>550){
            $('.content').animate({opacity:'1',top:'0'},2000);
        }
    })
    if($(window).scrollTop()>400){
        $('.midNav').animate({opacity:1},800);
        $('.midNav ul li:even').delay(800).animate({opacity:1},800);
        $('.midNav ul li:odd').delay(1600).animate({opacity:1},800);
        
    }
    if($(window).scrollTop()>600){
        $('.content').animate({opacity:'1',top:'0'},2000);
    }
    $('.upTop').click(function(e){
        $("html,body").stop(true,false).animate({scrollTop:0},800);
        event.preventDefault();
    })
    
})




