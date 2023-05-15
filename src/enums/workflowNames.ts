export const WorkflowNames = Object.freeze({
  teste: 'teste',
  checkout: 'checkout',
  registerProfile: 'registerProfile',
  cartAddCoupon: 'cartAddCoupon',
  cartAddressChange: 'cartAddressChange',
  cartItemRemove: 'cartItemRemove',
  wishlistItemAdd: 'wishlistItemAdd',
  cartItemEditQty: 'cartItemEditQty',
  cartItemEditServices: 'cartItemEditServices',
  cartShippingEditDelivery: 'cartShippingEditDelivery',
  cartItemEdit: 'cartItemEdit',
  wishlistItemRemove: 'wishlistItemRemove',
  wishlistTransferToCart: 'wishlistTransferToCart',
  listingReviewPost: 'listingReviewPost',
  addListingWishList: 'addListingWishList',
});

export type TWorkflowName = (typeof WorkflowNames)[keyof typeof WorkflowNames];
