export const ActionWFNames = Object.freeze({
  alert: 'ALERT',
  acknowledge: 'ACKNOWLEDGE',
  writeReview: 'WRITE-REVIEW',
});

export type TActionWFName = (typeof ActionWFNames)[keyof typeof ActionWFNames];
