import { c as create_ssr_component, v as validate_component } from "../../chunks/index-2835083a.js";
var Header_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".nav-link.svelte-14q5el1.svelte-14q5el1{color:#14213d\n\n}.logo.svelte-14q5el1.svelte-14q5el1{height:5vh;margin:2vh}a.svelte-14q5el1.svelte-14q5el1{text-decoration:none !important}ul.svelte-14q5el1.svelte-14q5el1{list-style:none;display:flex;justify-content:center;align-items:center}ul.svelte-14q5el1 a li.svelte-14q5el1{font-size:20px;font-weight:bold;color:#14213d;padding:0 10px 0 10px}nav.bgdanger.svelte-14q5el1.svelte-14q5el1{background-color:#B6D5EB}.logout.svelte-14q5el1.svelte-14q5el1{color:#14213d}")();
const css$2 = {
  code: ".nav-link.svelte-14q5el1.svelte-14q5el1{color:#14213d\n\n}.logo.svelte-14q5el1.svelte-14q5el1{height:5vh;margin:2vh}a.svelte-14q5el1.svelte-14q5el1{text-decoration:none !important}ul.svelte-14q5el1.svelte-14q5el1{list-style:none;display:flex;justify-content:center;align-items:center}ul.svelte-14q5el1 a li.svelte-14q5el1{font-size:20px;font-weight:bold;color:#14213d;padding:0 10px 0 10px}nav.bgdanger.svelte-14q5el1.svelte-14q5el1{background-color:#B6D5EB}.logout.svelte-14q5el1.svelte-14q5el1{color:#14213d}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { login } = $$props;
  if ($$props.login === void 0 && $$bindings.login && login !== void 0)
    $$bindings.login(login);
  $$result.css.add(css$2);
  return `<nav class="${"navbar navbar-expand-lg navbar-light bgdanger svelte-14q5el1"}"><div class="${"container-fluid"}"><a class="${"navbar-brand svelte-14q5el1"}" href="${"/"}"><img class="${"logo svelte-14q5el1"}" src="${"/img/logo.png"}" alt="${""}"></a>
    <button class="${"navbar-toggler"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#navbarSupportedContent"}" aria-controls="${"navbarSupportedContent"}" aria-expanded="${"false"}" aria-label="${"Toggle navigation"}"><span class="${"navbar-toggler-icon"}"></span></button>
    <div class="${"collapse navbar-collapse"}" id="${"navbarSupportedContent"}"><ul class="${"navbar-nav me-auto mb-2 mb-lg-0 svelte-14q5el1"}">
        <li class="${"nav-item svelte-14q5el1"}"><a class="${"nav-link svelte-14q5el1"}" aria-current="${"page"}" href="${"/search"}">Search</a></li></ul>
<div class="${"d-flex"}">${login !== null ? `<div class="${"collapse navbar-collapse"}" id="${"navbarSupportedContent"}"><ul class="${"navbar-nav me-auto mb-2 mb-lg-0 svelte-14q5el1"}">
      
      <li class="${"nav-item logout svelte-14q5el1"}"><button class="${"btn btn-light"}">Logout \xA0<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-box-arrow-right"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"}"></path><path fill-rule="${"evenodd"}" d="${"M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"}"></path></svg></button></li>
      </ul></div>` : `<div class="${"collapse navbar-collapse"}" id="${"navbarSupportedContent"}"><ul class="${"navbar-nav me-auto mb-2 mb-lg-0 svelte-14q5el1"}"><li class="${"nav-item active svelte-14q5el1"}"><a class="${"nav-link svelte-14q5el1"}" href="${"/"}">Login</a></li></ul></div>`}</div></div></div>
</nav>`;
});
var Footer_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "footer.svelte-1kxgub.svelte-1kxgub{background-color:#b6d5eb}footer.svelte-1kxgub .svelte-1kxgub{color:#14213d}")();
const css$1 = {
  code: "footer.svelte-1kxgub.svelte-1kxgub{background-color:#b6d5eb}footer.svelte-1kxgub .svelte-1kxgub{color:#14213d}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `


  <footer class="${"text-center text-lg-start bg-dangertext-muted pt-2 svelte-1kxgub"}">
    
      
      
      
  
      
      
      
    
    
  
    
    <section class="${" svelte-1kxgub"}"><div class="${"container text-center text-md-start mt-5 svelte-1kxgub"}">
        <div class="${"row mt-3 svelte-1kxgub"}">
          <div class="${"col-md-4 col-lg-4 col-xl-3 mx-auto mb-4 flogo svelte-1kxgub"}">
            <h6 class="${"text-uppercase fw-bold mb-4 svelte-1kxgub"}"><img width="${"280px"}" src="${"http://localhost:3000/img/logo.png"}" alt="${""}" class="${"svelte-1kxgub"}"></h6>
            <p class="${"svelte-1kxgub"}">Get connected with us
            </p>
            <div class="${"svelte-1kxgub"}"><a href="${"https://www.facebook.com"}" target="${"blank"}" class="${"me-4 text-reset svelte-1kxgub"}"><i class="${"fab fa-facebook fa-xl svelte-1kxgub"}"></i></a>
              <a href="${"https://www.twitter.com"}" target="${"blank"}" class="${"me-4 text-reset svelte-1kxgub"}"><i class="${"fab fa-twitter fa-xl svelte-1kxgub"}"></i></a>
              
              <a href="${"https://www.linkedin.com"}" target="${"blank"}" class="${"me-4 text-reset fa-xl svelte-1kxgub"}"><i class="${"fab fa-linkedin svelte-1kxgub"}"></i></a>
              </div></div>
          
  
          
          <div class="${"col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 pt-4 svelte-1kxgub"}">
            <h6 class="${"text-uppercase fw-bold mb-4 svelte-1kxgub"}">Useful links
            </h6>
            <p class="${"svelte-1kxgub"}"><a href="${"/search"}" class="${"text-reset svelte-1kxgub"}">Search</a></p>
            <p class="${"svelte-1kxgub"}"><a href="${"/about"}" class="${"text-reset svelte-1kxgub"}">About</a></p>
            <p class="${"svelte-1kxgub"}"><a href="${"/user/post"}" class="${"text-reset svelte-1kxgub"}">Add Property</a></p>
            </div>
          
  
          
          <div class="${"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 pt-4 svelte-1kxgub"}">
            <h6 class="${"text-uppercase fw-bold mb-4 svelte-1kxgub"}">Useful links
            </h6>
            <p class="${"svelte-1kxgub"}"><a href="${"/"}" class="${"text-reset svelte-1kxgub"}">Contact Us</a></p>
            
            <p class="${"svelte-1kxgub"}"><a href="${"/"}" class="${"text-reset svelte-1kxgub"}">Terms of Use</a></p>
            <p class="${"svelte-1kxgub"}"><a href="${"/"}" class="${"text-reset svelte-1kxgub"}">Privacy Policy</a></p></div>
          
  
          
          <div class="${"col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 pt-4 svelte-1kxgub"}">
            <h6 class="${"text-uppercase fw-bold mb-4 svelte-1kxgub"}">Contact
            </h6>
            <p class="${"svelte-1kxgub"}"><i class="${"fas fa-home me-3 svelte-1kxgub"}"></i> New Jersey, NJ 10012, US</p>
            <p class="${"svelte-1kxgub"}"><i class="${"fas fa-envelope me-3 svelte-1kxgub"}"></i>
              itproz@yahoo.com
            </p>
            <p class="${"svelte-1kxgub"}"><i class="${"fas fa-phone me-3 svelte-1kxgub"}"></i> + 01 234 567 88</p>
            <p class="${"svelte-1kxgub"}"><i class="${"fas fa-print me-3 svelte-1kxgub"}"></i> + 01 234 567 89</p></div>
          </div>
        </div></section>
    
  
    
    <div class="${"text-center p-4 svelte-1kxgub"}" style="${"background-color: rgba(0, 0, 0, 0.05);"}">\xA9 2021 Copyright:
      <a class="${"text-reset fw-bold svelte-1kxgub"}" href="${"https://itprozcorp.com/"}">itprozcorp.com</a></div>
    </footer>
  `;
});
var __layout_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "h1{font-family:'Poppins', sans-serif;font-weight:bold}h2{font-family:'Poppins', sans-serif;font-weight:bold}h3{font-family:'Poppins', sans-serif;font-weight:bold}h4{font-family:'Poppins', sans-serif;font-weight:bold}h5{font-family:'Poppins', sans-serif;font-weight:bold}h6{font-family:'Poppins', sans-serif;font-weight:bold}")();
const css = {
  code: "h1{font-family:'Poppins', sans-serif;font-weight:bold}h2{font-family:'Poppins', sans-serif;font-weight:bold}h3{font-family:'Poppins', sans-serif;font-weight:bold}h4{font-family:'Poppins', sans-serif;font-weight:bold}h5{font-family:'Poppins', sans-serif;font-weight:bold}h6{font-family:'Poppins', sans-serif;font-weight:bold}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let login;
  $$result.css.add(css);
  return `



${validate_component(Header, "Header").$$render($$result, { login }, {}, {})}




<main style="${"min-height:90vh"}">${slots.default ? slots.default({}) : ``}</main>




${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default };
