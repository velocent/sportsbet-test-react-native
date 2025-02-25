module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["relay", "module:react-native-dotenv"],
  };
};
