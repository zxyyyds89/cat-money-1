import{a as u}from"./vant.c4850561.js";import{bE as m,bR as c,bF as t,bU as s,bS as d,bM as f}from"./vendor.28e57c02.js";import{B as g,a as F,M as b,h as B}from"./index.6cbd4ca1.js";import{T as p,s as r}from"./TagForm.f731002f.js";const v=m({setup:(E,h)=>{const o=c(),e=parseInt(o.params.id.toString());if(Number.isNaN(e))return()=>t("div",null,[s("id \u4E0D\u5B58\u5728")]);const n=d(),l=()=>{u.alert({title:"\u63D0\u793A",message:"\u5220\u9664\u5931\u8D25"})},i=async a=>{await u.confirm({title:"\u786E\u8BA4",message:"\u4F60\u771F\u7684\u8981\u5220\u9664\u5417\uFF1F"}),await B.delete(`/tags/${e}`,{with_items:a!=null&&a.withItems?"true":"false"},{_autoLoading:!0}).catch(l),n.back()};return()=>t(b,null,{title:()=>"\u7F16\u8F91\u6807\u7B7E",icon:()=>t(g,null,null),default:()=>t(f,null,[t(p,{id:e},null),t("div",{class:r.actions},[t(F,{level:"danger",class:r.removeTagsAndItems,onClick:()=>i({withItems:!0})},{default:()=>[s("\u5220\u9664\u6807\u7B7E\uFF08\u5BF9\u5E94\u8BB0\u8D26\u4E5F\u4F1A\u88AB\u5220\u9664\uFF09")]})])])})}});export{v as TagEdit,v as default};
