/**
 * author:Beginner
 * email:BeginnerMind@163.com
 * update:20190805
 * description:积累总结----常用方法、js功能扩展。
 */
var oG={
	init:function(){
        this.basePath = "/gfyun-app-web/";
		this.deferInit();
		this.extends();
	},
	//延迟触发
	deferInit:function(){
		var _SL=this;
		$(function(){
            
		});
    },
    numberLength:function(num,len){
        return ("0000000000000000"+num).substr(-len);
    },
    getRomanNum:function(num){
        var _romanNum=['Ⅰ','Ⅱ','Ⅲ','Ⅳ','Ⅴ','Ⅵ','Ⅶ','Ⅷ','Ⅸ','Ⅹ','Ⅺ','Ⅻ'];
        return _romanNum[Number(num)-1]
	},
	/**
     * 获取url参数
     * var oUrlValues=oG.getUrlSearchObject(location.search);
     * var _id=decodeURI(oUrlValues.id);
     */
    getUrlSearchObject:function(search){
        var url = search.replace(/^\?/,'');
        var values=url.split('&');
        var oValues={};
        for(var i=0;i<values.length;i++){
            var _array=values[i].split('=');
            oValues[_array[0]]=_array[1];
        }
        return oValues;
	},
	toNewDate: function(str) {
		try {
			var aTime = str.split(/[- : \/]/);
			aTime[3] = aTime[3] ? aTime[3] : '00';
			aTime[4] = aTime[4] ? aTime[4] : '00';
			aTime[5] = aTime[5] ? aTime[5] : '00';
			var a = new Date(aTime[0], aTime[1] - 1, aTime[2], aTime[3], aTime[4], aTime[5]);
			return a;
		} catch(e) {
			var a = new Date('1970', '00', '01', '00', '00', '00');
			return a;
		}
	},
	timeMiniAdd:function(oDate,num){
		a = oDate.getTime();
		a = a + num * 60 * 1000;
		a = new Date(a);
		return a;
	},
    getTimeStamp:function(){
        return new Date().getTime();
	},
	toFixed: function(num, n) {
		var _wei=Math.pow(10,n);
		num=parseFloat(num);
		num=Math.round(num*_wei)/_wei;
		return num;
	},
	getCookie: function(c_name) {
		if(document.cookie.length > 0) {
			c_start = document.cookie.indexOf(c_name + "=")
			if(c_start != -1) {
				c_start = c_start + c_name.length + 1
				c_end = document.cookie.indexOf(";", c_start)
				if(c_end == -1) c_end = document.cookie.length
				return unescape(document.cookie.substring(c_start, c_end))
			}
		}
		return ""
	},
	setCookie: function(c_name, value, expiredays) {
		var exdate = new Date()
		exdate.setDate(exdate.getDate() + expiredays)
		document.cookie = c_name + "=" + escape(value) + ";" + ((expiredays == null) ? "" : " expires=" + exdate.toGMTString())
	},
	checkCookie: function(c_name) {
		var username = oG.getCookie(c_name);
		// console.log(Object(username));
		if(username != null && username != '') {
			return true;
		} else {
			return false;
		}
	},
	toThousands: function(num) {
		var result = [],
			counter = 0;
		num = (num || 0).toString().split('');
		for(var i = num.length - 1; i >= 0; i--) {
			counter++;
			result.unshift(num[i]);
			if(!(counter % 3) && i != 0) {
				result.unshift(',');
			}
		}
		return result.join('');
	},
	getWeekName:function(week){
		var aWeekName=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
		return aWeekName[week];
	},
	sortData: function(_data, _sortkey, _isup) {
		_isup = _isup || 'up';

		function compare() {
			return function(a, b) {
				var v1 = a[_sortkey];
				var v2 = b[_sortkey];
				if(_isup == 'up') {
					return v1 - v2;
				} else {
					return v2 - v1;
				}
			}
		}
		return _data.sort(compare());
	},
	sortDate: function(_data, _sortkey, _isup) {
		_isup = _isup || 'up';

		function compare() {
			return function(a, b) {
				var v1 = oG.toNewDate(a[_sortkey]);
				var v2 = oG.toNewDate(b[_sortkey]);
				if(_isup == 'up') {
					return v1 - v2;
				} else {
					return v2 - v1;
				}
			}
		}
		return _data.sort(compare());
	},
	/**
	 * 匹配国内电话号码
	 * @param {*} str (0511-4405222 或 021-87888822)
	 */
    istell:function(str) {
        var result = str.match(/\d{3}-\d{8}|\d{4}-\d{7}/);
        if (result == null) return false;
        return true;
    },
    //匹配身份证(15位或18位)
    isidcard:function(str) {
        var result = str.match(/\d{15}|\d{18}/);
        if (result == null) return false;
        return true;
    },
    //移动电话
    checkMobile:function(str) {
        if (!(/^1[3|5|8][0-9]\d{4,8}$/.test(str))) {
            return false;
        }
        return true;
    },
    // 判断输入是否是有效的电子邮件
    isemail:function(str) {
        var result = str.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
        if (result == null) return false;
        return true;
    },



	/**
	 * 格式化日期 oG.dateFormat(format,date);
	 * @param {*} format yyyy_MM_dd hh:mm:ss:SS 星期w 第q季度
	 * @param {*} date 传入date格式
	 */
    dateFormat:function(format, date) {
        if (!date) {
            date = new Date();
        }
        var Week = ['日', '一', '二', '三', '四', '五', '六'];
        var o = {
            "y+": date.getYear(), //year
            "M+": date.getMonth() + 1, //month
            "d+": date.getDate(), //day
            "h+": date.getHours(), //hour
            "m+": date.getMinutes(), //minute
            "s+": date.getSeconds(), //second
            "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
            "S": date.getMilliseconds(), //millisecond
            "w": Week[date.getDay()]
        }
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    },
    extends: function() {
		/**
		 * 
		 * new Date().format('yyyy-MM-dd hh:mm:ss:S 星期w 第q季度')
		 */
		Date.prototype.format = function(format) { //"yyyy-MM-dd hh:mm:ss"
			var Week = ['日', '一', '二', '三', '四', '五', '六'];
			var o = {
				"M+": this.getMonth() + 1, //month
				"d+": this.getDate(), //day
				"h+": this.getHours(), //hour
				"m+": this.getMinutes(), //minute
				"s+": this.getSeconds(), //second
				"q+": Math.floor((this.getMonth() + 3) / 3), //quarter
				"S": this.getMilliseconds(), //millisecond
				"w": Week[this.getDay()]
			}
			if(/(y+)/.test(format)) {
				format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
			}
			for(var k in o) {
				if(new RegExp("(" + k + ")").test(format)) {
					format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
				}
			}
			return format;
		}
		//字符串批量替换
		String.prototype.replaceAll = function(s1, s2) {
			return this.replace(new RegExp(s1, "gm"), s2);
		}
		// 返回字符串的实际长度, 一个汉字算2个长度   
		String.prototype.strlen = function () {  
			return this.replace(/[^\x00-\xff]/g, "**").length;
		}
		//字符串去空格
		String.prototype.trim = function () {
			return this.replace(/(^\s*)|(\s*$)/g, "");
		}
		String.prototype.trimAll = function () {
			return this.replace(/\s+/g, "");
		}
		//判断某个值是否在数组中
		Array.prototype.in_array = function (e) {
			for (i = 0; i < this.length; i++) {
				if (this[i] == e)
					return true;
			}
			return false;
		}
		//判断某个值在数组中的位置
		Array.prototype.indexOf = function (e) {
			for (i = 0; i < this.length; i++) {
				if (this[i] == e)
					return i;
			}
			return -1;
		}

	},
    
}
oG.init();


