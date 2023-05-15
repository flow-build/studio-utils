export type AddProductToWishlist = {
  profile_id: string;
  wishlist_id: string;
  listing_id: string;
  product_id: string;
};

export type RemoveProductFromWishlist = {
  wishlist_id: string;
  item_id: string;
};

export interface TransferListingWishlistToCartPayload {
  profile_id: string;
  cart_item: {
    listing_id: string;
    product_id: string;
    status: string;
    quantity: number;
  };
  listing_id: string;
  wishlist_id: string;
}
