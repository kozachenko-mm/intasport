(this.webpackJsonpintasport=this.webpackJsonpintasport||[]).push([[0],{26:function(t,e,a){t.exports=a(78)},3:function(t,e,a){t.exports={update:"Dashboard_update__2nFU0",cities:"Dashboard_cities__3tNNn",btnCity:"Dashboard_btnCity__3Ohlm",btnActivity:"Dashboard_btnActivity__-Gww_",list:"Dashboard_list__NDkwk",listItem:"Dashboard_listItem__2xugt",link:"Dashboard_link__2iZqa",caption:"Dashboard_caption__1ZlgX","animeClubs-enter":"Dashboard_animeClubs-enter__2OGsS","animeClubs-enter-active":"Dashboard_animeClubs-enter-active__1RqgB","animeClubs-exit":"Dashboard_animeClubs-exit__2Peb3","animeClubs-exit-active":"Dashboard_animeClubs-exit-active__36Kog"}},77:function(t,e,a){},78:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(19),c=a.n(r),l=a(8),s=a(20),u=a.n(s),o=function(){return u.a.get("https://instasport.co/dashboard/api/v1/clubs/")},f=a(4),v=a(21),p=a(22),b=a(25),m=a(24),y=a(3),d=a.n(y);function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function _(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var g=function(t){var e=t.svgRef,a=t.title,n=_(t,["svgRef","title"]);return i.a.createElement("svg",h({width:32,height:32,viewBox:"0 0 32 32",ref:e},n),a?i.a.createElement("title",null,a):null,i.a.createElement("circle",{style:{fill:"#252a35"},cx:16,cy:16,r:14}),i.a.createElement("path",{style:{fill:"#ffffff"},d:"m 16.0179,7.0002286 c 1.8938,0.004 3.8141,0.59437 5.3141,1.7626 1.0545,1.2148 -0.95476,2.5158004 -1.8597,1.3312004 -2.7242,-1.6483004 -6.5662,-1.0680004 -8.6158,1.3964 -1.0905,1.223 -1.7049,2.8549 -1.6977,4.4932 l 1.8003,0 c -0.96,1.440998 -1.9202,2.880998 -2.8803,4.320998 -0.9602,-1.44 -1.9203,-2.88 -2.8805,-4.319998 l 1.8003,0 c -0.0573,-3.912 2.756,-7.6331004 6.5325,-8.6462004 0.811,-0.2221 1.646,-0.3465 2.487,-0.3378 z m 7.9033,4.6808004 c 0.96016,1.4402 1.9203,2.8805 2.8805,4.320697 l -1.8003,0 c 0.051,3.958501 -2.8341,7.721301 -6.6772,8.681001 -2.5933,0.72418 -5.5256,0.19575 -7.657,-1.4611 -1.0874,-1.235 0.94976,-2.5235 1.8631,-1.3282 2.6394,1.6014 6.3356,1.0935 8.419,-1.1937 1.2066,-1.2432 1.901,-2.9653 1.8917,-4.698001 l -1.8003,0 c 0.96016,-1.440197 1.9203,-2.880497 2.8805,-4.320697 z"}))},O=i.a.forwardRef((function(t,e){return i.a.createElement(g,h({svgRef:e},t))})),E=(a.p,a(7)),j=a.n(E),k=function(t){Object(b.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(v.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={database:[],cities:[],activity:[],isActiv:!0},t.handleFilterCity=function(e){var a=t.props.data.filter((function(t){return t.city.title===e.target.value}));t.setState({database:a});var n=a.map((function(t){return t.activity.map((function(t){return t.title}))})).flat();t.setState((function(t){t.activity=[];var e,a=Object(f.a)(n);try{for(a.s();!(e=a.n()).done;){var i=e.value;t.activity.includes(i)||t.activity.push(i)}}catch(r){a.e(r)}finally{a.f()}return{activity:t.activity}})),t.setState({isActiv:!1})},t.handleFilterActivivty=function(e){var a=t.state.database.filter((function(t){return t.activity.filter((function(t){return t.title===e.target.value})).length>0}));t.setState({database:a})},t.updateCities=function(){var e=t.props.data;t.setState({database:e});var a=e.map((function(t){return t.activity})).flat().map((function(t){return t.title}));t.setState((function(t){var e,n=Object(f.a)(a);try{for(n.s();!(e=n.n()).done;){var i=e.value;t.activity.includes(i)||t.activity.push(i)}}catch(r){n.e(r)}finally{n.f()}return{activity:t.activity}})),t.setState({isActiv:!0})},t}return Object(p.a)(a,[{key:"componentDidUpdate",value:function(t){if(t!==this.props){var e=this.props.data;this.setState({database:e});var a=e.map((function(t){return t.city.title}));this.setState((function(t){var e,n=Object(f.a)(a);try{for(n.s();!(e=n.n()).done;){var i=e.value;t.cities.includes(i)||t.cities.push(i)}}catch(r){n.e(r)}finally{n.f()}return{cities:t.cities}}));var n=e.map((function(t){return t.activity})).flat().map((function(t){return t.title}));this.setState((function(t){var e,a=Object(f.a)(n);try{for(a.s();!(e=a.n()).done;){var i=e.value;t.activity.includes(i)||t.activity.push(i)}}catch(r){a.e(r)}finally{a.f()}return{activity:t.activity}}))}}},{key:"render",value:function(){var t=this,e=this.state,a=e.cities,n=e.activity,r=e.database,c=e.isActiv;return console.log(d.a),i.a.createElement("div",null,i.a.createElement("div",{className:d.a.cities},!c&&i.a.createElement("button",{className:d.a.update,type:"button",onClick:this.updateCities},i.a.createElement(O,null)),a.length>0&&a.map((function(e){return i.a.createElement("button",{className:d.a.btnCity,type:"button",value:e,onClick:t.handleFilterCity,key:j()()},e)}))),i.a.createElement("div",{className:d.a.cities},n.map((function(e){return i.a.createElement("button",{className:d.a.btnActivity,type:"button",value:e,onClick:t.handleFilterActivivty,key:j()()},e)}))),i.a.createElement("ul",{className:d.a.list},r.length>=0&&r.map((function(t){return i.a.createElement("li",{className:d.a.listItem,key:j()()},i.a.createElement("a",{href:t.link,className:d.a.link},i.a.createElement("img",{src:t.logo,alt:"logo"})),i.a.createElement("span",{className:d.a.caption},t.title))}))))}}]),a}(n.Component),C=a(9),S=a.n(C),D=a(23),N=a.n(D),w=function(){var t=Object(n.useState)([]),e=Object(l.a)(t,2),a=e[0],r=e[1],c=Object(n.useState)(!1),s=Object(l.a)(c,2),u=s[0],f=s[1],v=Object(n.useState)(!1),p=Object(l.a)(v,2),b=p[0],m=p[1];return Object(n.useEffect)((function(){m(!0),o().then((function(t){var e=t.data;return r(e)})).catch((function(t){return f(!!t)})).finally((function(){return m(!1)}))}),[]),i.a.createElement("div",null,i.a.createElement("h1",{className:S.a.title},"Instasport"),u&&i.a.createElement("div",null,"Error!!! Please reload the page!"),b&&i.a.createElement(N.a,{className:S.a.spiner,type:"ThreeDots",color:"#00BFFF",height:50,width:50}),i.a.createElement(k,{data:a}))};a(77);c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(w,null)),document.getElementById("root"))},9:function(t,e,a){t.exports={title:"App_title__3bckq",spiner:"App_spiner__1kOyg"}}},[[26,1,2]]]);
//# sourceMappingURL=main.3b8d2ba3.chunk.js.map