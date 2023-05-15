import { Wishlistv3 } from '../domains';

export interface WishlistMessageMqtt {
  type: string;
  data: Data;
}

interface Data {
  process_id: string;
  id: string;
  status: string;
  props: Props;
}

interface Props {
  action: string;
  result: Result;
}

interface Result {
  event: string;
  items: Wishlistv3;
  actor_id: string;
  session_id: string;
}
