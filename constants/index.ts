export type ReviewProps = {
    name: string;
    logo: string;
    review: string;
}
export type PricingProps = {
    plan: string,
    price: string | number,
    includes: string[],
    description: string,
    isPopular: boolean,
}

export const pricingList: PricingProps[] = [
    {
        plan: "Starter",
        price: 9.99,
        includes: [
            `Up to <span style="color: #FACC15">500</span> orders`,
            "Unlimited Active Upsell Funnels",
            "Smart Cart (Fully Customizable)",
            "Pre-Purchase Upsell",
            "Custom Triggers",
            "Customizable Upsell Offers",
            "Mobile-Optimized Upsell Offers",
            "Manual Product Recommendations",
            "Analytics",
            "Priority email support"
        ],
        description: "Up to 500 upsell orders, then just $2 per 100 extra orders. Maximum capped charge: $100.",
        isPopular: false
    },
    {
        plan: "Growth",
        price: 19.99,
        includes: [
            `Up to <span style="color: #FACC15" >2000</span> orders`,
            "Unlimited Active Upsell Funnels",
            "Pre-Purchase Upsell",
            "Post Purchase Upsell",
            "Smart Cart (fully customizable)",
            "Multi-Step Upsell Flows",
            "Custom Triggers",
            "Advanced Analytics",
            "Live chat & email support"
        ],
        description: "Up to 2000 upsell orders, then just $1.5 per 100 extra orders. Maximum capped charge: $200.",
        isPopular: false
    },
    {
        plan: "Pro",
        price: 99.99,
        includes: [
            `Up to <span style="color: #FACC15">10 000</span> orders`,
            "Unlimited active upsell funnels",
            "Pre-purchase Upsell",
            "Post purchase Upsell",
            "Checkout Upsell (Shopify Plus)",
            "Smart Cart (fully customizable)",
            "Advanced Analytics",
            "Custom Triggers",
            "Design Customization",
            "Priority 24/7 live chat, email & call support"
        ],
        description: "Up to 10 000 upsell orders, then just $1 per 100 extra orders. Maximum capped charge: $500.",
        isPopular: true
    },
    {
        plan: "Enterprise",
        price: 299.99,
        includes: [
            `Up to <span style="color: #FACC15">25 000</span> orders`,
            "Everything in Pro plan",
            "Dedicated Account Manager",
            "Personalized Onboarding & Training",
            "SLA-Backed Priority Support"
        ],
        description: "Up to 25 000 upsell orders, then just $0.5 per 100 extra orders. Maximum capped charge: $1,000.",
        isPopular: false
    }
]
export const aovData = [
    {
        title: "Gift with Purchase",
        descr: "Motivate shoppers towards placing their order with a free item offer",
        url: "/videos/gwp-1080-web.mp4",
        poster: "/posters/gwp.jpg",
        mt: 0,
        jc: "start"
    },
    {
        title: "Upsells in Checkout",
        descr: "Use targeted upsell offers to increase cart sizes",
        url: "/videos/checkout-upsells-1080-web.mp4",
        poster: "/posters/checkout.jpg",
        mt: 50,
        jc: "start"
    },
    {
        title: "Post-Purchase Upsells",
        descr: "Offer additional products at a discount even after the sale",
        url: "/videos/post-purchase-1080-web.mp4",
        poster: "/posters/post-purchase.jpg",
        mt: 80,
        jc: "start"
    },
    {
        title: "Recommendations",
        descr: "Data-driven product recommendations to push your best sellers or clear inventory",
        url: "/videos/product-recommendations-1080-web.mp4",
        poster: "/posters/product-recommendations.jpg",
        mt: 100,
        jc: "start"
    },
    {
        title: "Add a Product",
        descr: "Automatically add or remove products and discounts to any order",
        url: "/videos/auto-add-1080-web.mp4",
        poster: "/posters/auto-add.jpg",
        mt: 120,
        jc: "end"
    },
]
export const policies = [
    {
        name: "Terms of service",
        href: "https://llamacommerce.io/policies/terms-of-service"
    },
    {
        name: "Privacy Policy",
        href: "https://llamacommerce.io/policies/privacy-policy"
    }
]

export * from "./features"