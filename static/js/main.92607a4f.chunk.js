(this["webpackJsonpstand-timer"]=this["webpackJsonpstand-timer"]||[]).push([[0],{270:function(e,t,a){e.exports=a(514)},275:function(e,t,a){},277:function(e,t,a){},460:function(e,t,a){},514:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(5),c=a.n(r),o=(a(275),a(36)),m=a(37),l=a(40),s=a(38),u=a(41),h=(a(276),a(277),a(103)),f=(a(460),[{name:"Group A",value:200},{name:"Group B",value:200},{name:"Group C",value:200},{name:"Group D",value:200}]),d=["#FF8042","#FFBB28","#00C49F","#0088FE"],g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).finalGifs=["./images/minion-what.gif","./images/timeup.gif","./images/too-much-info.gif","./images/please-stop.gif"],a.imgSrc=a.finalGifs[Math.floor(Math.random()*a.finalGifs.length)],a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.timeRemain,a=e.totalTime,n=180-t*(360/a),r=t<1&&t>-6,c=new URLSearchParams(window.location.search);!!c&&"jake"===c.get("mode")&&(this.imgSrc="./images/jack.gif");var o=t>0?d[Math.floor((t-1)/(a/4))%d.length]:"red";return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"number-count-container"},i.a.createElement("div",{className:"number-count",style:{color:o}},t)),r&&i.a.createElement("div",{className:"gif-container"},i.a.createElement("img",{src:this.imgSrc,alt:"time is up",className:"gif-img"})),!r&&i.a.createElement(h.c,{width:260,height:260},i.a.createElement(h.b,{data:f,cx:130,cy:130,startAngle:180,endAngle:n,innerRadius:90,outerRadius:120,fill:"#8884d8",paddingAngle:2,dataKey:"value",animationDuration:600},f.map((function(e,t){return i.a.createElement(h.a,{key:"cell-".concat(t),fill:o})})))))}}]),t}(i.a.Component),p=["(*^\u25bd^*)","\u0669(\u273f\u2202\u203f\u2202\u273f)\u06f6","(*\u2267\u25bd\u2266)","(\u2022\u203f\u2022)","( \u22c2\u203f\u22c2\u2019)","( \xb4\u0348 \u25e1 `\u0348 )"],v=["\u0ca0_\u0ca0","\u0ca0\u2583\u0ca0","(;\xac_\xac)","(;\xb0 \u30ed\xb0)","(\u0e51\u2022\ufe4f\u2022)","\u25d1.\u25d1"],E=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.timeRemain,a=e.totalTime,n="";return n=t<0?v[Math.floor(Math.random()*v.length)]:a/t>4?i.a.createElement("div",{style:{color:"#FF8042"}},'"\u2299\u25b3\u2299"'):p[Math.floor(Math.random()*p.length)],i.a.createElement("div",{className:"emo-container"},n)}}]),t}(i.a.Component),b=a(516),j=a(517),k=a(104),O=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.durationClick,a=e.totalTime,n=i.a.createElement(b.a,null,i.a.createElement(b.a.Item,{onClick:function(){return t(180)},className:"centered large-font"},"180"),i.a.createElement(b.a.Item,{onClick:function(){return t(120)},className:"centered large-font"},"120"),i.a.createElement(b.a.Item,{onClick:function(){return t(60)},className:"centered large-font"},"60"),i.a.createElement(b.a.Item,{onClick:function(){return t(30)},className:"centered large-font"},"30"),i.a.createElement(b.a.Item,{onClick:function(){return t(10)},className:"centered large-font"},"10"));return i.a.createElement(j.a,{overlay:n,placement:"bottomCenter"},i.a.createElement(k.a,{size:"large"},a," sec"))}}]),t}(i.a.Component),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).componentDidMount=function(){setInterval((function(){return a.setState({timeRemain:a.state.timeRemain-1})}),1e3)},a.reset=function(){a.setState({timeRemain:a.state.totalTime})},a.audio=new Audio("timeup.mp3"),a.state={totalTime:60,timeRemain:60},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return 0===this.state.timeRemain&&this.audio.play(),i.a.createElement("div",{className:"main-container"},i.a.createElement("div",{className:"selector-container"},i.a.createElement(O,{totalTime:this.state.totalTime,durationClick:function(t){e.setState({totalTime:t,timeRemain:t})}})),i.a.createElement("div",{className:"chart-container",onClick:this.reset},i.a.createElement(g,{timeRemain:this.state.timeRemain,totalTime:this.state.totalTime})),i.a.createElement("div",{className:"emo-container",onClick:this.reset},i.a.createElement(E,{timeRemain:this.state.timeRemain,totalTime:this.state.totalTime})))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[270,1,2]]]);
//# sourceMappingURL=main.92607a4f.chunk.js.map