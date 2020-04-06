/*
 * Created by Stefan Korecko, 2020
 */

export default class SimpleHistoryRouter {
  constructor(routes) {
    this.routes = routes;
    window.addEventListener("popstate", event => this.doRouting(event));
    /*
    one may think that it will be better to add the listener as
    window.addEventListener("popstate", this.doRouting);
    However, then inside the corresponding doRouting call the 
    this will point to window and not to SimpleHistoryRouter instance. 
    */

    this.loadRoute("");
  }

  loadRoute(path) {
    window.history.pushState({}, "", "/" + path);
    this.doRouting();
  }

  /**
   * Does the routing as defined by the routes array
   */
  doRouting() {
    let path = window.location.pathname;

    if (path) {
      path = path[0] === "/" ? path.substr(1) : path;
      const matchingRoute = this.routes.find(route => route.path === path);

      if (matchingRoute) {
        document.getElementById(matchingRoute.target).innerHTML =
          matchingRoute.content;
      }
    }
  }
}
