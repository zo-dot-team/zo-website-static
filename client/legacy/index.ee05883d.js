import{_ as t,a as s,b as n,c as o,i as r,s as a,d as e,S as f,f as c,q as i,g as u,h,r as l,j as p,k as g,l as v,u as d,v as m,w as b,y as j,n as E,M as x}from"./index.6a46bb3d.js";function q(t,s,n){var o=Object.create(t);return o.post=s[n],o}function y(t){var s,n,o,r,a=t.post.title+"";return{c:function(){s=c("li"),n=c("a"),o=i(a),this.h()},l:function(t){s=u(t,"LI",{},!1);var r=h(s);n=u(r,"A",{rel:!0,href:!0},!1);var e=h(n);o=l(e,a),e.forEach(p),r.forEach(p),this.h()},h:function(){g(n,"rel","prefetch"),g(n,"href",r="blog/"+t.post.slug)},m:function(t,r){v(t,s,r),d(s,n),d(n,o)},p:function(t,s){t.posts&&a!==(a=s.post.title+"")&&m(o,a),t.posts&&r!==(r="blog/"+s.post.slug)&&g(n,"href",r)},d:function(t){t&&p(s)}}}function L(t){for(var s,n,o,r,a,e=t.posts,f=[],m=0;m<e.length;m+=1)f[m]=y(q(t,e,m));return{c:function(){s=b(),n=c("h1"),o=i("Recent posts"),r=b(),a=c("ul");for(var t=0;t<f.length;t+=1)f[t].c();this.h()},l:function(t){s=j(t),n=u(t,"H1",{},!1);var e=h(n);o=l(e,"Recent posts"),e.forEach(p),r=j(t),a=u(t,"UL",{class:!0},!1);for(var c=h(a),i=0;i<f.length;i+=1)f[i].l(c);c.forEach(p),this.h()},h:function(){document.title="Blog",g(a,"class","svelte-1frg2tf")},m:function(t,e){v(t,s,e),v(t,n,e),d(n,o),v(t,r,e),v(t,a,e);for(var c=0;c<f.length;c+=1)f[c].m(a,null)},p:function(t,s){if(t.posts){var n;for(e=s.posts,n=0;n<e.length;n+=1){var o=q(s,e,n);f[n]?f[n].p(t,o):(f[n]=y(o),f[n].c(),f[n].m(a,null))}for(;n<f.length;n+=1)f[n].d(1);f.length=e.length}},i:E,o:E,d:function(t){t&&(p(s),p(n),p(r),p(a)),x(f,t)}}}function R(t){t.params,t.query;return this.fetch("blog.json").then(function(t){return t.json()}).then(function(t){return{posts:t}})}function k(t,s,n){var o=s.posts;return t.$set=function(t){"posts"in t&&n("posts",o=t.posts)},{posts:o}}export default(function(c){function i(t){var f;return s(this,i),f=n(this,o(i).call(this)),r(e(f),t,k,L,a,["posts"]),f}return t(i,f),i}());export{R as preload};
