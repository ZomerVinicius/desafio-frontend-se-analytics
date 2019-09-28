// ref: https://umijs.org/config/
export default {
  theme: {
    'primary-color': '#0091ed'
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true
      }
    ]
  ]
};
