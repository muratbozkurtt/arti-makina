import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../src/layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_bootstrapvue_75eea1ab from 'nuxt_plugin_bootstrapvue_75eea1ab' // Source: ./bootstrap-vue.js (mode: 'all')
import nuxt_plugin_url_33d51358 from 'nuxt_plugin_url_33d51358' // Source: ../src/plugins/url.ts (mode: 'all')
import nuxt_plugin_currency_37da7774 from 'nuxt_plugin_currency_37da7774' // Source: ../src/plugins/currency.ts (mode: 'all')
import nuxt_plugin_i18n_1fba4fce from 'nuxt_plugin_i18n_1fba4fce' // Source: ../src/plugins/i18n.ts (mode: 'all')
import nuxt_plugin_notifications_15a88cbb from 'nuxt_plugin_notifications_15a88cbb' // Source: ../src/plugins/notifications.ts (mode: 'client')
import nuxt_plugin_localstorage_2952ddea from 'nuxt_plugin_localstorage_2952ddea' // Source: ../src/plugins/local-storage.ts (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  const registerModule = store.registerModule
  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({ preserveState: process.client }, options))

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: function () {
        let currentLanguage = null;
        const links = [];
        if (this.$store) {
            const allLanguages = this.$store.getters['locale/all'];
            const defaultLanguage = this.$store.getters['locale/default'];
            currentLanguage = this.$store.getters['locale/language'];
            let path = this.$route.fullPath;
            if (this.$route.params.lang) {
                path = path.substr(this.$route.params.lang.length + 2);
            }
            else {
                path = path.substr(1);
            }
            for (const language of allLanguages) {
                let langPath = path;
                if (language.locale === defaultLanguage.locale) {
                    langPath = `/${langPath}`;
                }
                else {
                    langPath = `/${language.locale}/${langPath}`;
                }
                links.push({
                    rel: 'alternate',
                    hreflang: language.locale === defaultLanguage.locale ? 'x-default' : language.locale,
                    href: this.$url.img(langPath)
                });
            }
        }
        const options = {
            title: process.env.npm_package_name || '',
            titleTemplate: function (titleChunk) {
                return titleChunk ? `${titleChunk} — Stroyka` : 'Stroyka';
            },
            htmlAttrs: {
                lang: currentLanguage === null || currentLanguage === void 0 ? void 0 : currentLanguage.locale,
                // Value of HTML dir attribute: <html dir="...">
                dir: currentLanguage === null || currentLanguage === void 0 ? void 0 : currentLanguage.direction
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            link: [
                { rel: 'icon', type: 'image/png', href: `${process.env.routerBase}favicon.png` },
                // fonts
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i' },
                ...links
            ]
        };
        return options;
    },

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_bootstrapvue_75eea1ab === 'function') {
    await nuxt_plugin_bootstrapvue_75eea1ab(app.context, inject)
  }

  if (typeof nuxt_plugin_url_33d51358 === 'function') {
    await nuxt_plugin_url_33d51358(app.context, inject)
  }

  if (typeof nuxt_plugin_currency_37da7774 === 'function') {
    await nuxt_plugin_currency_37da7774(app.context, inject)
  }

  if (typeof nuxt_plugin_i18n_1fba4fce === 'function') {
    await nuxt_plugin_i18n_1fba4fce(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_notifications_15a88cbb === 'function') {
    await nuxt_plugin_notifications_15a88cbb(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_localstorage_2952ddea === 'function') {
    await nuxt_plugin_localstorage_2952ddea(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
