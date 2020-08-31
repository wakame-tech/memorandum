module.exports = function md_img_lazy(md, options) {
  const defaultImageRenderer = md.renderer.rules.image;

  md.renderer.rules.image = function (tokens, idx, options, env, self) {
    tokens[idx].attrSet('loading', 'lazy');
    return defaultImageRenderer(tokens, idx, options, env, self);
  };
};