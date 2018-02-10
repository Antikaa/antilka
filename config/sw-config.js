module.exports = {
  cache: {
    cacheId: "app-antica",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "app-antica",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
