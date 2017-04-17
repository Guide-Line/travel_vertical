/**
 * Created by jangdk on 2017-04-17.
 * 상품페이지 공통스크립트
 */

//url  ==> mobile_sample.html?pageNum=0101000
//pageNum : 7자리 활성화 코드
var str = location.href;
var pageNum = str.split("pageNum=")[1].substr(0,7)

window.onload = function(){
    naviaddChild() // 네비게이션 만들기
    //$("#p_navi").css("height",menuH);
    enterFrameFun();
}

$(window).resize(function(){
    //$("#p_navi").css("height",menuH);
    enterFrameFun()
})


// 링크 연동
$(document).ready(function(){
    var gnb_ifm = getIframeContent('navi_obj');

    var naviH = $("#p_navi").height();

    // when scroll
    $(window).scroll(function(){
        var num = 0;
        var aboveHeight = $("#p_navi").offset().top;
        var menuPos = new Array;
        var menuLength = $("#p_navi_area li").length-1;

        locate = $(window).scrollTop()+45;
        locate2 = $(window).scrollTop()+45+naviH; // 마지막 네비높이


        //scrolled down header's height
        if (locate >= aboveHeight){
            $("#p_navi_area").addClass('fixed');
            //console.debug("네비 접기")
            gnb_ifm.viewMenu("n")
            $("#navi_obj").css("height" , 75+"px")
            //console.debug("$(#p_navi_area).addClass(fixed); => 네비게이션 접기")

        } else {
            $("#p_navi_area").removeClass('fixed');
            //console.debug("네비 펴기")
            gnb_ifm.viewMenu("y")
            $("#navi_obj").css("height" , navi_height+"px")
            //console.debug("$(#p_navi_area).removeClass(fixed); => 네비게이션 펼치기")
        }
    });
    setTimeout(function(){  $("#navi_obj").css("height" , navi_height+"px") }, 300);
})

var navi_height;
function naviaddChild(){

    /*$("#navi_obj").attr("src" , "http://eventimg.auction.co.kr/md/auction/095E70B02A/w_gnb.html?ver=0331_4")*/
    $("#navi_obj").attr("src" , "http://eventv2qadv01am.auction.co.kr/Event3/Stable/TravelStore2/ifrmMenu2.aspx"+"?pageNum="+pageNum)
    /*$("#navi_obj").attr("src" , "dev/w_gnb.html")*/

    //console.debug("index => gnb addChild" + " : " + "dev/w_gnb.html")
    $("#navi_obj").load(function(){
        //console.debug("메뉴의 세로값 " + " : " + navi_height);
        //alert("메뉴의 세로값 " + " : " + navi_height);
    })
    setTimeout(function(){  $("#navi_obj").css("height" , navi_height+"px") }, 300);
}
//스크롤 및 리사이즈시 호출되는 함수 :: onload 이후에 실행
function enterFrameFun(){
    //prd_top = $(".prd_area").offset().top;
    //$("#p_navi").css("height" , navi_height+"px");//네비게이션이 fixed 처리되고 난후에도 그 공간만큼 잡아줌

}
/*var totol_num = 15;
 var page_view_num=7;
 alert(Math.ceil(totol_num / page_view_num))*/

/*하단 상품 리로드 관련*/
function reload_prdList(seven_code){

    $("#prd_list").attr("src" , "http://eventv2qadv01am.auction.co.kr/Event3/Stable/TravelStore2/ContentsList.aspx?pageNum=" + seven_code)
    //console.debug("index => reload_prdList(seven_code)  : " + "~~list.aspx?index="+ seven_code); //7자리 값을 받는다
    //alert("index => reload_prdList(seven_code)  : " + "~~list.aspx?index="+ seven_code); //7자리 값을 받는다
}
//iframe 내부 제어함수
function getIframeContent(id){
    var ifrm = document.getElementById(id);
    return ifrm.contentWindow || ifrm.contentDocument;
}