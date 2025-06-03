export const menu = [
  {
    key: 1,
    heading: "Discover",
    href: "#",
    sublinks: [
      {
        name: "New In",
        href: "/discover/new-in"
      },
      {
        name: "Best Sellers",
        href: "/discover/bestsellers"
      },
      {
        name: "View All",
        href: "/discover/view-all"
      }
    ]
  },
  {
    key: 2,
    heading: "Collections",
    href: "#",
    sublinks: [
      {
        name: "Unisex",
        href: "/catalogue/unisex"
      },
      {
        name: "For Men",
        href: "/catalogue/men"
      },
      {
        name: "For Women",
        href: "/catalogue/women"
      }
    ],
  },
  {
    key: 3,
    heading: "About",
    href: "/about",
    sublinks: [
      {
        name: "About Us",
        href: "/about/about-us"
      },
      {
        name: "Branches",
        href: "/about/branches"
      },
      {
        name: "FAQs",
        href: "/about/faq"
      }
    ]

  }
]

const socials = {
  heading: "Socials",
  href: "#",
  sublinks: [
    {
      name: "Instagram",
      href: "#"
    },
    {
      name: "Facebook",
      href: "#"
    },
    {
      name: "Shopee",
      href: "#"
    }
  ]
}

export const sitemap = menu.concat(socials)