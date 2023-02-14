import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: isDev,
        }),
        new BundleAnalyzerPlugin({ openAnalyzer: false }),
    ];
    if (isDev) {
        // это взаимозаменяемые плагины для обновления кода без перезагрузки страницы в браузере
        plugins.push(new ReactRefreshPlugin({ overlay: false }));
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }
    return plugins;
}
