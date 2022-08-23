import { c as create_ssr_component, a as add_attribute } from "../../../chunks/index-2835083a.js";
var forgotPassword_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".signup.svelte-1g9qvjm{min-height:90vh;display:flex;justify-content:center;align-items:center;background-color:#c1202c\n    }form.svelte-1g9qvjm{width:95%;max-width:400px;border:1px solid red;background-color:#fff;padding:20px;border-radius:5px;box-shadow:5px 5px 5px rgba(0, 0, 0, 0.173)}")();
const css = {
  code: ".signup.svelte-1g9qvjm{min-height:90vh;display:flex;justify-content:center;align-items:center;background-color:#c1202c\n    }form.svelte-1g9qvjm{width:95%;max-width:400px;border:1px solid red;background-color:#fff;padding:20px;border-radius:5px;box-shadow:5px 5px 5px rgba(0, 0, 0, 0.173)}",
  map: null
};
function load({ url }) {
  return { props: { email: url } };
}
const ForgotPassword = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { email } = $$props;
  if ($$props.email === void 0 && $$bindings.email && email !== void 0)
    $$bindings.email(email);
  $$result.css.add(css);
  email = email.searchParams.get("email") || "";
  return `${$$result.head += `<link rel="${"icon"}" href="${"/img/favicon.png"}" data-svelte="svelte-4r97eb">${$$result.title = `<title>Password Recovery</title>`, ""}`, ""}

<section class="${"signup svelte-1g9qvjm"}"><form class="${"svelte-1g9qvjm"}"><div class="${"cover"}"><h1 class="${"text-center"}">Recover Password</h1>
            <br>    
    
            <div class="${"form-group"}"><label for="${"exampleInputEmail1"}">Email address</label>
                <input type="${"email"}" class="${"form-control"}" aria-describedby="${"emailHelp"}" placeholder="${"Enter email"}"${add_attribute("value", email, 0)}></div>
 
            <button type="${"submit"}" class="${"btn btn-danger w-100 mt-2"}">Recover Password</button>
    
            <div class="${"form-group"}"><a href="${"/auth/signup"}" class="${"text-decoration-none text-danger d-block text-center w-100 mt-4"}">Don&#39;t have an account? Signup
                </a></div></div></form>

</section>`;
});
export { ForgotPassword as default, load };
