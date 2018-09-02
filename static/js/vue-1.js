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

var app3=new Vue({
    el:'#app3',
    data:{
        seen:true
    }
});

var app4=new Vue({
    el:'#app4',
    data:{
        todos:[
            {text:"学习Javascript"},
            {text:"学习Vue"},
            {text:"做个好项目"}
        ]
    }
});

