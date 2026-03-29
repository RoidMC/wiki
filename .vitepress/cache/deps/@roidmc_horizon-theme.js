import {
  Fragment,
  Teleport,
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  openBlock,
  provide,
  ref,
  toDisplayString,
  unref,
  withCtx,
  withModifiers
} from "./chunk-U632ANKX.js";

// node_modules/.pnpm/@roidmc+horizon-theme@0.0.4_f13e0d4d7225d71b2f981133466c06a6/node_modules/@roidmc/horizon-theme/_plugin-vue_export-helper-BbeiF_JO.js
var _plugin_vue_export_helper_default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) target[key] = val;
  return target;
};

// node_modules/.pnpm/@roidmc+horizon-theme@0.0.4_f13e0d4d7225d71b2f981133466c06a6/node_modules/@roidmc/horizon-theme/types-BcQ77ikt.js
function definePlugin(options) {
  return options;
}

// node_modules/.pnpm/@roidmc+horizon-theme@0.0.4_f13e0d4d7225d71b2f981133466c06a6/node_modules/@roidmc/horizon-theme/index.js
import DefaultTheme from "vitepress/theme";
import "C:/Users/chenc/Desktop/RoidMC-Code/wiki/node_modules/.pnpm/@roidmc+horizon-theme@0.0.4_f13e0d4d7225d71b2f981133466c06a6/node_modules/@roidmc/horizon-theme/horizon-theme.css";
import { inBrowser, useData } from "vitepress";
var _hoisted_1 = { class: "horizon-link-guard-dialog" };
var _hoisted_2 = { class: "horizon-link-guard-message" };
var _hoisted_3 = {
  key: 0,
  class: "horizon-link-guard-url"
};
var _hoisted_4 = { class: "horizon-link-guard-actions" };
var LinkGuardDialog_default = _plugin_vue_export_helper_default(defineComponent({
  __name: "LinkGuardDialog",
  props: { config: {} },
  setup(__props, { expose: __expose }) {
    const visible = ref(false);
    const targetUrl = ref("");
    const open = (url) => {
      targetUrl.value = url;
      visible.value = true;
    };
    const confirm = () => {
      if (targetUrl.value) window.open(targetUrl.value, "_blank");
      close();
    };
    const close = () => {
      visible.value = false;
      targetUrl.value = "";
    };
    const handleOpenDialog = (e) => {
      open(e.detail);
    };
    onMounted(() => {
      window.addEventListener("horizon:open-link-guard", handleOpenDialog);
    });
    onUnmounted(() => {
      window.removeEventListener("horizon:open-link-guard", handleOpenDialog);
    });
    __expose({
      open,
      close
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [createVNode(Transition, { name: "fade" }, {
        default: withCtx(() => [visible.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "horizon-link-guard-overlay",
          onClick: withModifiers(close, ["self"])
        }, [createBaseVNode("div", _hoisted_1, [
          createBaseVNode("p", _hoisted_2, toDisplayString(__props.config.message), 1),
          targetUrl.value ? (openBlock(), createElementBlock("div", _hoisted_3, [createBaseVNode("code", null, toDisplayString(targetUrl.value), 1)])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_4, [createBaseVNode("button", {
            class: "horizon-link-guard-btn cancel",
            onClick: close
          }, toDisplayString(__props.config.cancelText), 1), createBaseVNode("button", {
            class: "horizon-link-guard-btn confirm",
            onClick: confirm
          }, toDisplayString(__props.config.confirmText), 1)])
        ])])) : createCommentVNode("", true)]),
        _: 1
      })]);
    };
  }
}), [["__scopeId", "data-v-1d398edc"]]);
var defaultConfig$3 = {
  enable: false,
  whitelist: [],
  message: "You are about to leave this site. Are you sure you want to continue?",
  confirmText: "Continue",
  cancelText: "Cancel"
};
var currentConfig = { ...defaultConfig$3 };
var isExternalLink = (href) => {
  try {
    return new URL(href, window.location.origin).hostname !== window.location.hostname;
  } catch {
    return false;
  }
};
var matchWhitelist = (href, pattern) => {
  if (pattern instanceof RegExp) return pattern.test(href);
  try {
    const url = new URL(href, window.location.origin);
    if (pattern.startsWith("*.")) {
      const domain = pattern.slice(2);
      return url.hostname === domain || url.hostname.endsWith(`.${domain}`);
    }
    if (pattern.includes("/")) {
      const [domainPattern, ...pathParts] = pattern.split("/");
      if (url.hostname !== domainPattern && !url.hostname.endsWith(`.${domainPattern}`)) return false;
      const urlPathParts = url.pathname.split("/");
      for (let i = 0; i < pathParts.length; i++) {
        const pPart = pathParts[i];
        const uPart = urlPathParts[i];
        if (pPart === "*") continue;
        if (pPart !== uPart) return false;
      }
      return true;
    }
    return url.hostname === pattern || url.hostname.endsWith(`.${pattern}`);
  } catch {
    return false;
  }
};
var isWhitelisted = (href, whitelist) => {
  return whitelist.some((pattern) => matchWhitelist(href, pattern));
};
var interceptLinks = () => {
  if (typeof window === "undefined") return;
  const { whitelist } = currentConfig;
  document.querySelectorAll('a[href^="http"]:not([data-link-guard-processed])').forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    link.setAttribute("data-link-guard-processed", "true");
    if (!isExternalLink(href) || isWhitelisted(href, whitelist)) return;
    link.addEventListener("click", (e) => {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent("horizon:open-link-guard", { detail: href }));
    });
  });
};
var factory$5 = (config) => {
  Object.assign(currentConfig, defaultConfig$3, config);
  return {
    name: "external-link-guard",
    onDomUpdated(to, features) {
      if (!inBrowser) return;
      const featureConfig = features?.externalLinkGuard;
      currentConfig.enable = featureConfig?.enable ?? defaultConfig$3.enable;
      currentConfig.whitelist = featureConfig?.whitelist ?? defaultConfig$3.whitelist;
      if (currentConfig.enable) interceptLinks();
    }
  };
};
var externalLinkGuard = definePlugin({
  key: "externalLinkGuard",
  factory: factory$5,
  defaultConfig: defaultConfig$3
});
var Layout_default = defineComponent({
  __name: "Layout",
  setup(__props) {
    const { isDark, page, theme } = useData();
    const linkGuardConfig = computed(() => ({
      enable: theme.value.features?.externalLinkGuard?.enable ?? defaultConfig$3.enable,
      whitelist: theme.value.features?.externalLinkGuard?.whitelist ?? defaultConfig$3.whitelist,
      message: theme.value.features?.externalLinkGuard?.message ?? defaultConfig$3.message,
      confirmText: theme.value.features?.externalLinkGuard?.confirmText ?? defaultConfig$3.confirmText,
      cancelText: theme.value.features?.externalLinkGuard?.cancelText ?? defaultConfig$3.cancelText
    }));
    const enableTransitions = () => "startViewTransition" in document && window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    provide("toggle-appearance", async ({ clientX: x, clientY: y }) => {
      if (!enableTransitions()) {
        isDark.value = !isDark.value;
        return;
      }
      const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px at ${x}px ${y}px)`];
      await document.startViewTransition(async () => {
        isDark.value = !isDark.value;
        await nextTick();
      }).ready;
      document.documentElement.animate({ clipPath: isDark.value ? clipPath.reverse() : clipPath }, {
        duration: 300,
        easing: "ease-in",
        fill: "forwards",
        pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(DefaultTheme).Layout, { class: "horizon-layout" }), linkGuardConfig.value.enable ? (openBlock(), createBlock(LinkGuardDialog_default, {
        key: 0,
        config: linkGuardConfig.value
      }, null, 8, ["config"])) : createCommentVNode("", true)], 64);
    };
  }
});
var defaultConfig$2 = {
  enable: true,
  style: "favicon"
};
var initLinkIcons = () => {
  if (typeof window === "undefined") return;
  document.querySelectorAll('.vp-doc a:not([href^="https://img.shields.io/"]):not(.not):not([data-link-icon-processed])').forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("/")) {
      link.setAttribute("data-link-icon-processed", "true");
      return;
    }
    try {
      const { hostname } = new URL(href, window.location.origin);
      if (hostname && hostname !== window.location.hostname) {
        link.style.setProperty("--horizon-plugin-theme-link-icon-favicon", `url(https://favicon.im/${hostname})`);
        link.classList.add("external-link");
      }
    } catch {
    } finally {
      link.setAttribute("data-link-icon-processed", "true");
    }
  });
};
var factory$4 = (config) => {
  const mergedConfig = {
    ...defaultConfig$2,
    ...config
  };
  return {
    name: "link-icon",
    enhanceApp({}) {
      if (!inBrowser) return;
      if (mergedConfig.enable) document.body.classList.add("horizon-link-icon-enabled");
    },
    onDomUpdated() {
      if (mergedConfig.enable && mergedConfig.style === "favicon") initLinkIcons();
    }
  };
};
var linkIcon = definePlugin({
  key: "linkIcon",
  factory: factory$4,
  defaultConfig: defaultConfig$2,
  initLinkIcons
});
var defaultFancyboxOptions = {
  Hash: false,
  Carousel: {
    transition: "slide",
    Toolbar: { display: {
      left: ["counter"],
      middle: [
        "zoomIn",
        "zoomOut",
        "toggle1to1",
        "rotateCCW",
        "rotateCW",
        "flipX",
        "flipY",
        "reset"
      ],
      right: [
        "autoplay",
        "thumbs",
        "close"
      ]
    } }
  }
};
var defaultConfig$1 = {
  enable: true,
  exclude: ["https://img.shields.io/"],
  fancyboxOptions: defaultFancyboxOptions
};
var buildExcludeSelector = (exclude) => {
  return exclude.map((prefix) => `:not([src^="${prefix}"])`).join("");
};
var bindFancybox = async (exclude, options = defaultFancyboxOptions) => {
  const { Fancybox } = await import("./fancybox-DHEDsGxq-2TJTYXVU.js");
  const excludeSelector = buildExcludeSelector(exclude);
  document.querySelectorAll(`.vp-doc img${excludeSelector}:not(.not)`).forEach((img) => {
    const image = img;
    if (!image.hasAttribute("data-fancybox")) image.setAttribute("data-fancybox", "gallery");
    if (!image.hasAttribute("alt") || image.getAttribute("alt") === "") {
      const heading = findNearestHeading(image);
      image.setAttribute("alt", heading);
    }
    const altString = image.getAttribute("alt") || "";
    image.setAttribute("data-caption", altString);
  });
  Fancybox.bind('[data-fancybox="gallery"]', options);
};
var destroyFancybox = async () => {
  const { Fancybox } = await import("./dist-BQkVemKW-64P7XYJJ.js");
  Fancybox.destroy();
};
var findNearestHeading = (imgElement) => {
  let currentElement = imgElement;
  while (currentElement && currentElement !== document.body) {
    let previousSibling = currentElement.previousElementSibling;
    while (previousSibling) {
      if (previousSibling.tagName.match(/^H[1-6]$/)) return previousSibling.textContent?.replace(/\u200B/g, "").trim() || "";
      previousSibling = previousSibling.previousElementSibling;
    }
    currentElement = currentElement.parentElement;
  }
  return "";
};
var factory$3 = (config) => {
  const mergedConfig = {
    ...defaultConfig$1,
    ...config
  };
  const fancyboxOptions = {
    ...defaultFancyboxOptions,
    ...mergedConfig.fancyboxOptions
  };
  return {
    name: "image-viewer",
    enhanceApp({}) {
    },
    onBeforeRouteChange() {
      if (!inBrowser) return;
      if (mergedConfig.enable) destroyFancybox();
    },
    onDomUpdated() {
      if (!inBrowser) return;
      if (mergedConfig.enable) bindFancybox(mergedConfig.exclude, fancyboxOptions);
    }
  };
};
var imgViewer = definePlugin({
  key: "imgViewer",
  factory: factory$3,
  defaultConfig: defaultConfig$1,
  bindFancybox,
  destroyFancybox
});
var defaultConfig = {
  enable: true,
  message: "Horizon Theme",
  link: "https://www.roidmc.com"
};
var factory$2 = (config) => {
  const mergedConfig = {
    ...defaultConfig,
    ...config
  };
  return {
    name: "easter-egg",
    enhanceApp() {
      if (!inBrowser || !mergedConfig.enable) return;
      console.log(`%c${mergedConfig.message} %c ${mergedConfig.link} `, "background: #ff8344; color: white; padding: 4px 8px; border-radius: 4px 0 0 4px;", "background: #444444; color: #ff8344; padding: 4px 8px; border-radius: 0 4px 4px 0;");
      console.log("%cPowered By Horizon %c|%c © RoidMC Studios ", "background: #ff8344; color: white; padding: 4px 8px; border-radius: 4px 0 0 4px;", "background: #676767ff; color: #fff; padding: 4px;", "background: #444444; color: #fff; padding: 4px 8px; border-radius: 0 4px 4px 0;");
    }
  };
};
var easterEgg = definePlugin({
  key: "easterEgg",
  factory: factory$2,
  defaultConfig
});
var HORIZON_META = "Horizon Theme - Created by RoidMC Studios";
var factory$1 = () => {
  return {
    name: "meta-generator",
    enhanceApp() {
      if (!inBrowser) return;
      const meta = document.createElement("meta");
      meta.name = "generator";
      meta.content = HORIZON_META;
      document.head.appendChild(meta);
    }
  };
};
var metaGenerator = definePlugin({
  key: "metaGenerator",
  factory: factory$1
});
var factory = () => {
  return {
    name: "i18n-hot-reload",
    enhanceApp() {
    }
  };
};
var themePluginRegistry = [
  metaGenerator,
  linkIcon,
  externalLinkGuard,
  imgViewer,
  easterEgg,
  ...[definePlugin({
    key: "i18nHotReload",
    factory
  })]
];
var safeCall = (fn, pluginName, hookName) => {
  try {
    return fn();
  } catch (e) {
    console.error(`[Horizon Plugin] ${pluginName}.${hookName} error:`, e);
    return;
  }
};
var PluginManager = class {
  plugins = [];
  router;
  getFeatures;
  constructor(options) {
    this.router = options.router;
    this.getFeatures = options.getFeatures;
  }
  register(factory2, config) {
    const plugin = factory2(config);
    this.plugins.push(plugin);
    return this;
  }
  enhanceApp(ctx) {
    this.plugins.forEach((plugin) => {
      safeCall(() => plugin.enhanceApp?.(ctx), plugin.name, "enhanceApp");
    });
    const beforeRouteChangeCallbacks = this.plugins.filter((p) => p.onBeforeRouteChange).map((p) => ({
      name: p.name,
      cb: p.onBeforeRouteChange
    }));
    const beforePageLoadCallbacks = this.plugins.filter((p) => p.onBeforePageLoad).map((p) => ({
      name: p.name,
      cb: p.onBeforePageLoad
    }));
    const afterPageLoadCallbacks = this.plugins.filter((p) => p.onAfterPageLoad).map((p) => ({
      name: p.name,
      cb: p.onAfterPageLoad
    }));
    const afterRouteChangeCallbacks = this.plugins.filter((p) => p.onAfterRouteChange).map((p) => ({
      name: p.name,
      cb: p.onAfterRouteChange
    }));
    const domUpdatedCallbacks = this.plugins.filter((p) => p.onDomUpdated).map((p) => ({
      name: p.name,
      cb: p.onDomUpdated
    }));
    if (beforeRouteChangeCallbacks.length > 0) this.router.onBeforeRouteChange = (to) => {
      for (const { name, cb } of beforeRouteChangeCallbacks) if (safeCall(() => cb(to), name, "onBeforeRouteChange") === false) return false;
    };
    if (beforePageLoadCallbacks.length > 0) this.router.onBeforePageLoad = (to) => {
      for (const { name, cb } of beforePageLoadCallbacks) if (safeCall(() => cb(to), name, "onBeforePageLoad") === false) return false;
    };
    if (afterPageLoadCallbacks.length > 0) this.router.onAfterPageLoad = (to) => {
      afterPageLoadCallbacks.forEach(({ name, cb }) => {
        safeCall(() => cb(to), name, "onAfterPageLoad");
      });
    };
    if (afterRouteChangeCallbacks.length > 0) this.router.onAfterRouteChange = (to) => {
      afterRouteChangeCallbacks.forEach(({ name, cb }) => {
        safeCall(() => cb(to), name, "onAfterRouteChange");
      });
    };
    if (domUpdatedCallbacks.length > 0) {
      if (typeof window !== "undefined") requestAnimationFrame(() => {
        const features = this.getFeatures?.();
        domUpdatedCallbacks.forEach(({ name, cb }) => {
          safeCall(() => cb(window.location.pathname, features), name, "onDomUpdated");
        });
      });
      const existingHandler = this.router.onAfterRouteChange;
      this.router.onAfterRouteChange = (to) => {
        existingHandler?.(to);
        if (typeof window !== "undefined") requestAnimationFrame(() => {
          const features = this.getFeatures?.();
          domUpdatedCallbacks.forEach(({ name, cb }) => {
            safeCall(() => cb(to, features), name, "onDomUpdated");
          });
        });
      };
    }
  }
};
function createPluginManager(options) {
  return new PluginManager(options);
}
var horizon_theme_default = {
  extends: DefaultTheme,
  Layout: Layout_default,
  enhanceApp(ctx) {
    const { siteData, router } = ctx;
    const manager = createPluginManager({
      router,
      getFeatures: () => siteData.value.themeConfig.features
    });
    const features = siteData.value.themeConfig.features;
    for (const { key, factory: factory2 } of themePluginRegistry) {
      const config = features?.[key];
      manager.register(factory2, config);
    }
    manager.enhanceApp(ctx);
  }
};
export {
  horizon_theme_default as default
};
//# sourceMappingURL=@roidmc_horizon-theme.js.map
