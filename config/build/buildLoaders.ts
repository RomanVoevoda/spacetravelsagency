import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: '[hash:base64:8]',  
      },
    },
  } 

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 
      isDev ? "css-loader" : cssLoaderWithModules, 
      "sass-loader"
    ],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const assetsLoader = { 
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',  
  }

  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  }

  const svgrLoader = {
    test: /\.svg$/,
    use: [
      { 
        loader: '@svgr/webpack', 
        options: { 
          icon: true 
        } 
      }
    ]
  }

  return [
    scssLoader,
    tsLoader,
    assetsLoader,
    fontsLoader,
    svgrLoader
  ];
}