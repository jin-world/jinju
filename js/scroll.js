//해당 위치값들이 저장될 전역배열을 만듬
var posArr = [];
//세로 위치값을 구할 요소들의 공통클래스명으로 선택
var scrolls = $(".myScroll");

//버튼활성화 구간 보정 수치값
var base = -200;

//로딩시 한번 위치값 저장
setPos();

//브라우저가 리사이즈 될때마다 다시 위치값 저장해서 갱신
$(window).on("resize", setPos);

//박스의 갯수만큼 반복을 돌면서 전역배열 posArr에
//각 박스의 세로 위치값 저장
function setPos(){
    //브라우저 리사이즈시 기존 값을 비우고
    //새로운 위치값을 다시 저장하기 위해 배열 초기화
    posArr = [];
    $(scrolls).each(function(index, data){
        posArr.push( $(data).offset().top );
    });
    
    console.log(posArr);
}

//브라우저 스크롤시 posArr에 저장되어 있는 세로 위치값에 따라서
//버튼 활성화
$(window).on("scroll",function(){
    var scroll =  $(window).scrollTop();

    //첫번째 박스 위치값보다 스크롤이 더 많이 되면
    //첫번째 버튼 활성화
    if(scroll >= posArr[0]+base) {
        $(".vNavi li a").removeClass("on");
        $(".vNavi li").eq(0).children("a").addClass("on");

        $(".myScroll").removeClass("on");
        $(".myScroll").eq(0).addClass("on");
    }
    //두번째 박스 위치값보다 스크롤이 더 많이 되면
    //두번째 버튼 활성화
    if(scroll >= posArr[1]+base) {
        $(".vNavi li a").removeClass("on");
        $(".vNavi li").eq(1).children("a").addClass("on");

        $(".myScroll").removeClass("on");
        $(".myScroll").eq(1).addClass("on");
    }
    //세번째 박스 위치값보다 스크롤이 더 많이 되면
    //세번째 버튼 활성화
    if(scroll >= posArr[2]+base) {
        $(".vNavi li a").removeClass("on");
        $(".vNavi li").eq(2).children("a").addClass("on");

        $(".myScroll").removeClass("on");
        $(".myScroll").eq(2).addClass("on");
    }
    //네번째 박스 위치값보다 스크롤이 더 많이 되면
    //네번째 버튼 활성화
    if(scroll >= posArr[3]+base) {
        $(".vNavi li a").removeClass("on");
        $(".vNavi li").eq(3).children("a").addClass("on");

        $(".myScroll").removeClass("on");
        $(".myScroll").eq(3).addClass("on");
    }
});

//세로 네비버튼 클릭시 해당 순번의 배열 위치값으로 이동
$(".vNavi li").on("click", function(e){
    e.preventDefault();
    var i = $(this).index();

    $("html,body").stop().animate({scrollTop: posArr[i]},1000);
})