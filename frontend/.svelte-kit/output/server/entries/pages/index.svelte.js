import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/index-2835083a.js";
import "sweetalert2";
var login_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".signup.svelte-1c9oeba{min-height:90vh;display:flex;justify-content:center;align-items:center;background-color:#fff\n    }h1.svelte-1c9oeba{color:#14213d}form.svelte-1c9oeba{width:95%;max-width:400px;border:1px solid #B6D5EB;background-color:#B6D5EB;padding:52px 36px;border-radius:5px;box-shadow:5px 5px 5px rgba(0, 0, 0, 0.173)}button.btn.svelte-1c9oeba{background-color:#14213d;color:#fff}")();
const css$1 = {
  code: ".signup.svelte-1c9oeba{min-height:90vh;display:flex;justify-content:center;align-items:center;background-color:#fff\n    }h1.svelte-1c9oeba{color:#14213d}form.svelte-1c9oeba{width:95%;max-width:400px;border:1px solid #B6D5EB;background-color:#B6D5EB;padding:52px 36px;border-radius:5px;box-shadow:5px 5px 5px rgba(0, 0, 0, 0.173)}button.btn.svelte-1c9oeba{background-color:#14213d;color:#fff}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let form = { email: "", password: "" };
  $$result.css.add(css$1);
  return `${$$result.head += `<link rel="${"icon"}" href="${"/img/favicon.png"}" data-svelte="svelte-1ysstw2">${$$result.title = `<title>Login</title>`, ""}`, ""}

<section class="${"signup svelte-1c9oeba"}"><form class="${"svelte-1c9oeba"}"><div class="${"cover"}"><h1 class="${"text-center svelte-1c9oeba"}">Log In</h1>
            <br>
    
      
    
            <div class="${"form-group my-2"}"><label for="${"exampleInputEmail1"}">Email address</label>
                <input type="${"text"}" class="${"form-control my-2"}" id="${"exampleInputEmail1"}" aria-describedby="${"emailHelp"}" placeholder="${"Enter email"}"${add_attribute("value", form.email, 0)}>
                </div>
    
            <div class="${"form-group my-2"}"><label for="${"exampleInputPassword1"}">Password</label>
                <input type="${"password"}" class="${"form-control my-2"}" id="${"exampleInputPassword1"}" placeholder="${"Password"}"${add_attribute("value", form.password, 0)}></div>
    
            
            
            <button type="${"submit"}" class="${"btn btn-danger w-100 mt-2 svelte-1c9oeba"}">Login</button>
    
            
            </div></form>

</section>`;
});
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "@media(max-width: 768px){}@media(max-width: 420px){}")();
const css = {
  code: "@media(max-width: 768px){}@media(max-width: 420px){}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Login, "Hero").$$render($$result, {}, {}, {})}



              
               
    
    

      
      
  
  
 
     
   
    
  `;
});
export { Routes as default };
