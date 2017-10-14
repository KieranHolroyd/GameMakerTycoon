// Initialize Variables
var gamecount = 0; //Games Released
var cash = 0; //Cash
var cps = 0; //Cash Per Second
var html = 0; //Default Html Upgrades
var css = 0; //Default Css Upgrades
var js = 0; //Default Js Upgrades
var ts = 0; //Default Ts Upgrades
var cs = 0; //Default cs Upgrades
var cpp = 0; //Default cpp Upgrades
var swift = 0; //Default swift Upgrades
var cost = 0; //Default Cost
var width = 0; //Width Of Progress Bar
var htmlcost = 0; //Init Htmlcost
var csscost = 1000; //Init CssCost
var cashview = 0; //Init cashview
var htmlval = 0; //Init htmlvar
var cssval = 0; //Init cssval
function releaseNewGame() {
	if (width >= 100) {
		gamecount ++;
		width = 0;
		updateView();
	}
}
function tick() {
  htmlval=html*5;
  cssval=css*20;
  jsval=js*250;
  tsval=ts*1000;
  csval=cs*2500;
  cppval=cpp*5000;
  swiftval=swift*15000;
	if (html>=1) {cps=((gamecount)*((htmlval+cssval+jsval+tsval+csval+cppval+swiftval)));}else{cps=gamecount}
	cash+=Math.round(cps);
	updateView();
  save();
}
if(localStorage.getItem("saveGame_exists") != null){
	load();
}
function save() {
	localStorage.setItem("gamecount", gamecount);
  localStorage.setItem("cash", cash);
  localStorage.setItem("html", html);
  localStorage.setItem("css", css);
  localStorage.setItem("js", js);
  localStorage.setItem("ts", ts);
  localStorage.setItem("cs", cs);
  localStorage.setItem("cpp", cpp);
  localStorage.setItem("swift", swift);
  localStorage.setItem("saveGame_exists", 1);
}
function load() {
	gamecount = localStorage.getItem("gamecount");
  cash = localStorage.getItem("cash");
  html = localStorage.getItem("html");
  css = localStorage.getItem("css");
  js = localStorage.getItem("js");
  ts = localStorage.getItem("ts");
  cs = localStorage.getItem("cs");
  cpp = localStorage.getItem("cpp");
  swift = localStorage.getItem("swift");
	gamecount = parseInt(gamecount);
  cash = parseInt(cash);
  html = parseInt(html);
  css = parseInt(css);
  js = parseInt(js);
  ts = parseInt(ts);
  cs = parseInt(cs);
  cpp = parseInt(cpp);
  swift = parseInt(swift);
	updateView();
}
function newGameStartWait() {
	if (width<100) {
		width+=0.05;  
  	document.getElementById('progressbar').style.width = width + '%';
	}
}
function updateView() {
	if (html>0) {
		htmlcost=Math.round((html+10)*1.1)*html;
	} else {
		htmlcost=10;
	}
	if (css>0) {
		csscost=Math.round((css+1000)*1.1)*css;
	} else {
		csscost=1000;
	}
  if (js>0) {
		jscost=Math.round((js+50000)*1.1)*js;
	} else {
		jscost=50000;
	}
  if (ts>0) {
		tscost=Math.round((ts+400000)*1.1)*ts;
	} else {
		tscost=400000;
	}
  if (cs>0) {
		cscost=Math.round((cs+1250000)*1.1)*cs;
	} else {
		cscost=1250000;
	}
  if (cpp>0) {
		cppcost=Math.round((cpp+5000000)*1.1)*cpp;
	} else {
		cppcost=5000000;
	}
  if (swift>0) {
		swiftcost=Math.round((swift+12500000)*1.1)*swift;
	} else {
		swiftcost=12500000;
	}
	cashview=cash.toLocaleString('en');
	document.title="$"+cashview+" Cash";
	$('#cashCount').html('$'+cashview+' Cash');
  cpsview=(cps*10).toLocaleString('en');
  $('#cashPerSec').html("Cash Per Second: $"+cpsview);
	$('#gameCount').html(gamecount+' Games Released');
  htmlcostview=htmlcost.toLocaleString('en');
	$('#htmlInfo').html(html+" | $"+htmlcostview);
  csscostview=csscost.toLocaleString('en');
	$('#cssInfo').html(css+" | $"+csscostview);
  jscostview=jscost.toLocaleString('en');
  $('#jsInfo').html(js+" | $"+jscostview);
  tscostview=tscost.toLocaleString('en');
  $('#tsInfo').html(ts+" | $"+tscostview);
  cscostview=cscost.toLocaleString('en');
  $('#csInfo').html(cs+" | $"+cscostview);
  cppcostview=cppcost.toLocaleString('en');
  $('#cppInfo').html(cpp+" | $"+cppcostview);
  swiftcostview=swiftcost.toLocaleString('en');
  $('#swiftInfo').html(swift+" | $"+swiftcostview);

}
function takeHtmlCourse() {
	if (html>0) {
		cost=Math.round((html+10)*1.1)*html;
	} else {
		cost=10;
	}
	if (cash>=cost) {
		cash-=cost;
		html++;
		updateView();
	}
}
function takeCssCourse() {
	if (css>0) {
		cost=Math.round((css+1000)*1.1)*css;
	} else {
		cost=1000;
	}
	if (cash>=cost) {
		cash-=cost;
		css++;
		updateView();
	}
}
function takeJsCourse() {
	if (js>0) {
		cost=Math.round((js+50000)*1.1)*js;
	} else {
		cost=50000;
	}
	if (cash>=cost) {
		cash-=cost;
		js++;
		updateView();
	}
}
function takeTsCourse() {
	if (ts>0) {
		cost=Math.round((ts+400000)*1.1)*ts;
	} else {
		cost=400000;
	}
	if (cash>=cost) {
		cash-=cost;
		ts++;
		updateView();
	}
}
function takeCsCourse() {
	if (cs>0) {
		cost=Math.round((cs+1250000)*1.1)*cs;
	} else {
		cost=1250000;
	}
	if (cash>=cost) {
		cash-=cost;
		cs++;
		updateView();
	}
}
function takeCppCourse() {
	if (cpp>0) {
		cost=Math.round((cpp+5000000)*1.1)*cpp;
	} else {
		cost=5000000;
	}
	if (cash>=cost) {
		cash-=cost;
		cpp++;
		updateView();
	}
}
function takeSwiftCourse() {
	if (swift>0) {
		cost=Math.round((swift+12500000)*1.1)*swift;
	} else {
		cost=12500000;
	}
	if (cash>=cost) {
		cash-=cost;
		swift++;
		updateView();
	}
}
setInterval(newGameStartWait, 10);   
setInterval(tick, 1000);
setInterval(updateView, 1000);