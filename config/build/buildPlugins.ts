import webpack, { Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export function buildPlugins({mode, paths, analyzer}: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development';
  const isProd = mode === 'production';
  

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: paths.html, favicon: paths.favicon}),
  ]

  if(isDev) {
    plugins.push( new webpack.ProgressPlugin() );
    plugins.push( new ReactRefreshWebpackPlugin() );
  }

  if(isProd) {
    plugins.push( 
      new MiniCssExtractPlugin({
        filename: 'css/styles.[contenthash:8].css',
        chunkFilename: 'css/styles.[contenthash:8].css',
      }),
    )
  }

  if(analyzer) {
    plugins.push( new BundleAnalyzerPlugin() )
  }

  return plugins;
}