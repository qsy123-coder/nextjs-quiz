export const ROUTES = {
  HOME: "/",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  ASK_QUESTION: "/ask-question",
  TAGROUTE: (_id: string) => `/tag/${_id}`,
  AUTHOR: (_id: string) => `/author/${_id}`,
  PROFILE: (_id: string) => `/profile/${_id}`,
  QUESTION: (_id: string) => `/question/${_id}`,
};
