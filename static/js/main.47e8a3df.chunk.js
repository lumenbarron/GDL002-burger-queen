(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){},32:function(e,t,n){e.exports=n(59)},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),o=n.n(c),s=(n(37),n(10)),i=n(15),l=(n(38),n(3)),u=n(4),m=n(7),d=n(5),b=n(6),h=(n(39),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("section",{className:"container"},r.a.createElement("section",{className:"row"},r.a.createElement("section",{className:"col-md-2"}),r.a.createElement("section",{className:"col-md-8 buttonsHomeContent"},r.a.createElement(s.b,{to:"/waiter",className:"btn btn-success buttonsHomeLink"}," Meseros "),r.a.createElement(s.b,{to:"/kitchen",className:"btn btn-danger buttonsHomeLink"},"Cocina")),r.a.createElement("section",{className:"col-md-2"}))))}}]),t}(r.a.Component)),p=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement(h,null))}}]),t}(r.a.Component),f=n(16),O=n(14),j=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.order.map(function(t,n){return r.a.createElement("h5",{key:n,name:t.title,value:t.price,className:"itemsName"},t.name," / $",t.price,r.a.createElement("button",{className:"deletItems",onClick:function(n){return e.props.delete(t)}},"X"))}),n=this.props.order.reduce(function(e,t){return e+t.price},0);return r.a.createElement("section",null,r.a.createElement("section",{className:"ticketList"},t,r.a.createElement("h4",{className:"itemsOrders"},"Total : ",n)),r.a.createElement("button",{className:"updateButton",onChange:this.props.onChange,onClick:this.props.sendOrders},"Finalizar pedido"))}}]),t}(r.a.Component),E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={name:"",list:[]},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"updateName",value:function(e,t){this.setState(Object(f.a)({},e,t))}},{key:"addName",value:function(){var e={id:1+Math.random(),value:this.state.name.slice()},t=Object(O.a)(this.state.list);t.push(e),this.setState({list:t,name:""})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",null,r.a.createElement("section",{className:"input-group input-form"},r.a.createElement("input",{type:"text",placeholder:"Nombre del cliente",value:this.state.name,onChange:function(t){return e.updateName("name",t.target.value)},className:"form-control inputCostumer"}),r.a.createElement("section",{className:"input-group-append"},r.a.createElement("button",{type:"submit",onClick:function(){return e.addName()},className:"btn btn-outline-secondary buttonsInicio btn-input",id:"button-addon2"},"Enviar"))),r.a.createElement("section",null,this.state.list.map(function(e){return r.a.createElement("h4",{className:"itemsOrders",key:e.id},e.value)})))}}]),t}(r.a.Component),v=n(23);v.initializeApp({apiKey:"AIzaSyCQIQJpdfRSGZXr5jjR8pHXeEr4qoOiKi4",authDomain:"il-piccolo-restaurante.firebaseapp.com",databaseURL:"https://il-piccolo-restaurante.firebaseio.com",projectId:"il-piccolo-restaurante",storageBucket:"il-piccolo-restaurante.appspot.com",messagingSenderId:"878022984897",appId:"1:878022984897:web:605481abd846ce77"});var C=v,k=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).onCollectionUpdate=function(e){var t=[];e.forEach(function(e){var n=e.data(),a=n.title,r=n.price;t.push({key:e.id,doc:e,title:a,price:r})}),n.setState({desayuno:t})},n.print=function(e){var t=e.currentTarget,a=t.getAttribute("name"),r=t.getAttribute("value"),c={id:t.getAttribute("name"),name:a,price:Number(r)};n.setState({orders:[].concat(Object(O.a)(n.state.orders),[c])})},n.deleteItem=function(e){var t=n.state.orders.filter(function(t){return t!==e});n.setState({orders:Object(O.a)(t)})},n.onChange=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.sendOrders=function(e){e.preventDefault(),console.log("subiendo a firestore"),C.firestore().collection("comandas").add({orders:n.state.orders})},n.ref=C.firestore().collection("desayuno"),n.refOrder=C.firestore().collection("comandas"),n.unsubscribe=null,n.state={desayuno:[],orders:[]},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.unsubscribe=this.ref.onSnapshot(this.onCollectionUpdate)}},{key:"render",value:function(){var e=this,t=this.state.desayuno.map(function(t,n){return r.a.createElement("button",{className:" btn foodCards",key:n,name:t.title,value:t.price,onClick:e.print},t.title," $",t.price)});return r.a.createElement("section",null,r.a.createElement("section",{className:"foodContentCards breakfastContainerCards"},r.a.createElement(E,null),r.a.createElement("section",{className:"foodItems"},t),r.a.createElement("section",{className:"itemsTickets"},r.a.createElement(j,{order:this.state.orders,delete:this.deleteItem,sendOrders:this.sendOrders,onChange:this.onChange}))))}}]),t}(r.a.Component),y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).toggleDiv=function(e){e.preventDefault();var t=n.state.show;n.setState({show:!t})},n.state={show:!1,showBreakfast:!1,showLunch:!1},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("a",{onClick:this.toggleDiv,className:"btn buttonsInicio",href:"1.1",id:"buttonBreakfast"},"Desayuno"),this.state.show&&r.a.createElement(k,{className:"showCards"}))}}]),t}(r.a.Component),N=n(20),g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).onCollectionUpdate=function(e){var t=[];e.forEach(function(e){var n=e.data(),a=n.title,r=n.price;t.push({key:e.id,doc:e,title:a,price:r})}),n.setState({almuerzo:t})},n.print=function(e){var t=e.currentTarget,a=t.getAttribute("name"),r=t.getAttribute("value"),c={id:t.getAttribute("name"),name:a,price:Number(r)};n.setState({orders:[].concat(Object(O.a)(n.state.orders),[c])})},n.deleteItem=function(e){var t=n.state.orders.filter(function(t){return t!==e});n.setState({orders:Object(O.a)(t)})},n.onChange=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.sendOrders=function(e){e.preventDefault(),C.firestore().collection("comandas").add({orders:n.state.orders})},n.ref=C.firestore().collection("almuerzo"),n.refOrder=C.firestore().collection("comandas"),n.unsubscribe=null,n.state={almuerzo:[],orders:[]},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.unsubscribe=this.ref.onSnapshot(this.onCollectionUpdate)}},{key:"render",value:function(){var e=this,t=this.state.almuerzo.map(function(t,n){return r.a.createElement("button",{className:" btn foodCards",key:n,name:t.title,value:t.price,onClick:e.print},t.title," $",t.price)});return r.a.createElement("section",null,r.a.createElement("section",{className:"foodContentCards lunchContainerCards"},r.a.createElement(E,null),r.a.createElement("section",{className:"foodItems"},t),r.a.createElement("section",{className:"itemsTickets"},r.a.createElement(j,{order:this.state.orders,delete:this.deleteItem,sendOrders:this.sendOrders,onChange:this.onChange}))))}}]),t}(r.a.Component),w=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).toggleDiv=function(e){e.preventDefault();var t=n.state.show;n.setState({show:!t})},n.state={show:!1},n.toggleDiv=n.toggleDiv.bind(Object(N.a)(n)),n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("a",{onClick:this.toggleDiv,className:"btn buttonsInicio",href:"1.2",id:"buttonLunch"},"Almuerzo"),this.state.show&&r.a.createElement(g,{className:"showCards"}))}}]),t}(r.a.Component),I=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(s.b,{to:"/",className:"btn buttonsInicio",id:"buttonBackHome"},"Inicio")}}]),t}(r.a.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(s.b,{to:"/orders",className:"btn buttonsInicio",id:"buttonOrders"}," Comandas ")}}]),t}(r.a.Component),D=(n(27),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"menus"},r.a.createElement("section",{className:"container"},r.a.createElement(I,null),r.a.createElement(S,null),r.a.createElement("section",{id:"buttonsFood"},r.a.createElement(y,null),r.a.createElement(w,null))))}}]),t}(r.a.Component)),A=(n(58),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(s.b,{to:"/waiter",className:"btn buttonsInicio",id:"buttonOrders"}," Menus ")}}]),t}(r.a.Component)),z=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"navOrdersButton"},r.a.createElement(I,null),r.a.createElement(A,null),r.a.createElement("h1",null,"Comandas"))}}]),t}(r.a.Component),B=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).getData=function(e){var t=[];e.forEach(function(e){t.push({key:e.id,name:e.data().orders})}),n.setState({orders:t})},n.ref=C.firestore().collection("comandas"),n.unsubscribe=null,n.state={orders:[]},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.unsubscribe=this.ref.onSnapshot(this.getData)}},{key:"render",value:function(){var e=this.state.orders.map(function(e,t){return r.a.createElement("section",{key:t,className:"ticketList"},e.name.map(function(e,t){return r.a.createElement("p",{key:t,className:" btn foodCards"},e.name)}))});return r.a.createElement("section",{className:"ordersContainer"},e)}}]),t}(r.a.Component),L=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"ordersDisplay"},r.a.createElement(z,null),r.a.createElement(B,null))}}]),t}(r.a.Component),M=function(){return r.a.createElement(s.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:p}),r.a.createElement(i.a,{path:"/waiter",component:D}),r.a.createElement(i.a,{path:"/kitchen",component:L}),r.a.createElement(i.a,{path:"/orders",component:L})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.47e8a3df.chunk.js.map