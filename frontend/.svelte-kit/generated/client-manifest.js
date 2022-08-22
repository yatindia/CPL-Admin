export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/auth/forgotPassword.svelte"),
	() => import("../../src/routes/auth/login.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/search.svelte"),
	() => import("../../src/routes/user/[id].svelte"),
	() => import("../../src/routes/view/property/[id].svelte")
];

export const dictionary = {
	"": [[0, 4], [1]],
	"search": [[0, 5], [1]],
	"auth/forgotPassword": [[0, 2], [1]],
	"auth/login": [[0, 3], [1]],
	"view/property/[id]": [[0, 7], [1]],
	"user/[id]": [[0, 6], [1]]
};