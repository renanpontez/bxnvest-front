(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{103:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n="CRYPTOOPTION",r="STOCKOPTION"},104:function(e,t,a){"use strict";var n=a(37),r=a.n(n),c=a(0),o=a.n(c),i=(a(3),a(11)),l=a(176),u=a(177),s=Object(i.a)((function(e){return{root:{color:"#fff",position:"absolute",width:"20px !important",height:"20px !important"}}}))(l.a),m=Object(i.a)((function(e){return{root:{fontWeight:600,borderRadius:"40px",textAlign:"center",color:"#fff",minHeight:50,"& .MuiSvgIcon-root":{width:18,marginLeft:e.spacing(1)}}}}))(u.a);t.a=function(e){var t=e.children,a=e.isLoading,n=r()(e,["children","isLoading"]);return o.a.createElement(m,n,a?o.a.createElement(s,null):o.a.createElement(o.a.Fragment,null,t))}},108:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({});r.Provider,r.Consumer;t.a=r},109:function(e,t,a){"use strict";var n=a(37),r=a.n(n),c=a(0),o=a.n(c),i=a(11),l=a(99),u=a(179),s=Object(i.a)((function(e){return{root:{backgroundColor:"#3A4361",borderRadius:30,padding:e.spacing(3)}}}))(l.a);t.a=function(e){var t=e.title,a=e.subtitle,n=e.children,c=r()(e,["title","subtitle","children"]);return o.a.createElement(s,c,t&&o.a.createElement(u.a,{variant:"body1",className:"title"},t),a&&o.a.createElement(u.a,{variant:"body2",className:"subtitle"},a),n)}},113:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(106),r=a.n(n),c=a(107),o=a.n(c),i=a(116),l=a.n(i).a.create({baseURL:"https://apidojo-yahoo-finance-v1.p.rapidapi.com/",headers:{"Content-Type":"application/json","X-RapidAPI-Host":"apidojo-yahoo-finance-v1.p.rapidapi.com","X-RapidAPI-Key":"75d1c707b6msh3556e14127075fbp14333ajsn3b9fccc301b7"}}),u=function(e){return l.get("".concat(e,"&region=US"))},s=["BTC","ETH","USDT","XRP","BCH","BNB"],m=function(){var e=o()(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.map((function(e){return"".concat(e,"-USD")})),e.abrupt("return",u("market/v2/get-quotes?symbols=".concat(t.join("%252C"))).then((function(e){if(200===e.status)return e.data.quoteResponse.result})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=o()(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u("market/v2/get-quotes?symbols=".concat(t.join("%252C"))).then((function(e){if(200===e.status)return e.data.quoteResponse.result})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},114:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=(a(3),a(100)),o=a(176),i=function(e){return r.a.createElement(c.a,{position:"absolute",left:0,right:0,top:0,display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"},r.a.createElement(o.a,{size:50}),"    ")};i.propTypes={},t.a=i},115:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var n=a(106),r=a.n(n),c=a(107),o=a.n(c),i=a(103),l=function(){var e=o()(r.a.mark((function e(t,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,2e3)}));case 2:return e.abrupt("return",{success:!0,data:{symbol:t.symbol,type:i.a,volume:(a/t.regularMarketPrice).toFixed(6),amount:a,date:new Date}});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),u=function(){var e=o()(r.a.mark((function e(t,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,2e3)}));case 2:return e.abrupt("return",{success:!0,data:{symbol:t.symbol,type:i.b,volume:a,amount:a*t.last,date:new Date}});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},134:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=(a(3),a(96)),o=a(100),i=a(98),l=a(180),u=a(178),s=a(179),m=(a(113),a(109)),d=a(114),p=a(103),f=r.a.createContext({}),E=(f.Provider,f.Consumer,f),v=a(105),b=a.n(v),y=a(181),h=a(182),g=a(111),x=a.n(g),k=a(104),w=a(110),C=a.n(w),D=a(37),P=a.n(D),O=a(11),S=a(193),T=Object(O.a)((function(e){return{root:{backgroundColor:"transparent",margin:"".concat(e.spacing(1),"px"),boxShadow:"none",borderRadius:"".concat(e.spacing(3),"px !important"),"&:before":{display:"none"},"&$expanded":{boxShadow:"0 0 12px 8px rgb(0 0 0 / 7%);"},"&.even":{backgroundColor:e.palette.background.cardLighter}},expanded:{boxShadow:"0 0 3px -3px rgba(0,0,0,.05)"}}}))(S.a),L=function(e){var t=e.children,a=P()(e,["children"]);return r.a.createElement(T,a,t)},N=function(e){var t=e.items;return r.a.createElement(u.a,{container:!0},t.map((function(e,t){return r.a.createElement(u.a,{key:t,item:!0,xs:6,md:3},r.a.createElement(o.a,{minHeight:100,py:2},r.a.createElement(s.a,{variant:"body2"},e.label),r.a.createElement(s.a,{variant:"body1"},e.value)))})))},j=a(108),F=a(132),R=a.n(F),I=a(133),W=a.n(I),M=Object(c.a)((function(e){return{quantityStock:{}}})),q=function(e){var t=e.itemsList,a=M(),n=r.a.useState(!1),c=b()(n,2),l=c[0],m=c[1],d=r.a.useState(1),f=b()(d,2),v=f[0],g=f[1],w=function(e,t,a){"add"===t?e*(v+1)<=a&&g(v+1):g(v-1>0?v-1:1)};return r.a.createElement(j.a.Consumer,null,(function(e){var n=e.buyInvestment,c=e.isPaymentLoading;return r.a.createElement(E.Consumer,null,(function(e){var d=e.amount;return r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return r.a.createElement(L,{key:t,className:t%2?"even":"odd",expanded:l===t,onChange:(f=t,function(e,t){m(!!t&&f),g(1)})},r.a.createElement(y.a,{expandIcon:r.a.createElement(x.a,null)},r.a.createElement(u.a,{container:!0},r.a.createElement(u.a,{item:!0,xs:3},r.a.createElement(s.a,{variant:"body1"},e.symbol)),r.a.createElement(u.a,{item:!0,xs:3},r.a.createElement(s.a,{variant:"body2"},"$",e.last.toFixed(2))))),r.a.createElement(h.a,null,r.a.createElement(o.a,{py:2,width:"100%"},r.a.createElement(N,{items:[{label:"Day low",value:e.low},{label:"Day high",value:e.high},{label:"Day open",value:e.open},{label:"Date",value:new Date(e.date).toLocaleString("en-US")}]}),r.a.createElement(u.a,{container:!0},r.a.createElement(u.a,{item:!0,xs:6,md:3},r.a.createElement(o.a,null,d/e.last>1&&r.a.createElement(o.a,{className:a.quantityStock},r.a.createElement(i.a,{onClick:function(){return w(e.last,"remove",d)}},r.a.createElement(R.a,null)),r.a.createElement(s.a,{variant:"body2"},v),r.a.createElement(i.a,{onClick:function(){return w(e.last,"add",d)}},r.a.createElement(W.a,null))))),r.a.createElement(u.a,{item:!0,xs:6,md:9},r.a.createElement(k.a,{variant:"contained",color:"primary",fullWidth:!0,isLoading:c,className:"",size:"small",onClick:function(){return n(e,d,p.b,v)}},"INVEST $ ",(v*e.last).toFixed(2)," NOW ",r.a.createElement(C.a,null)))))));var f})))}))}))},A=(a(183),Object(c.a)({table:{minWidth:650}}),function(e){var t=e.itemsList,a=r.a.useState(!1),n=b()(a,2),c=n[0],i=n[1];return r.a.createElement(j.a.Consumer,null,(function(e){var a=e.buyInvestment,n=e.isPaymentLoading;return r.a.createElement(E.Consumer,null,(function(e){var l=e.amount;return r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return r.a.createElement(L,{key:t,className:t%2?"even":"odd",expanded:c===t,onChange:(m=t,function(e,t){return i(!!t&&m)})},r.a.createElement(y.a,{expandIcon:r.a.createElement(x.a,null)},r.a.createElement(u.a,{container:!0},r.a.createElement(u.a,{item:!0,xs:3},r.a.createElement(s.a,{variant:"body1"},e.fromCurrency),r.a.createElement(s.a,{variant:"body2"},e.shortName)),r.a.createElement(u.a,{item:!0,xs:3}),r.a.createElement(u.a,{item:!0,xs:3},(l/e.regularMarketPrice).toFixed(6)))),r.a.createElement(h.a,null,r.a.createElement(o.a,{py:2,width:"100%"},r.a.createElement(N,{items:[{label:"Day low",value:e.regularMarketDayLow.toFixed(2)},{label:"Day high",value:e.regularMarketDayHigh.toFixed(2)},{label:"Market change (%)",value:e.regularMarketChangePercent.toFixed(2)},{label:"Price",value:e.regularMarketPrice.toFixed(2)}]}),r.a.createElement(o.a,null,r.a.createElement(k.a,{variant:"contained",color:"primary",fullWidth:!0,isLoading:n,className:"",size:"small",onClick:function(){return a(e,l,p.a)}},"BUY NOW $ ",l," ",r.a.createElement(C.a,null))))));var m})))}))}))}),H=function(e){return r.a.createElement(r.a.Fragment,null,"    ")};H.propTypes={};a(115);var U=a(117),B=a.n(U),$=Object(c.a)((function(e){return{resultsRoot:{position:"fixed",top:0,left:0,width:"100%",height:"100vh",padding:e.spacing(4),backgroundColor:e.palette.background.default}}})),z=function(e){var t=e.clearResults,a=e.resultsData,n=e.amount;if(!a)return r.a.createElement(d.a,null);var c=$();return r.a.createElement(o.a,{className:c.resultsRoot},r.a.createElement(o.a,{position:"absolute",right:20,top:20,onClick:function(){return t()}},r.a.createElement(i.a,null,r.a.createElement(B.a,null))),r.a.createElement(E.Provider,{value:{amount:a.amount}},r.a.createElement(l.a,{in:!0,direction:"up"},r.a.createElement(o.a,null,r.a.createElement(o.a,{mb:5},r.a.createElement(u.a,{container:!0,alignItems:"center"},r.a.createElement(u.a,{item:!0,xs:12,md:5},r.a.createElement(s.a,{variant:"body2"},"home // investing // $",n)),r.a.createElement(u.a,{item:!0,xs:6,md:2},r.a.createElement(o.a,{textAlign:"center"},r.a.createElement(s.a,{variant:"h3"},"Finding the best invesment"),r.a.createElement(s.a,{variant:"body2"},"According to your profile and how much you would like to invest we think these are the best results."))),r.a.createElement(u.a,{item:!0,xs:6,md:5}))),r.a.createElement(u.a,{container:!0,spacing:2},r.a.createElement(u.a,{item:!0,xs:12,md:6},r.a.createElement(m.a,{title:"Stocks"},a.stocksData.length?r.a.createElement(q,{listType:p.b,itemsList:a.stocksData}):r.a.createElement(o.a,{py:2},r.a.createElement(s.a,{variant:"body2"},"Oops! We couldn't find any stock for your investment. Would your consider increase the investmen?")))),r.a.createElement(u.a,{item:!0,xs:12,md:6},r.a.createElement(m.a,{title:"Cryptocurrencies"},a.cryptosData.length?r.a.createElement(A,{listType:p.a,itemsList:a.cryptosData}):r.a.createElement(o.a,{py:2},r.a.createElement(s.a,{variant:"body2"},"Oops! We couldn't find any cryptocurrency for your investment. Would you mind trying back later?")))))))))};z.propTypes={};t.default=z}}]);
//# sourceMappingURL=5.73973c45bf45fa376ae2.js.map