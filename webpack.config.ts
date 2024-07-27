import {buildWebpack} from "./config/build/buildWebpack";
import webpack from 'webpack';
import { BuildMode, BuildPaths } from "./config/build/types/types";
import path from 'path';

interface EnvVariables {
	mode: BuildMode;
  analyzer?: boolean;
  port: number;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: './src/index.tsx',
    html: 'public/index.html',
    favicon: './public/favicon/favicon.ico',
    src: path.resolve(__dirname, 'src')
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    analyzer: env.analyzer
  });
	
	return config;
};