import{d as C,G as x,Z as w,c as n,e as i,F as N,X as v,h as s,i as l,w as m,f as c,t as r,K as f,n as B,$ as D,C as p,a0 as I,k as L}from"./ByOkI3qH.js";import{f as V}from"./BcWussCh.js";const $=["data-content-id"],z={key:0,class:"image"},E={key:0},F={class:"content"},S={class:"description"},j=C({__name:"ArticlesListItem",props:{article:{type:Object,required:!0,validator:t=>!!(t!=null&&t._path&&t.title)},featured:{type:Boolean,default:!1}},setup(t){const h=t,_=x(()=>{var a,o;return(a=w())!=null&&a.isEnabled()?(o=h.article)==null?void 0:o._id:void 0});return(a,o)=>{var u;const y=D,d=p;return t.article._path&&t.article.title?(n(),i("article",{key:0,class:B({featured:t.featured}),"data-content-id":f(_)},[t.article.cover?(n(),i("div",z,[(u=t.article)!=null&&u.badges?(n(),i("div",E,[(n(!0),i(N,null,v(t.article.badges,(e,k)=>(n(),i("span",{key:k,style:I({backgroundColor:(e==null?void 0:e.bg)||"rgba(0, 0, 0, 0.3)",color:(e==null?void 0:e.color)||"white"})},r(typeof e=="string"?e:e.content),5))),128))])):s("",!0),l(d,{to:t.article._path},{default:m(()=>[l(y,{src:t.article.cover,alt:t.article.title,width:"16",height:"9"},null,8,["src","alt"])]),_:1},8,["to"])])):s("",!0),c("div",F,[l(d,{to:t.article._path,class:"headline"},{default:m(()=>[c("h1",null,r(t.article.title),1)]),_:1},8,["to"]),c("p",S,r(t.article.description),1),c("time",null,r(("formatDate"in a?a.formatDate:f(V))(t.article.date)),1)])],10,$)):s("",!0)}}}),G=L(j,[["__scopeId","data-v-6a1f6a12"]]);export{G as default};