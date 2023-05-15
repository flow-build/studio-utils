import { UserInfo } from '../globalState';

export interface ProfileMessageMqtt {
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
  items: UserInfo;
  actor_id: string;
  session_id: string;
}
