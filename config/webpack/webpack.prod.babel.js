import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import paths from './paths';
import Dotenv  from 'dotenv-webpack';

module.exports = {
    mode: 'production',
    output: {
        filename: `${paths.jsFolder}/[name].[hash].js`,
        path: paths.outputPath,
        chunkFilename: '[name].[chunkhash].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new Dotenv({
			path: './.env'
		}),
    ],
    devtool: 'source-map'
};
