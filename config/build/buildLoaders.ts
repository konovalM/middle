import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const scssLoader = {
        test: /\.s|[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes('.module.'),
                        localIdentName: options.isDev ? '[name]__[local]--[hash:base64:8]' : '[hash:base64:8]'
                    },
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    // если бы использовал js/jsx, нужно было бы подключить babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/, // для ts/tsx
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    // здесь правила для всех форматов, выходящих за рамки js (png, svg и тд
    return [
        typescriptLoader,
        scssLoader
    ]
}
