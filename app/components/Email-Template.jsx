import * as React from "react";
import { useRecoilValue } from "recoil";
import { email, subject } from "../store";

export const EmailTemplate = () => {
  const email = useRecoilValue(email);
  const subject = useRecoilValue(subject);
  const message = useRecoilValue(message);
  console.log("email: ", email, "message: ", message, "subject: ", subject);

  return (
    <div>
      <h1 className="text-extrabold text-2xl">{email} send you a email from your portfolio site</h1>
      <p className="mt-5 text-xl font-semibold">{subject}</p>
      <p className="mt-5 text-lg font-medium">{message}</p>
    </div>
  );
};

export default EmailTemplate;
