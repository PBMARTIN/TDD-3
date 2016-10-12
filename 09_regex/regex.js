function findACount(str){
	var str = str.toLowerCase(),
		count = 0;
	for (i in str){
		if (str[i]=='a'){
			count ++
		}
	};
	return count
};

function areaCodeFinder(str){
	var area='';
	for (i in str){
		if (!isNaN(parseInt(str[i])) && area.length < 3){
			area += str[i]
		}
	};
	return parseInt(area)
};

function adjustUrlParameter(url, para){
	if (url.indexOf('?') == -1){
		return url+'?'+para
	};
	if (url.indexOf(para.slice(0,para.indexOf('='))) == -1){
		return url+'&'+para
	};
	return url.slice(0,url.indexOf(para.slice(0,para.indexOf('='))))+para;
};

function stringPlusPlus(str){
	if (isNaN(parseInt(str.slice(-1)))){
		return str+'1'
	};
	if (parseInt(str.slice(-1))+1 < 10){
		return str.slice(0,-1)+(parseInt(str.slice(-1))+1).toString()
	};
	return stringPlusPlus(str.slice(0,-1))+(parseInt(str.slice(-1))+1).toString().slice(-1)
}