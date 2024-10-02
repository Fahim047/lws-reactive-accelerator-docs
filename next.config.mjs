import nextra from "nextra";
/** @type {import('next').NextConfig} */
const nextConfig = {};
const withNextra = nextra({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.jsx",
    defaultShowCopyCode: true,
});

export default withNextra(nextConfig);

