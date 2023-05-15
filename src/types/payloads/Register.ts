export type RegisterForm = {
  fiscal_id: string;
  name: string;
  birthday?: string;
  fantasy_name?: string;
  corporate?: string;
  state_registration?: string;
  gender: string;
  phone: string;
  email: string;
  password: string;
  switch_email: boolean;
  switch_sms: boolean;
  switch_push_app: boolean;
  switch_phone: boolean;
  switch_whats_app: boolean;
  switch_web_push: boolean;
};

export type AddRegister = {
  fiscalId: string;
  name: string;
  birthday?: string;
  fantasyName?: string;
  corporate?: string;
  stateRegistration?: string;
  gender?: string;
  phone: string;
  email: string;
  password: string;
  passwordConfirm: string;
  notification_preference: {
    description: 'EMAIL' | 'SMS' | 'PUSHAPP' | 'PHONE' | 'WHATSAPP' | 'WEBPUSH';
    is_enable: boolean;
  }[];
};

export type UpdateProfile = {
  profile_id: string;
  name: string;
  user_id: string;
  gender: string;
  fiscal_id: string;
  email: string;
  phone: string;
  national_id: string;
};

export type UpdateProfileCommunicationPreferences = {
  notification_preference: {
    description: string;
    is_enable: boolean;
    profile_id: string;
    id: string;
  }[];
};
