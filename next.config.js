const withNextIntl = require('next-intl/plugin')();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig= {
    webpack: (config, _) => ({
        ...config,
        watchOptions: {
            ...config.watchOptions,
            poll: 500,
            aggregateTimeout: 500,
        },
    }),
}

module.exports = withNextIntl(nextConfig);
