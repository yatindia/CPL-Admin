export const manifest = {
	appDir: "_app",
	assets: new Set(["img/Group 18 (1).png","img/Group 18.png","img/Group 204.png","img/Group 35.png","img/bg.jpg","img/building_ph.jpg","img/city.png","img/delete.png","img/empty.gif","img/favicon.png","img/heroBuilding.png","img/imagesr.jpeg","img/imagesr2.jpeg","img/immig.jpg","img/indexi.jpeg","img/logo.png","img/placeholder.png","img/redLogo.png","img/text_logo_instaretail.png","img/upload.png","img/upload_1.png","img/user.webp"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".gif":"image/gif",".jpeg":"image/jpeg",".webp":"image/webp"},
	_: {
		entry: {"file":"start-a9c5cfb2.js","js":["start-a9c5cfb2.js","chunks/index-836e8b2d.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "search",
				pattern: /^\/search\/?$/,
				names: [],
				types: [],
				path: "/search",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "auth/forgotPassword",
				pattern: /^\/auth\/forgotPassword\/?$/,
				names: [],
				types: [],
				path: "/auth/forgotPassword",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "auth/login",
				pattern: /^\/auth\/login\/?$/,
				names: [],
				types: [],
				path: "/auth/login",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "view/property/[id]",
				pattern: /^\/view\/property\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "user/[id]",
				pattern: /^\/user\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,7],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
