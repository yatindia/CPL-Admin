import { c as create_ssr_component, e as escape, a as add_attribute } from "../../chunks/index-2835083a.js";
var search_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "main.svelte-12yudzw.svelte-12yudzw{width:100%}main.svelte-12yudzw .searchtype.svelte-12yudzw{padding:10.6px}.search-container.svelte-12yudzw.svelte-12yudzw{text-align:center;margin:0 auto;display:flex;align-items:center;justify-content:center}.containerr.svelte-12yudzw.svelte-12yudzw{width:80%;margin:3% auto;padding:32px 0;border-radius:12px;height:480px;overflow-y:scroll;box-shadow:rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px}.containerr.svelte-12yudzw .property.svelte-12yudzw{background-color:#b6d5eb;color:#14213d;border:1px solid rgb(190, 186, 186);border-radius:8px;width:90%;height:auto;display:flex;gap:15px;padding:16px;margin:16px auto}.containerr.svelte-12yudzw .property .btnbox.svelte-12yudzw{display:flex}.containerr.svelte-12yudzw .property .btnbox a.update.svelte-12yudzw{margin-right:20px;border:1.6px solid #14213d}@media(max-width: 1000px){.containerr.svelte-12yudzw.svelte-12yudzw{width:98%}}@media(max-width: 826px){.containerr.svelte-12yudzw.svelte-12yudzw{width:70%}.containerr.svelte-12yudzw .property.svelte-12yudzw{flex-direction:column}}")();
const css = {
  code: "main.svelte-12yudzw.svelte-12yudzw{width:100%}main.svelte-12yudzw .searchtype.svelte-12yudzw{padding:10.6px}.search-container.svelte-12yudzw.svelte-12yudzw{text-align:center;margin:0 auto;display:flex;align-items:center;justify-content:center}.containerr.svelte-12yudzw.svelte-12yudzw{width:80%;margin:3% auto;padding:32px 0;border-radius:12px;height:480px;overflow-y:scroll;box-shadow:rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px}.containerr.svelte-12yudzw .property.svelte-12yudzw{background-color:#b6d5eb;color:#14213d;border:1px solid rgb(190, 186, 186);border-radius:8px;width:90%;height:auto;display:flex;gap:15px;padding:16px;margin:16px auto}.containerr.svelte-12yudzw .property .btnbox.svelte-12yudzw{display:flex}.containerr.svelte-12yudzw .property .btnbox a.update.svelte-12yudzw{margin-right:20px;border:1.6px solid #14213d}@media(max-width: 1000px){.containerr.svelte-12yudzw.svelte-12yudzw{width:98%}}@media(max-width: 826px){.containerr.svelte-12yudzw.svelte-12yudzw{width:70%}.containerr.svelte-12yudzw .property.svelte-12yudzw{flex-direction:column}}",
  map: null
};
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchValue;
  $$result.css.add(css);
  return `${$$result.head += `<link rel="${"icon"}" href="${"/img/favicon.png"}" data-svelte="svelte-fyebmq">${$$result.title = `<title>Search - ${escape("Property")}</title>`, ""}`, ""}




<main class="${"svelte-12yudzw"}"><div class="${"search-container svelte-12yudzw"}"><input type="${"text"}" class="${"px-4 my-4 p-2 mx-1"}" id="${"geocoder"}" placeholder="${"Search Property..."}"${add_attribute("value", searchValue, 0)}>
    <select class="${"custom-select searchtype svelte-12yudzw"}"><option selected value="${"Search by"}">Search by</option><option value="${"id"}">uid</option><option value="${"query"}">query</option></select>
    <button class="${"btn btn-danger py-2 px-4 mx-1"}">Search</button></div>
    ${``}
    ${``}
  
</main>`;
});
export { Search as default };
