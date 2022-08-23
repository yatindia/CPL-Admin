import { c as create_ssr_component, e as escape, a as add_attribute } from "../../../../chunks/index-2835083a.js";
import mapboxgl from "mapbox-gl";
var ShareButton_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".ssbc-button__link.svelte-abzkh4,.ssbc-button__icon.svelte-abzkh4{display:inline-block}.ssbc-button__link.svelte-abzkh4{text-decoration:none;color:#fff}.ssbc-button.svelte-abzkh4{transition:25ms ease-out;padding:0.75em}.ssbc-button__icon.svelte-abzkh4 svg{width:1em;height:1em;margin:0;vertical-align:middle}.ssbc-button__icon--fill.svelte-abzkh4{fill:#fff;stroke:none}.ssbc-button__icon--outline.svelte-abzkh4{fill:none;stroke:#fff}")();
var Email_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".ssbc-button--email{background-color:#777777}.ssbc-button--email:active,.ssbc-button--email:hover{background-color:#5e5e5e}")();
var Facebook_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".ssbc-button--facebook{background-color:#3b5998}.ssbc-button--facebook:active,.ssbc-button--facebook:hover{background-color:#2d4373}")();
var HackerNews_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".ssbc-button--hacker-news{background-color:#FF6600}.ssbc-button--hacker-news:active,.ssbc-button--hacker-news:hover{background-color:#FB6200}")();
var LinkedIn_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".ssbc-button--linkedin{background-color:#0077b5}.ssbc-button--linkedin:active,.ssbc-button--linkedin:hover{background-color:#046293}")();
var Pinterest_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".ssbc-button--pinterest{background-color:#bd081c}.ssbc-button--pinterest:active,.ssbc-button--pinterest:hover{background-color:#8c0615}")();
var Reddit_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".ssbc-button--reddit{background-color:#5f99cf}.ssbc-button--reddit:active,.ssbc-button--reddit:hover{background-color:#3a80c1}")();
var Telegram_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".ssbc-button--telegram{background-color:#54A9EB}.ssbc-button--telegram:active,.ssbc-button--telegram:hover{background-color:#4B97D1}")();
var Tumblr_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".ssbc-button--tumblr{background-color:#35465C}.ssbc-button--tumblr:active,.ssbc-button--tumblr:hover{background-color:#222d3c}")();
var Twitter_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".ssbc-button--twitter{background-color:#55acee}.ssbc-button--twitter:active,.ssbc-button--twitter:hover{background-color:#2795e9}")();
var Vk_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".ssbc-button--vk{background-color:#507299}.ssbc-button--vk:active,.ssbc-button--vk:hover{background-color:#43648c}")();
var WhatsApp_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".ssbc-button--whatsapp{background-color:#25D366}.ssbc-button--whatsapp:active,.ssbc-button--whatsapp:hover{background-color:#1DA851}")();
var Xing_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".ssbc-button--xing{background-color:#1a7576}.ssbc-button--xing:active,.ssbc-button--xing:hover{background-color:#114C4C}")();
var Line_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".ssbc-button--line{background-color:#00B900}.ssbc-button--line:active,.ssbc-button--line:hover{background-color:#00B900}")();
var _id__svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".social-container.svelte-1i6f93k.svelte-1i6f93k{width:80%;margin:2% auto;display:flex;justify-content:center;align-items:center;gap:5px;flex-direction:column}.carousel.svelte-1i6f93k.svelte-1i6f93k{width:70%;height:50vh;overflow:hidden;margin:auto}.accordion.svelte-1i6f93k.svelte-1i6f93k{width:70%;margin:25px auto 0 auto}strong.svelte-1i6f93k.svelte-1i6f93k{color:red}.accordion-button.svelte-1i6f93k.svelte-1i6f93k:not(.collapsed){color:red;background-color:#ffe7e7}.list-group.svelte-1i6f93k>li.svelte-1i6f93k:nth-child(odd){background-color:#ffe7e7}.list-group.svelte-1i6f93k>li.svelte-1i6f93k{padding:10px}.list-group.svelte-1i6f93k.svelte-1i6f93k{padding:5px;box-shadow:rgba(0, 0, 0, 0.1) 1px 1px 40px}.main-container.svelte-1i6f93k.svelte-1i6f93k{position:relative;padding-top:24px;color:#14213d}h3.svelte-1i6f93k.svelte-1i6f93k,li.svelte-1i6f93k.svelte-1i6f93k,table.svelte-1i6f93k.svelte-1i6f93k{color:#14213d}.delbuttons.svelte-1i6f93k.svelte-1i6f93k{position:absolute;right:12px;top:12px}.list-group.svelte-1i6f93k.svelte-1i6f93k{background-color:#b6d5eb}.list-group.svelte-1i6f93k>li.svelte-1i6f93k:nth-of-type(odd){background-color:#b6d5eb}.list-group.svelte-1i6f93k>li.svelte-1i6f93k:nth-of-type(even){background-color:#fff}.prof-div.svelte-1i6f93k.svelte-1i6f93k{width:50%;margin:0 auto}")();
const css = {
  code: ".social-container.svelte-1i6f93k.svelte-1i6f93k{width:80%;margin:2% auto;display:flex;justify-content:center;align-items:center;gap:5px;flex-direction:column}.carousel.svelte-1i6f93k.svelte-1i6f93k{width:70%;height:50vh;overflow:hidden;margin:auto}.accordion.svelte-1i6f93k.svelte-1i6f93k{width:70%;margin:25px auto 0 auto}strong.svelte-1i6f93k.svelte-1i6f93k{color:red}.accordion-button.svelte-1i6f93k.svelte-1i6f93k:not(.collapsed){color:red;background-color:#ffe7e7}.list-group.svelte-1i6f93k>li.svelte-1i6f93k:nth-child(odd){background-color:#ffe7e7}.list-group.svelte-1i6f93k>li.svelte-1i6f93k{padding:10px}.list-group.svelte-1i6f93k.svelte-1i6f93k{padding:5px;box-shadow:rgba(0, 0, 0, 0.1) 1px 1px 40px}.main-container.svelte-1i6f93k.svelte-1i6f93k{position:relative;padding-top:24px;color:#14213d}h3.svelte-1i6f93k.svelte-1i6f93k,li.svelte-1i6f93k.svelte-1i6f93k,table.svelte-1i6f93k.svelte-1i6f93k{color:#14213d}.delbuttons.svelte-1i6f93k.svelte-1i6f93k{position:absolute;right:12px;top:12px}.list-group.svelte-1i6f93k.svelte-1i6f93k{background-color:#b6d5eb}.list-group.svelte-1i6f93k>li.svelte-1i6f93k:nth-of-type(odd){background-color:#b6d5eb}.list-group.svelte-1i6f93k>li.svelte-1i6f93k:nth-of-type(even){background-color:#fff}.prof-div.svelte-1i6f93k.svelte-1i6f93k{width:50%;margin:0 auto}",
  map: null
};
function load({ params }) {
  return { props: { id: params.id } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  mapboxgl.accessToken = "pk.eyJ1Ijoic2F0aHlhZGV2IiwiYSI6ImNsM3R5bGh1cjBlZ2wzaXBjazI2ZTBnMm8ifQ.GLQgbjT3w49JfCTJ_iEsQA";
  let property;
  let embVidLink;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css);
  `Hi, I have listed ${(property == null ? void 0 : property.title) ? property.title : "My Property"} in Commercial Listing Pro ${(property == null ? void 0 : property.for) ? "for " + property.for : ""}`;
  return `
  
  
  ${$$result.head += `<link rel="${"icon"}" href="${"/img/favicon.png"}" data-svelte="svelte-1vkuilw">${$$result.title = `<title>Property - ${escape("")}</title>`, ""}`, ""}
  
  
  
  
  <div class="${"main-container svelte-1i6f93k"}">${``}
    
        
    ${``}
  
    <div class="${"container my-5"}" style="${"width:70%"}"><div class="${"row"}">${`<div class="${"col-sm"}"><iframe width="${"100%"}" height="${"315"}"${add_attribute("src", `https://www.youtube.com/embed/${embVidLink}`, 0)} title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen></iframe></div>`}
  
            <div class="${"col-sm"}"><div style="${"width:100%;height:315px"}" class="${"col-12 map"}" id="${"map"}"></div></div></div></div>
  
  
    
  
  <div class="${"delbuttons svelte-1i6f93k"}"><button class="${"btn btn-danger"}">Delete Property</button>
    <button class="${"btn btn-primary mx-2"}">View User</button></div>
 

  
  
  </div>`;
});
export { U5Bidu5D as default, load };
