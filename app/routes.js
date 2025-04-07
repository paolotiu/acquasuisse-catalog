import { index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/navbar.jsx", [
        index("routes/home.jsx")
        // route("routes/about.jsx")
    ])
];
