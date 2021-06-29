(this["webpackJsonpreact-bookmarker"]=this["webpackJsonpreact-bookmarker"]||[]).push([[0],{14:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(7),s=r.n(c),o=(r(14),r(8)),i=r(2),u=r.n(i),l=r(3),b=r(9),m=r(0),d=function(){return Object(m.jsx)("header",{className:"border-bottom py-3",children:Object(m.jsx)("h1",{className:"text-muted fs-2 fw-normal",children:"Bookmarker"})})},j=function(e){var t=e.btnStyle,r=e.btnType,a=e.children;return Object(m.jsx)(n.Fragment,{children:Object(m.jsx)("button",{className:"btn ".concat(t),type:r,children:a})})},f=function(e){var t=e.buttonStyle,r=e.onAddBookmark,a=Object(n.useRef)(),c=Object(n.useRef)();return Object(m.jsxs)("div",{className:"mt-5 text-center",children:[Object(m.jsx)("h2",{className:"text-black-50",children:"Bookmark Your Favorite Sites"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=c.current.value,n=a.current.value;r({urlName:t,url:n,user:"JR"}),e.target.reset()},children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"urlName",className:"form-label text-primary",children:"URL Name"}),Object(m.jsx)("input",{type:"text",className:"form-control",name:"urlName",id:"urlName",ref:c})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"url",className:"form-label text-primary",children:"Site URL"}),Object(m.jsx)("input",{type:"url",className:"form-control",name:"url",id:"url",ref:a})]}),Object(m.jsx)("div",{children:Object(m.jsx)(j,{btnStyle:t.primary,children:"Add Bookmark"})})]})]})},h=function(e){var t=e.bookmark,r=e.onDelete;return Object(m.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",id:t._id,children:[Object(m.jsx)("p",{className:"fs-4 m-0 text-info bookmark-name",children:t.urlName}),Object(m.jsxs)("div",{className:"d-flex gap-2 justify-content-evenly actions",children:[Object(m.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",className:"btn btn-success",children:"Visit"}),Object(m.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){return r(t._id)},children:"Delete"})]})]})},p=function(e){var t=e.buttonStyle,r=e.bookmarks,n=e.deleteBookmarkHandler;return Object(m.jsx)("div",{className:"row bg-white rounded mt-5 shadow-sm p-4",children:Object(m.jsx)("ul",{className:"list-group",children:r.length>0?r.map((function(e){return Object(m.jsx)(h,{bookmark:e,buttonStyle:t,onDelete:n},e._id)})):Object(m.jsx)("p",{children:"No Bookmarks"})})})};var x=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),r=t[0],a=t[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var c=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/api/bookmark/".concat(t),{method:"DELETE"});case 2:n=e.sent,c=r.filter((function(e){return e._id!==t})),200===n.status?a(c):alert("Error Deleting This Task");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(l.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/api/bookmark");case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/api/bookmark",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,a([].concat(Object(o.a)(r),[c.data]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h={primary:"btn-primary",secondary:"btn-secondary",danger:"btn-danger"};return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(d,{}),Object(m.jsx)("div",{className:"row bg-white rounded mt-3 shadow-sm p-4",children:Object(m.jsx)(f,{buttonStyle:h,onAddBookmark:c})}),Object(m.jsx)(p,{buttonStyle:h,bookmarks:r,deleteBookmarkHandler:s})]})},k=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,18)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),k()}},[[17,1,2]]]);
//# sourceMappingURL=main.5920f6f5.chunk.js.map