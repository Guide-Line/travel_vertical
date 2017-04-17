/**
 * Created by jangdk on 2017-04-17.
 */

//url  ==> mobile_sample.html?pageNum=0101000
//pageNum : 7자리 활성화 코드

var str = location.href;
var pageNum = str.split("pageNum=")[1].substr(0,7)
var gnb_ifm;
window.onload = function(){
    naviaddChild() // 네비게이션 만들기

    //$("#p_navi").css("height",menuH);
    enterFrameFun();
}

$(window).resize(function(){
    //$("#p_navi").css("height",menuH);
    enterFrameFun()
})

$(document).ready(function(){
    gnb_ifm = getIframeContent('navi_obj');

    // when scroll
    $(window).scroll(function(){

        var aboveHeight = $("#p_navi").offset().top;


        locate = $(window).scrollTop();
        //locate2 = $(window).scrollTop()+menuH; // 마지막 네비높이

        //scrolled down header's height
        if (locate >= aboveHeight){
            $("#p_navi_area").addClass('fixed');
            gnb_ifm.viewMenu("n")
            gnb_ifm.reSize_parent()//gnb 리사이즈 호출
            //console.debug("$(#p_navi_area).addClass(fixed); => 네비게이션 접기")
        } else {
            $("#p_navi_area").removeClass('fixed');
            gnb_ifm.viewMenu("y")
            gnb_ifm.reSize_parent()//gnb 리사이즈 호출
            // console.debug("$(#p_navi_area).removeClass(fixed); => 네비게이션 펼치기")
        }
        enterFrameFun()
    });
    setTimeout(function(){ gnb_ifm.reSize_parent() }, 300);
});

var navi_height;
function naviaddChild(){

    $("#navi_obj").attr("src" , "http://eventv2qadv01am.auction.co.kr/Event3/Stable/TravelStore2/mifrmMenu2.aspx"+"?pageNum="+pageNum)
    /*$("#navi_obj").attr("src" , "http://eventimg.auction.co.kr/md/auction/095E70B02A/m_gnb.html?ver=0331_4")*/
    /*$("#navi_obj").attr("src" , "dev/m_gnb.html")*/
    //console.debug("index => gnb addChild" + " : " + "dev/m_gnb.html")
    $("#navi_obj").load(function(){
        //console.debug("메뉴의 세로값 " + " : " + navi_height);
    })
    resizeFun()

    setTimeout(function(){ gnb_ifm.reSize_parent() }, 500);


}

//스크롤 및 리사이즈시 호출되는 함수 :: onload 이후에 실행
function enterFrameFun(){
    //$("#p_navi").css("height" , navi_height+"px");//네비게이션이 fixed 처리되고 난후에도 그 공간만큼 잡아줌
    resizeFun()
}
function resizeFun(){
    var docWidth = document.body.offsetWidth;
    if(docWidth < 640){
        $("#navi_obj").css("width" ,docWidth + "px")
    }else{
        $("#navi_obj").css("width" ,640 + "px")
    }
}


/*하단 상품 리로드 관련*/
function reload_prdList(seven_code){
    $("#prd_list").attr("src" , "http://eventv2qadv01am.auction.co.kr/Event3/Stable/TravelStore2/mContentsList.aspx?pageNum=" + seven_code)

    //console.debug("index => reload_prdList(seven_code)  : " + "~~list.aspx?index="+ seven_code); //7자리 값을 받는다
    //alert("index => reload_prdList(seven_code)  : " + "~~list.aspx?index="+ seven_code); //7자리 값을 받는다
}

//iframe 내부 제어함수
function getIframeContent(id){
    var ifrm = document.getElementById(id);
    return ifrm.contentWindow || ifrm.contentDocument;
}
