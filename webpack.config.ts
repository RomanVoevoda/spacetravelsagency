import {buildWebpack} from "./config/build/buildWebpack";
import webpack from 'webpack';
import { BuildMode, BuildPaths } from "./config/build/types/types";

interface EnvVariables {
	mode: BuildMode;
  port: number;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    output: 'C:/Users/Voevodich/Desktop/spacetravelsagency/build',
    entry: './src/index.tsx',
    html: 'public/index.html',
    favicon: './public/favicon/favicon.ico',
    src: 'C:/Users/Voevodich/Desktop/spacetravelsagency/src'
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths
  });
	
	return config;
};