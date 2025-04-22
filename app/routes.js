import { index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/main.jsx", [
        index("routes/Home.jsx"),
        route("catalogue", "routes/Catalogue.jsx"),
        route("product", "routes/product.jsx"),

        route("about", "routes/about/About.jsx", [
            index("routes/about/Index.jsx"),
            route("about-us", "routes/about/about.jsx"),
            route("branches", "routes/about/Branches.jsx"),
            route("faq", "routes/about/FAQ.jsx"),
        ]),
    ])
];
