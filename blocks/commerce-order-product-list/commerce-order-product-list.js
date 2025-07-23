/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { render as orderRenderer } from '@dropins/storefront-order/render.js';
import { OrderProductList } from '@dropins/storefront-order/containers/OrderProductList.js';
import GiftOptions from '@dropins/storefront-cart/containers/GiftOptions.js';
import { render as CartProvider } from '@dropins/storefront-cart/render.js';

// Initialize
import '../../scripts/initializers/order.js';
import { rootLink } from '../../scripts/scripts.js';
import { tryRenderAemAssetsImage } from '../../scripts/assets.js';

export default async function decorate(block) {
  const productLink = (product) => rootLink(`/products/${product.productUrlKey}/${product.productSku}`);

  await orderRenderer.render(OrderProductList, {
    slots: {
      CartSummaryItemImage: (ctx) => {
        const { data, defaultImageProps } = ctx;
        const anchor = document.createElement('a');
        anchor.href = productLink(data);

        tryRenderAemAssetsImage(ctx, {
          alias: data.product.sku,
          imageProps: defaultImageProps,
          wrapper: anchor,
        });
      },
      Footer: (ctx) => {
        const giftOptions = document.createElement('div');

        CartProvider.render(GiftOptions, {
          item: ctx.item,
          view: 'product',
          dataSource: 'order',
          isEditable: false,
          slots: {
            SwatchImage: (swatchCtx) => {
              const { defaultImageProps, imageSwatchContext } = swatchCtx;
              tryRenderAemAssetsImage(swatchCtx, {
                alias: imageSwatchContext.label,
                imageProps: defaultImageProps,
                wrapper: document.createElement('span'),
              });
            },
          },
        })(giftOptions);

        ctx.appendChild(giftOptions);
      },
    },
    routeProductDetails: productLink,
  })(block);
}
