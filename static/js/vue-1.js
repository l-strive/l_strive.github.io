var app=new Vue({
    el:'#app',
    data:{
        message:"Hello Vue!"
    }
});

var app2=new Vue({
    el:'#app2',
    data:{
        message:'页面加载于'+new Date().toLocaleString(),
    }
});