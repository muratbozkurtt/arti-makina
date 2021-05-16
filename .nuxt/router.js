import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _445bd456 = () => interopDefault(import('../src/pages/account/index.vue' /* webpackChunkName: "pages/account/index" */))
const _0b66ac30 = () => interopDefault(import('../src/pages/account/addresses/index.vue' /* webpackChunkName: "pages/account/addresses/index" */))
const _af0d0dd2 = () => interopDefault(import('../src/pages/account/dashboard.vue' /* webpackChunkName: "pages/account/dashboard" */))
const _b10c8e28 = () => interopDefault(import('../src/pages/account/login.vue' /* webpackChunkName: "pages/account/login" */))
const _2d9b1df5 = () => interopDefault(import('../src/pages/account/orders/index.vue' /* webpackChunkName: "pages/account/orders/index" */))
const _d8430f30 = () => interopDefault(import('../src/pages/account/password.vue' /* webpackChunkName: "pages/account/password" */))
const _a9c7f728 = () => interopDefault(import('../src/pages/account/profile.vue' /* webpackChunkName: "pages/account/profile" */))
const _44a2e816 = () => interopDefault(import('../src/pages/blog/category-classic.vue' /* webpackChunkName: "pages/blog/category-classic" */))
const _6eb33cf3 = () => interopDefault(import('../src/pages/blog/category-grid.vue' /* webpackChunkName: "pages/blog/category-grid" */))
const _06bfbc43 = () => interopDefault(import('../src/pages/blog/category-left-sidebar.vue' /* webpackChunkName: "pages/blog/category-left-sidebar" */))
const _a81a136a = () => interopDefault(import('../src/pages/blog/category-list.vue' /* webpackChunkName: "pages/blog/category-list" */))
const _4b03bcd2 = () => interopDefault(import('../src/pages/blog/post-classic.vue' /* webpackChunkName: "pages/blog/post-classic" */))
const _bb49b54c = () => interopDefault(import('../src/pages/blog/post-full.vue' /* webpackChunkName: "pages/blog/post-full" */))
const _07ca3ffe = () => interopDefault(import('../src/pages/shop/cart.vue' /* webpackChunkName: "pages/shop/cart" */))
const _3119486e = () => interopDefault(import('../src/pages/shop/catalog/index.vue' /* webpackChunkName: "pages/shop/catalog/index" */))
const _42e7364c = () => interopDefault(import('../src/pages/shop/category-grid-3-columns-sidebar.vue' /* webpackChunkName: "pages/shop/category-grid-3-columns-sidebar" */))
const _d37e9f24 = () => interopDefault(import('../src/pages/shop/category-grid-4-columns-full.vue' /* webpackChunkName: "pages/shop/category-grid-4-columns-full" */))
const _5ad2928d = () => interopDefault(import('../src/pages/shop/category-grid-5-columns-full.vue' /* webpackChunkName: "pages/shop/category-grid-5-columns-full" */))
const _b92416c2 = () => interopDefault(import('../src/pages/shop/category-list.vue' /* webpackChunkName: "pages/shop/category-list" */))
const _380e8f7a = () => interopDefault(import('../src/pages/shop/category-right-sidebar.vue' /* webpackChunkName: "pages/shop/category-right-sidebar" */))
const _646250b2 = () => interopDefault(import('../src/pages/shop/checkout/index.vue' /* webpackChunkName: "pages/shop/checkout/index" */))
const _3b703612 = () => interopDefault(import('../src/pages/shop/compare.vue' /* webpackChunkName: "pages/shop/compare" */))
const _730d3683 = () => interopDefault(import('../src/pages/shop/product-columnar.vue' /* webpackChunkName: "pages/shop/product-columnar" */))
const _569ef610 = () => interopDefault(import('../src/pages/shop/product-sidebar.vue' /* webpackChunkName: "pages/shop/product-sidebar" */))
const _0f39a839 = () => interopDefault(import('../src/pages/shop/product-standard.vue' /* webpackChunkName: "pages/shop/product-standard" */))
const _d57f9044 = () => interopDefault(import('../src/pages/shop/track-order.vue' /* webpackChunkName: "pages/shop/track-order" */))
const _51010d23 = () => interopDefault(import('../src/pages/shop/wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
const _1692370b = () => interopDefault(import('../src/pages/site/about-us.vue' /* webpackChunkName: "pages/site/about-us" */))
const _73f0c003 = () => interopDefault(import('../src/pages/site/components.vue' /* webpackChunkName: "pages/site/components" */))
const _849cac50 = () => interopDefault(import('../src/pages/site/contact-us.vue' /* webpackChunkName: "pages/site/contact-us" */))
const _09636a34 = () => interopDefault(import('../src/pages/site/contact-us-alt.vue' /* webpackChunkName: "pages/site/contact-us-alt" */))
const _37083a0e = () => interopDefault(import('../src/pages/site/faq.vue' /* webpackChunkName: "pages/site/faq" */))
const _16d096ab = () => interopDefault(import('../src/pages/site/not-found.vue' /* webpackChunkName: "pages/site/not-found" */))
const _106f1a2a = () => interopDefault(import('../src/pages/site/terms.vue' /* webpackChunkName: "pages/site/terms" */))
const _a83c04c8 = () => interopDefault(import('../src/pages/site/typography.vue' /* webpackChunkName: "pages/site/typography" */))
const _38bf9318 = () => interopDefault(import('../src/pages/shop/checkout/success.vue' /* webpackChunkName: "pages/shop/checkout/success" */))
const _2567f360 = () => interopDefault(import('../src/pages/account/addresses/_id.vue' /* webpackChunkName: "pages/account/addresses/_id" */))
const _29d2199d = () => interopDefault(import('../src/pages/account/orders/_id.vue' /* webpackChunkName: "pages/account/orders/_id" */))
const _2f62a726 = () => interopDefault(import('../src/pages/shop/catalog/_slug.vue' /* webpackChunkName: "pages/shop/catalog/_slug" */))
const _1fa0acfd = () => interopDefault(import('../src/pages/shop/products/_slug.vue' /* webpackChunkName: "pages/shop/products/_slug" */))
const _96e80f92 = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _445bd456,
    name: "account"
  }, {
    path: "/account/addresses",
    component: _0b66ac30,
    name: "account-addresses"
  }, {
    path: "/account/dashboard",
    component: _af0d0dd2,
    name: "account-dashboard"
  }, {
    path: "/account/login",
    component: _b10c8e28,
    name: "account-login"
  }, {
    path: "/account/orders",
    component: _2d9b1df5,
    name: "account-orders"
  }, {
    path: "/account/password",
    component: _d8430f30,
    name: "account-password"
  }, {
    path: "/account/profile",
    component: _a9c7f728,
    name: "account-profile"
  }, {
    path: "/blog/category-classic",
    component: _44a2e816,
    name: "blog-category-classic"
  }, {
    path: "/blog/category-grid",
    component: _6eb33cf3,
    name: "blog-category-grid"
  }, {
    path: "/blog/category-left-sidebar",
    component: _06bfbc43,
    name: "blog-category-left-sidebar"
  }, {
    path: "/blog/category-list",
    component: _a81a136a,
    name: "blog-category-list"
  }, {
    path: "/blog/post-classic",
    component: _4b03bcd2,
    name: "blog-post-classic"
  }, {
    path: "/blog/post-full",
    component: _bb49b54c,
    name: "blog-post-full"
  }, {
    path: "/shop/cart",
    component: _07ca3ffe,
    name: "shop-cart"
  }, {
    path: "/shop/catalog",
    component: _3119486e,
    name: "shop-catalog"
  }, {
    path: "/shop/category-grid-3-columns-sidebar",
    component: _42e7364c,
    name: "shop-category-grid-3-columns-sidebar"
  }, {
    path: "/shop/category-grid-4-columns-full",
    component: _d37e9f24,
    name: "shop-category-grid-4-columns-full"
  }, {
    path: "/shop/category-grid-5-columns-full",
    component: _5ad2928d,
    name: "shop-category-grid-5-columns-full"
  }, {
    path: "/shop/category-list",
    component: _b92416c2,
    name: "shop-category-list"
  }, {
    path: "/shop/category-right-sidebar",
    component: _380e8f7a,
    name: "shop-category-right-sidebar"
  }, {
    path: "/shop/checkout",
    component: _646250b2,
    name: "shop-checkout"
  }, {
    path: "/shop/compare",
    component: _3b703612,
    name: "shop-compare"
  }, {
    path: "/shop/product-columnar",
    component: _730d3683,
    name: "shop-product-columnar"
  }, {
    path: "/shop/product-sidebar",
    component: _569ef610,
    name: "shop-product-sidebar"
  }, {
    path: "/shop/product-standard",
    component: _0f39a839,
    name: "shop-product-standard"
  }, {
    path: "/shop/track-order",
    component: _d57f9044,
    name: "shop-track-order"
  }, {
    path: "/shop/wishlist",
    component: _51010d23,
    name: "shop-wishlist"
  }, {
    path: "/site/about-us",
    component: _1692370b,
    name: "site-about-us"
  }, {
    path: "/site/components",
    component: _73f0c003,
    name: "site-components"
  }, {
    path: "/site/contact-us",
    component: _849cac50,
    name: "site-contact-us"
  }, {
    path: "/site/contact-us-alt",
    component: _09636a34,
    name: "site-contact-us-alt"
  }, {
    path: "/site/faq",
    component: _37083a0e,
    name: "site-faq"
  }, {
    path: "/site/not-found",
    component: _16d096ab,
    name: "site-not-found"
  }, {
    path: "/site/terms",
    component: _106f1a2a,
    name: "site-terms"
  }, {
    path: "/site/typography",
    component: _a83c04c8,
    name: "site-typography"
  }, {
    path: "/shop/checkout/success",
    component: _38bf9318,
    name: "shop-checkout-success"
  }, {
    path: "/account/addresses/:id",
    component: _2567f360,
    name: "account-addresses-id"
  }, {
    path: "/account/orders/:id",
    component: _29d2199d,
    name: "account-orders-id"
  }, {
    path: "/shop/catalog/:slug",
    component: _2f62a726,
    name: "shop-catalog-slug"
  }, {
    path: "/shop/products/:slug?",
    component: _1fa0acfd,
    name: "shop-products-slug"
  }, {
    path: "/",
    component: _96e80f92,
    name: "index"
  }, {
    path: "/:lang/account",
    component: _445bd456,
    name: "lang-account"
  }, {
    path: "/:lang/account/addresses",
    component: _0b66ac30,
    name: "lang-account-addresses"
  }, {
    path: "/:lang/account/dashboard",
    component: _af0d0dd2,
    name: "lang-account-dashboard"
  }, {
    path: "/:lang/account/login",
    component: _b10c8e28,
    name: "lang-account-login"
  }, {
    path: "/:lang/account/orders",
    component: _2d9b1df5,
    name: "lang-account-orders"
  }, {
    path: "/:lang/account/password",
    component: _d8430f30,
    name: "lang-account-password"
  }, {
    path: "/:lang/account/profile",
    component: _a9c7f728,
    name: "lang-account-profile"
  }, {
    path: "/:lang/blog/category-classic",
    component: _44a2e816,
    name: "lang-blog-category-classic"
  }, {
    path: "/:lang/blog/category-grid",
    component: _6eb33cf3,
    name: "lang-blog-category-grid"
  }, {
    path: "/:lang/blog/category-left-sidebar",
    component: _06bfbc43,
    name: "lang-blog-category-left-sidebar"
  }, {
    path: "/:lang/blog/category-list",
    component: _a81a136a,
    name: "lang-blog-category-list"
  }, {
    path: "/:lang/blog/post-classic",
    component: _4b03bcd2,
    name: "lang-blog-post-classic"
  }, {
    path: "/:lang/blog/post-full",
    component: _bb49b54c,
    name: "lang-blog-post-full"
  }, {
    path: "/:lang/shop/cart",
    component: _07ca3ffe,
    name: "lang-shop-cart"
  }, {
    path: "/:lang/shop/catalog",
    component: _3119486e,
    name: "lang-shop-catalog"
  }, {
    path: "/:lang/shop/category-grid-3-columns-sidebar",
    component: _42e7364c,
    name: "lang-shop-category-grid-3-columns-sidebar"
  }, {
    path: "/:lang/shop/category-grid-4-columns-full",
    component: _d37e9f24,
    name: "lang-shop-category-grid-4-columns-full"
  }, {
    path: "/:lang/shop/category-grid-5-columns-full",
    component: _5ad2928d,
    name: "lang-shop-category-grid-5-columns-full"
  }, {
    path: "/:lang/shop/category-list",
    component: _b92416c2,
    name: "lang-shop-category-list"
  }, {
    path: "/:lang/shop/category-right-sidebar",
    component: _380e8f7a,
    name: "lang-shop-category-right-sidebar"
  }, {
    path: "/:lang/shop/checkout",
    component: _646250b2,
    name: "lang-shop-checkout"
  }, {
    path: "/:lang/shop/compare",
    component: _3b703612,
    name: "lang-shop-compare"
  }, {
    path: "/:lang/shop/product-columnar",
    component: _730d3683,
    name: "lang-shop-product-columnar"
  }, {
    path: "/:lang/shop/product-sidebar",
    component: _569ef610,
    name: "lang-shop-product-sidebar"
  }, {
    path: "/:lang/shop/product-standard",
    component: _0f39a839,
    name: "lang-shop-product-standard"
  }, {
    path: "/:lang/shop/track-order",
    component: _d57f9044,
    name: "lang-shop-track-order"
  }, {
    path: "/:lang/shop/wishlist",
    component: _51010d23,
    name: "lang-shop-wishlist"
  }, {
    path: "/:lang/site/about-us",
    component: _1692370b,
    name: "lang-site-about-us"
  }, {
    path: "/:lang/site/components",
    component: _73f0c003,
    name: "lang-site-components"
  }, {
    path: "/:lang/site/contact-us",
    component: _849cac50,
    name: "lang-site-contact-us"
  }, {
    path: "/:lang/site/contact-us-alt",
    component: _09636a34,
    name: "lang-site-contact-us-alt"
  }, {
    path: "/:lang/site/faq",
    component: _37083a0e,
    name: "lang-site-faq"
  }, {
    path: "/:lang/site/not-found",
    component: _16d096ab,
    name: "lang-site-not-found"
  }, {
    path: "/:lang/site/terms",
    component: _106f1a2a,
    name: "lang-site-terms"
  }, {
    path: "/:lang/site/typography",
    component: _a83c04c8,
    name: "lang-site-typography"
  }, {
    path: "/:lang/shop/checkout/success",
    component: _38bf9318,
    name: "lang-shop-checkout-success"
  }, {
    path: "/:lang/account/addresses/:id",
    component: _2567f360,
    name: "lang-account-addresses-id"
  }, {
    path: "/:lang/account/orders/:id",
    component: _29d2199d,
    name: "lang-account-orders-id"
  }, {
    path: "/:lang/shop/catalog/:slug",
    component: _2f62a726,
    name: "lang-shop-catalog-slug"
  }, {
    path: "/:lang/shop/products/:slug?",
    component: _1fa0acfd,
    name: "lang-shop-products-slug"
  }, {
    path: "/:lang/",
    component: _96e80f92,
    name: "lang-index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
