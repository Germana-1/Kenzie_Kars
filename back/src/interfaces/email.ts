export interface ISendEmailRequest {
  to: string;
  subject: string;
  text: string;
}

export interface IResetPasswordRequest {
  password: string;
}
