import { index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/main.jsx", [
        index("routes/Home.jsx"),
        route("catalogue", "routes/Catalogue.jsx"),
        route("product/:productId", "routes/product.jsx"),
        route("about", "routes/about/About.jsx", [
            index("routes/about/Index.jsx"),
            route("about-us", "routes/about/about.jsx"),
            route("branches", "routes/about/Branches.jsx"),
            route("faq", "routes/about/FAQ.jsx"),
        ]),
        route("discover", "routes/discover/Discover.jsx", [
            index("routes/discover/Discover-Index.jsx"),
            route("new-in", "routes/discover/new_in.jsx"),
            route("bestsellers", "routes/discover/bestsellers.jsx"),
            route("view-all", "routes/discover/view_all.jsx"),
        ]),
        route("catalogue", "routes/catalogue/Catalogue.jsx", [
            route("men", "routes/catalogue/men.jsx"),
            route("women", "routes/catalogue/women.jsx"),
            route("unisex", "routes/catalogue/unisex.jsx"),
        ])
    ])
];
