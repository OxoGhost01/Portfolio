import { type RouteConfig, index, route } from "@react-router/dev/routes";


export default [
    index("routes/home.tsx"),
    route("hobbies", "routes/hobbies.tsx"),
    route("about", "routes/about.tsx"),
    route("projects", "routes/projects.tsx"),
    route("projects/TrackmanAI", "routes/projects/trackmanai.tsx"),

] satisfies RouteConfig;
