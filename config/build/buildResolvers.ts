import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // при импорте данные файлы будут без расщирения
        modules: [options.paths.src, 'node_modules'], // абсолютный импорт для node_modules и src
        preferAbsolute: true, // предпочтение абсолютным путям
        alias: {}, // путь до src включительно никак не отображается "import Component from shared/Component"
        mainFiles: ['index'],
    };
}
