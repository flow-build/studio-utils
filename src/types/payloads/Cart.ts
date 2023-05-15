export type AddProductToCart = {
  profile_id: string;
  cart_item: {
    listing_id: string;
    product_id: string;
    status: 'ACTIVE' | 'INATIVE';
    quantity: number;
  };
};

export type RemoveProductFromCart = {
  cart_id: string;
  item_id: string;
};

export type TransferProductFromCartToWishList = {
  cartId: string;
  profileId: string;
  cartItem: {
    items: string[];
  };
};

export type UpdateProductToCart = {
  cart_id: string;
  profile_id: string;
  cart_item: {
    product_id: string;
    listing_id: string;
    quantity: number;
    status: 'ACTIVE' | 'INATIVE';
  };
};
