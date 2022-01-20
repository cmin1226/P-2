import main from "./pages/main.js";
import login from "./pages/login.js";

const router = async () => {
    const routes = [
        { path: "/", view: main},
        { path: "/login", view: login}
    ];
    const page = new match.route.view();

    document.querySelector("#root").innerHTML = await page.getHtml();
};

const pageMatches = routes.map((route)=>{
    return{
        route,
        isMatch: route.path === location.pathname,
    };
});

let match = pageMatches.find((pageMatch) => pageMatch.isMatch);
console.log(match.route.view());

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")){
            e.preventDefault();
            history.pushState(null, null, e.target.href);
        }
    });
    router();
});

window.addEventListener("popstate", () => {
    router();
});