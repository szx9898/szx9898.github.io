// 设置页脚博主会动的心
$(document).ready(function(e){
    $('.copyright').html('<span style="color:#000000">©2020 <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> 梓里</span>');
})
// 添加up酱
// 添加图片top
var top_up = "<img id='upj' class='upj' style='max-width: 1000%; transform: translate(-70px,-70px);' src='https://cdn.jsdelivr.net/gh/lete114/CDN/Use/up.gif' title='回到顶部' >";
// 添加到返回顶部按钮下
document.getElementById("go-up").innerHTML += top_up;
// 移除页脚样式
// var app = document.getElementById('footer');
// app.removeAttribute('id')