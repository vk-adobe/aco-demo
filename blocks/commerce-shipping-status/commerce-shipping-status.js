/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { render as orderRenderer } from '@dropins/storefront-order/render.js';
import { ShippingStatus } from '@dropins/storefront-order/containers/ShippingStatus.js';
import { UPS_TRACKING_URL } from '../../scripts/constants.js';
import { rootLink } from '../../scripts/scripts.js';
import { tryRenderAemAssetsImage } from '../../scripts/assets.js';

// Initialize
import '../../scripts/initializers/order.js';

export default async function decorate(block) {
  await orderRenderer.render(ShippingStatus, {
    slots: {
      ShippingStatusCardImage: (ctx) => {
        tryRenderAemAssetsImage(ctx, imageSlotConfig(ctx));
      },
      NotYetShippedProductImage: (ctx) => {
        tryRenderAemAssetsImage(ctx, imageSlotConfig(ctx));
      },
      ShippingStatusReturnCardImage: (ctx) => {
        tryRenderAemAssetsImage(ctx, imageSlotConfig(ctx));
      },
    },
    routeTracking: ({ carrier, number }) => {
      if (carrier?.toLowerCase() === 'ups') {
        return `${UPS_TRACKING_URL}?tracknum=${number}`;
      }
      return '';
    },
    routeProductDetails: (data) => {
      if (data?.orderItem) {
        return rootLink(`/products/${data?.orderItem?.productUrlKey}/${data?.orderItem?.product?.sku}`);
      }
      if (data?.product) {
        return rootLink(`/products/${data?.product?.urlKey}/${data?.product?.sku}`);
      }
      return '#';
    },
  })(block);
}

function imageSlotConfig(ctx) {
  const { data, defaultImageProps } = ctx;
  return {
    alias: data.product.sku,
    imageProps: defaultImageProps,
  };
}
