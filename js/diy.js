// 设置页脚博主会动的心
$(document).ready(function(e){
    $('.copyright').html('©2020 <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> 梓里');
})
// 添加up酱
// 添加图片top
var top_up = "<img id='upj' class='upj' style='max-width: 1000%; transform: translate(-70px,-70px);' src='https://cdn.jsdelivr.net/gh/lete114/CDN/Use/up.gif' title='回到顶部' >";
// 添加到返回顶部按钮下
document.getElementById("go-up").innerHTML += top_up;
// 移除页脚样式
// var app = document.getElementById('footer');
// app.removeAttribute('id')

// 背景变透明
// var full_page = document.getElementsByClassName("full_page");
// if (full_page.length != 0) {
//   full_page[0].style.background = "transparent";
// }
// 手机侧边栏默认不展开
var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
    "menus_item_child"
);
var menus_expand = mobile_sidebar_menus.getElementsByClassName("menus-expand");
for (var i = 0; i < menus_item_child.length; i++) {
    menus_item_child[i].style.display = "none";
    menus_expand[i].className += " menus-closed";
}
