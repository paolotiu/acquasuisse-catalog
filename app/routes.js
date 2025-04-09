import { index, layout, route } from "@react-router/dev/routes";

export default [
  layout("layouts/navbar.jsx", [
    index("routes/faq.jsx"),
    // route("routes/faq.jsx"),
  ]),
];
