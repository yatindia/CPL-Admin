import { c as create_ssr_component, a as add_attribute } from "../../../chunks/index-2835083a.js";
import "sweetalert2";
var login_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".signup.svelte-pgr8qt{min-height:90vh;display:flex;justify-content:center;align-items:center;background-color:#B6D5EB\n    }form.svelte-pgr8qt{width:95%;max-width:400px;border:1px solid #B6D5EB;background-color:#fff;padding:52px 36px;border-radius:5px;box-shadow:5px 5px 5px rgba(0, 0, 0, 0.173)}")();
const css = {
  code: ".signup.svelte-pgr8qt{min-height:90vh;display:flex;justify-content:center;align-items:center;background-color:#B6D5EB\n    }form.svelte-pgr8qt{width:95%;max-width:400px;border:1px solid #B6D5EB;background-color:#fff;padding:52px 36px;border-radius:5px;box-shadow:5px 5px 5px rgba(0, 0, 0, 0.173)}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let form = { email: "", password: "" };
  $$result.css.add(css);
  return `${$$result.head += `<link rel="${"icon"}" href="${"/img/favicon.png"}" data-svelte="svelte-1ysstw2">${$$result.title = `<title>Login</title>`, ""}`, ""}

<section class="${"signup svelte-pgr8qt"}"><form class="${"svelte-pgr8qt"}"><div class="${"cover"}"><h1 class="${"text-center"}">Log In</h1>
            <br>
    
      
    
            <div class="${"form-group my-2"}"><label for="${"exampleInputEmail1"}">Email address</label>
                <input type="${"text"}" class="${"form-control my-2"}" id="${"exampleInputEmail1"}" aria-describedby="${"emailHelp"}" placeholder="${"Enter email"}"${add_attribute("value", form.email, 0)}>
                </div>
    
            <div class="${"form-group my-2"}"><label for="${"exampleInputPassword1"}">Password</label>
                <input type="${"password"}" class="${"form-control my-2"}" id="${"exampleInputPassword1"}" placeholder="${"Password"}"${add_attribute("value", form.password, 0)}></div>
    
            
            
            <button type="${"submit"}" class="${"btn btn-danger w-100 mt-2"}" style="${"background-color: #B6D5EB; border-color: :#000; color: #000"}">Login</button>
    
            
            </div></form>

</section>`;
});
export { Login as default };
