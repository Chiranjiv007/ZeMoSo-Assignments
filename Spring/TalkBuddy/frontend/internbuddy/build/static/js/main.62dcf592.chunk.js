(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){var a=n(40),s=n(49);a.initializeApp({apiKey:"AIzaSyALHRUe4e80ZTgi7EuqwBzvlPEhjiDEr7U",authDomain:"internbuddy-c29f8.firebaseapp.com",databaseURL:"https://internbuddy-c29f8.firebaseio.com",projectId:"internbuddy-c29f8",storageBucket:"",messagingSenderId:"207196259614",appId:"1:207196259614:web:f6bfbb8492b0113f"});var i=a.auth(),r={signInOptions:[a.auth.EmailAuthProvider.PROVIDER_ID,a.auth.GoogleAuthProvider.PROVIDER_ID],tosUrl:"/terms-of-service",callbacks:{signInSuccessWithAuthResult:function(){return!1}}},c=new s.auth.AuthUI(a.auth());e.exports={firebase:a,auth:i,startFirebaseUI:function(e){c.start(e,r)}}},29:function(e,t,n){e.exports=n(54)},34:function(e,t,n){},53:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},54:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(9),r=n.n(i),c=(n(34),n(35),n(5)),l=n.n(c),o=n(7),u=n(11),d=n(14),m=n(12),h=n(4),p=n(8),f=n(13),b=n(28),k=n(23),v=function(e){var t=e.list,n=e.onDelete,a=e.callBack,i=e.tag;return s.a.createElement("div",{className:"table"},t.map(function(e){return s.a.createElement(i,{id:e.id,name:e.name,rating:e.rating,assignments:e.assignments,onDelete:n,callBack:a,key:e.id},null)}))},g=function(e){var t=e.onClick,n=e.className,a=void 0===n?"":n,i=e.children;return s.a.createElement("button",{onClick:t,className:a,type:"button"},i)},E=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).myChangeHandler=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(k.a)({},t,a)),n.postchanges=n.postchanges.bind(Object(h.a)(n))},n.state={},console.log(e.fields),n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"postchanges",value:function(){var e=Object(o.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.submiturl){e.next=3;break}return e.next=3,fetch(this.props.submiturl,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state)});case 3:this.props.callBack&&this.props.callBack(t,this.state);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return s.a.createElement("form",{onSubmit:this.postchanges},Object.entries(this.props.fields).map(function(t){var n=Object(b.a)(t,2),a=n[0],i=n[1];return s.a.createElement("div",null,s.a.createElement("p",null,"Enter ",a," "),s.a.createElement("input",{type:i,name:a,onChange:e.myChangeHandler}),s.a.createElement("br",null))}),s.a.createElement("br",null),s.a.createElement(g,{onClick:this.postchanges},"Submit"))}}]),t}(s.a.Component),y=n(27),j={width:"40%"},O={width:"30%"},w={width:"10%"},I=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={id:e.id,name:e.name,rating:e.rating,assignments:e.assignments,isExpanded:!1,isAssignView:!1,selections:null},n.onExpand=n.onExpand.bind(Object(h.a)(n)),n.onCollapse=n.onCollapse.bind(Object(h.a)(n)),n.onRemoveTask=n.onRemoveTask.bind(Object(h.a)(n)),n.setAssignView=n.setAssignView.bind(Object(h.a)(n)),n.onSelectTask=n.onSelectTask.bind(Object(h.a)(n)),n.postAssignments=n.postAssignments.bind(Object(h.a)(n)),console.log(n.state.assignments),n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark(function e(){var t,n,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/tasks/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=[],n.forEach(function(e){return a.push({value:e.id,label:e.taskName})}),this.setState({allTasks:a});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),Object(p.a)(t,[{key:"onExpand",value:function(e){this.setState({isExpanded:!0})}},{key:"onCollapse",value:function(e){this.setState({isExpanded:!1})}},{key:"onSelectTask",value:function(e){e?this.setState({selections:e.map(function(e){return e.value})}):this.setState({selections:[]}),console.log(this.state.selections)}},{key:"setAssignView",value:function(){this.setState({isAssignView:!0,selections:null}),console.log(this.state.selections)}},{key:"onRemoveTask",value:function(e,t,n){fetch("/api/interns/"+t+"/remove_task?taskIds="+n,{method:"DELETE"});var a=this.state.assignments.filter(function(e){return e.id!==n});this.setState({assignments:a})}},{key:"postAssignments",value:function(){var e=Object(o.a)(l.a.mark(function e(t,n){var a,s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.selections){e.next=8;break}return e.next=3,fetch("/api/interns/"+n+"/assign_task?taskIds="+this.state.selections.join(),{method:"POST"});case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,this.setState({isAssignView:!1,assignments:s.assignments});case 8:this.setState({isAssignView:!1});case 9:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.isExpanded?s.a.createElement("div",{key:this.state.id,className:"table-row"},s.a.createElement("span",{style:O},s.a.createElement("a",{href:this.state.name},this.state.name)),s.a.createElement("span",{style:O},this.state.rating),s.a.createElement("span",{style:j},s.a.createElement(g,{className:"button-inline",onClick:this.onCollapse},"Collapse"),s.a.createElement("br",null),s.a.createElement("ol",null,this.state.assignments.map(function(t){return s.a.createElement("li",{key:t.task.id},s.a.createElement("b",null,t.task.taskName),s.a.createElement("br",null),t.task.description,s.a.createElement("br",null),s.a.createElement(g,{className:"button-inline",onClick:function(n){return e.onRemoveTask(n,e.state.id,t.id)}},"Remove Task"))}))),s.a.createElement("span",{style:w},s.a.createElement(g,{className:"button-inline",onClick:function(){return e.props.onDelete(e.state.id)}},"Delete"))):this.state.isAssignView?s.a.createElement("div",null,s.a.createElement(y.a,{isMulti:!0,options:this.state.allTasks,onChange:this.onSelectTask}),s.a.createElement("br",null),s.a.createElement(g,{className:"button-inline",onClick:function(t){return e.postAssignments(t,e.state.id)}}," Post Assignments ")):s.a.createElement("div",{key:this.state.id,className:"table-row"},s.a.createElement("span",{style:O},this.state.name),s.a.createElement("br",null),s.a.createElement("span",{style:O},this.state.rating),s.a.createElement("br",null),s.a.createElement("span",{style:w},s.a.createElement(g,{className:"button-inline",onClick:this.onExpand},"Expand")),s.a.createElement("span",{style:w},s.a.createElement(g,{className:"button-inline",onClick:this.setAssignView},"Assign Task")),s.a.createElement("span",{style:w},s.a.createElement(g,{className:"button-inline",onClick:function(){return e.props.onDelete(e.state.id)}},"Delete")))}}]),t}(s.a.Component),x=n(17),S=(n(53),{width:"40%"}),T=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={user:null,isLoading:!0,interns:[],addUI:!1,addTaskUI:!1},n.onDismiss=n.onDismiss.bind(Object(h.a)(n)),n.addIntern=n.addIntern.bind(Object(h.a)(n)),n.refreshUI=n.refreshUI.bind(Object(h.a)(n)),n.onDelete=n.onDelete.bind(Object(h.a)(n)),n.addTask=n.addTask.bind(Object(h.a)(n)),n.handleLogin=n.handleLogin.bind(Object(h.a)(n)),n.timer=setInterval(n.refreshUI,3e5),n.logout=function(){x.auth.signOut()},x.auth.onAuthStateChanged(function(e){return n.handleLogin(e)}),n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/interns/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({interns:n,isLoading:!1,addUI:!1});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),Object(p.a)(t,[{key:"handleLogin",value:function(){var e=Object(o.a)(l.a.mark(function e(t){var n,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({user:t}),null!=t){e.next=5;break}Object(x.startFirebaseUI)("#firebaseui-auth-container"),e.next=13;break;case 5:return e.next=7,fetch("/api/roles/rolelevel",{headers:{uid:t.uid}});case 7:return n=e.sent,e.next=10,n.text();case 10:a=e.sent,console.log(a),this.setState({rolelevel:a});case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"onDismiss",value:function(e){var t=this.state.interns.filter(function(t){return t.id!==e});this.setState({interns:t})}},{key:"refreshUI",value:function(){var e=Object(o.a)(l.a.mark(function e(t,n){var a,s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t&&t.preventDefault(),e.next=3,fetch("/api/interns/");case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,this.setState({interns:s,isLoading:!1,addUI:!1,addTaskUI:!1});case 8:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"addIntern",value:function(){this.setState({addUI:!0})}},{key:"addTask",value:function(){this.setState({addTaskUI:!0})}},{key:"onDelete",value:function(e){fetch("/api/interns/removeintern/"+e,{method:"DELETE"}).then(this.onDismiss(e))}},{key:"render",value:function(){var e=this.state,t=e.interns,n=(e.isLoading,e.addUI),a=e.addTaskUI;e.isLoggedIn;return console.log(this.state.user),null!==this.state.user?n?s.a.createElement(E,{callBack:this.refreshUI,submiturl:"/api/interns/createintern",fields:{name:"text",rating:"text"}}):a?s.a.createElement(E,{callBack:this.refreshUI,submiturl:"/api/tasks/add_task",fields:{taskName:"text",description:"text",deadline:"date"}}):s.a.createElement("div",{className:"page"},s.a.createElement("div",{align:"right"},s.a.createElement("div",null," ",this.state.user.email," "),s.a.createElement(g,{className:"button-inline",onClick:this.logout},"Logout")),s.a.createElement("div",{className:"table-header"},s.a.createElement("span",{style:S},s.a.createElement(g,{className:"button-inline",onClick:this.addIntern},"Add Interns")),s.a.createElement("span",null,s.a.createElement(g,{className:"button-inline",onClick:this.addTask}," Add a Task "))),s.a.createElement("h2",null,"Interns List"),s.a.createElement("div",{className:"table"},s.a.createElement("div",{className:"table-header"},s.a.createElement("span",{style:S}," Name "),s.a.createElement("span",{style:S}," Rating "),s.a.createElement("span",{style:S}," Tasks ")),s.a.createElement(v,{list:t,onDelete:this.onDelete,callBack:this.refreshUI,tag:I}))):s.a.createElement("div",{id:"firebaseui-auth-container"})}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.62dcf592.chunk.js.map