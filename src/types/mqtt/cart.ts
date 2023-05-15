import { CartState } from '../globalState';

export interface CartMessageMqtt {
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
  items: CartState['cart'];
  actor_id: string;
  session_id: string;
}
