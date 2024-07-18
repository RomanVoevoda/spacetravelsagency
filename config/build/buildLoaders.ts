import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from 'react-refresh-typescript';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const cssLoaderWithModules = {
    loader: 'css-loader',
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
      isDev ? 'css-loader' : cssLoaderWithModules, 
      {
        loader: 'sass-loader',
        options: {
          additionalData: `
            @import "./src/app/styles/vars.scss";
          `
        }
      }
    ],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [{
      loader: 'ts-loader',

      options: {
        getCustomTransformers: () => ({
          before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
        }),
        transpileOnly: isDev,
      }
    }]
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