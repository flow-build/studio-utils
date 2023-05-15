import { EventNames } from '../../enums';

export type TEventName = (typeof EventNames)[keyof typeof EventNames];

export type EmitEventFunction = (
  event: TEventName,
  payload: Record<string, unknown>,
) => void;

export type TEventOptions = {
  name: TEventName;
  payload: Record<string, unknown>;
};
