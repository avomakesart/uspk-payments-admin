import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'; // Supports ESM

export const wooCommerce = new WooCommerceRestApi({
  url: 'https://uspk.com.mx',
  consumerKey: 'ck_0ac4a122cbdfe0558c5455c093988ff0437edc7d',
  consumerSecret: 'cs_03027967f25f208c7a5a762fea72fa9b2c94932f',
  version: 'wc/v3',
});
