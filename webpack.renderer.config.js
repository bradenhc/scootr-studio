const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

rules.push({
    test: /\.css$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
});

module.exports = {
    module: {
        rules
    },
    plugins: plugins,
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
        alias: {
            react: 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat',
            app: path.resolve(__dirname, 'src', 'app'),
            components: path.resolve(__dirname, 'src', 'app', 'components'),
            layouts: path.resolve(__dirname, 'src', 'app', 'layouts'),
            shared: path.resolve(__dirname, 'src', 'app', 'shared'),
            edaam: path.resolve(__dirname, 'src', 'app', 'edaam'),
            status: path.resolve(__dirname, 'src', 'app', 'status')
        }
    }
};
