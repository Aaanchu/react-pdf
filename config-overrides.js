module.exports = function override(config, env) {
    console.log("React app rewired works!")
    config.resolve.fallback = {
      fs: false,
      "stream": false,
      "util":false,
      "path": false,
      "os": false,
      "buffer":false
    };
    return config;
  };