import{catalog}from"catalog";
const c=catalog("Desktop Studio","Ready-to-use desktops for office, gaming and creative work. Built, tested and warranted by Hindnet.","desktops");
export default async()=>(await c.page()).replace('<div class="bar">','<a class="promo" href="/build"><div><b>Want it your way?</b><br><span>Design a custom PC with live prices in our PC Builder.</span></div><span class="btn">Open PC Builder</span></a><div class="bar">');
export const mount=c.mount;
