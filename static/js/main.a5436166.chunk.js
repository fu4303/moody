(this["webpackJsonpoksana-samokhvalova-project-five"]=this["webpackJsonpoksana-samokhvalova-project-five"]||[]).push([[0],{18:function(e,a,t){e.exports=t.p+"static/media/logo.12a0f127.png"},19:function(e,a,t){e.exports=t(43)},24:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(17),l=t.n(o),s=(t(24),t(7)),c=t(1),i=t(2),m=t(4),u=t(3),p=t(6),d=t.n(p),h=[{url:"",mood:"",alt:""},{url:"",mood:"",alt:""},{url:"",mood:"",alt:""},{url:"",mood:"",alt:""},{url:"https://images.unsplash.com/photo-1582623081729-4b43c8956085?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0MjAwOX0",mood:"there",alt:"hello"},{url:"",mood:"",alt:""}],f=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).handlePrint=function(){window.print()},e.toggleClass=function(){var e="mainGrid"===document.getElementById("test").className?"newMainGrid":"mainGrid";document.getElementById("test").className=e},e}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("nav",{className:"navBar"},r.a.createElement("div",{className:"logo"},r.a.createElement("p",null,"MOODY")),r.a.createElement("button",{onClick:this.toggleClass},"Toggle"),r.a.createElement("ul",{className:"hamburger"}),r.a.createElement("button",{className:"print",onClick:this.handlePrint},r.a.createElement("i",{className:"fas fa-print"})))))}}]),t}(n.Component),v=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).handleClick=function(){e.props.removeImages(e.props.numBox)},e}return Object(i.a)(t,[{key:"render",value:function(){return console.log(this.props.mood),r.a.createElement("div",{className:"completeImage"},r.a.createElement("button",{className:"closeButton",onClick:this.handleClick},r.a.createElement("i",{className:"fas fa-times"})),r.a.createElement("img",{src:this.props.url,alt:this.props.altTag}))}}]),t}(n.Component),E=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).handleKeyPress=function(a){if("Enter"===a.key){var t=e.textInput.current.value;if(!t)return;e.textInput.current.value="",e.props.getImages(t,e.props.numBox)}},e.textInput=r.a.createRef(),e}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"incompleteImage"},r.a.createElement("input",{type:"text",className:"moodInput",placeholder:"Enter your mood",ref:this.textInput,onKeyPress:this.handleKeyPress}),r.a.createElement("p",null,"Incomplete Image"),r.a.createElement("button",{className:"addButton"},r.a.createElement("i",{className:"fas fa-plus"})))}}]),t}(n.Component),g=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"frame"},r.a.createElement("div",{className:"innerFrame"},r.a.createElement("div",{className:"imagePlace"},this.props.mood||this.props.url?r.a.createElement(v,{mood:this.props.mood,url:this.props.url,altTag:this.props.altTag,numBox:this.props.numBox,removeImages:this.props.removeImages}):r.a.createElement(E,{getImages:this.props.getImages,numBox:this.props.numBox})),r.a.createElement("div",{className:"icons"},r.a.createElement("div",{className:"leftIcons"},r.a.createElement("i",{className:"far fa-heart"}),r.a.createElement("i",{className:"far fa-paper-plane"}),r.a.createElement("i",{className:"far fa-comment"})),r.a.createElement("i",{className:"far fa-bookmark"})),this.props.mood&&r.a.createElement("p",{className:"moodTitle"},this.props.mood)))}}]),t}(n.Component),b=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"photoGrid"},r.a.createElement("div",{className:"photoBox"}),r.a.createElement("div",{className:"photoBox"}),r.a.createElement("div",{className:"photoBox"}),r.a.createElement("div",{className:"photoBox"}),r.a.createElement("div",{className:"photoBox"}),r.a.createElement("div",{className:"photoBox"}))}}]),t}(n.Component),y=t(18),N=t.n(y),k=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"footerFlex"},r.a.createElement("div",null,r.a.createElement("img",{className:"footerLogo",src:N.a,alt:"logo"})),r.a.createElement("ul",{className:"socialIcons"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/OksanaSam",target:"_blank","aria-label":"GitHub account"},r.a.createElement("i",{"aria-hidden":"true",className:"fab fa-github"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/oksana-samokhvalova-6b03521b0/",target:"_blank","aria-label":"LinkedIn account"},r.a.createElement("i",{"aria-hidden":"true",className:"fab fa-linkedin-in"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/oksanadev",target:"_blank","aria-label":"Twitter Account"},r.a.createElement("i",{"aria-hidden":"true",className:"fab fa-twitter"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://open.spotify.com/playlist/2M9DHDbmG4bGKzeyL2auAq",target:"_blank","aria-label":"Spotify playlist"},r.a.createElement("i",{"aria-hidden":"true",className:"fab fa-spotify"}))))),r.a.createElement("p",{className:"copyright"},"\xa9 2020 Oksana Samokhvalova")))}}]),t}(n.Component),j=(t(42),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).toggleClass=function(){var e="red"===document.getElementById("test").className?"blue":"red";document.getElementById("test").className=e},e.getImages=function(a,t){d()({url:"https://api.unsplash.com/photos/random",method:"GET",responseType:"json",params:{client_id:"Ro76YKYpmutB58ImuEKT8izDBYKA669WYcjJWz-U6TA",query:a,orientation:"squarish"}}).then((function(n){var r=n.data,o=r.urls.regular,l=r.alt_description,c=Object(s.a)(e.state.boxArray);c[t]={url:o,mood:a,alt:l},e.setState({boxArray:c})}))},e.removeImages=function(a){var t=Object(s.a)(e.state.boxArray);t[a]={url:"",mood:"",alt:""},e.setState({boxArray:t})},e.toggleBox=function(){e.setState({isBoxVisible:!0})},e.textInput=r.a.createRef(),e.state={boxArray:h,quote:""},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;d()({url:"https://type.fit/api/quotes",method:"GET",responseType:"json",params:{}}).then((function(a){var t=a.data,n=t[Math.floor(Math.random()*t.length)].text;e.setState({quote:n})}))}},{key:"getBoxes",value:function(){var e=this;return this.state.boxArray.map((function(a,t){return r.a.createElement(g,{key:t,mood:a.mood,url:a.url,altTag:a.alt,numBox:t,getImages:e.getImages,removeImages:e.removeImages})}))}},{key:"render",value:function(){var e=this.getBoxes();return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement("div",{className:"mainGrid",id:"test"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(b,null)),e),r.a.createElement(k,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.a5436166.chunk.js.map