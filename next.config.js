const withNextIntl = require('next-intl/plugin')();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig= {
    webpack: (config, _) => ({
        ...config,
        watchOptions: {
            ...config.watchOptions,
            poll: 200,
            aggregateTimeout: 200,
        },
    }),
}

module.exports = withNextIntl(nextConfig);
