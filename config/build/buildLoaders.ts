import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const scssLoader = buildCssLoaders(options.isDev);

    // если бы использовал js/jsx, нужно было бы подключить babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/, // для ts/tsx
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    // здесь правила для всех форматов, выходящих за рамки js (png, svg и тд
    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        scssLoader,
    ];
}
