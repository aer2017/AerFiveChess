//封装获取元素函数
var getElem = function(selector){
	return document.querySelector(selector);
}
var getAllElem = function(selector){
	return document.querySelectorAll(selector);
}
//封装获取/设置元素样式函数
var getCls = function(element){
	return element.getAttribute('class');
}
var setCls = function(element,cls){
	return element.setAttribute('class',cls);
}
//为元素添加样式
var addCls = function(element,cls){
	var baseCls = getCls(element);
	if(baseCls.indexOf(cls)===-1){
		setCls(element,baseCls+' '+cls);
	}
}
//为元素删除样式
var delCls = function(element,cls){
	var baseCls = getCls(element);
	if(baseCls.indexOf(cls)!=-1){
		setCls(element,baseCls.split(cls).join(' ').replace(/\s+/g,' '));
	}
}