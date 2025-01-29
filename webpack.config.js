const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  mode: "development",
  entry: "./src/index.js", // Ensure this points to your entry file
  devServer: {
    port: 3001, // Port for the remote app
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match .js and .jsx files
        exclude: /node_modules/, // Exclude dependencies in node_modules
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // Optional: Match CSS files if needed
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Allow imports without specifying extensions
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remoteApp",
      filename: "remoteEntry.js",
      exposes: {
        "./StockDisplay": "./src/components/StockDisplay"
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.0.0", eager: true },
        "react-dom": { singleton: true, requiredVersion: "^18.0.0" },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
