import React from "react";
import PageName from "../components/PageName";
import Header from "../components/Header";
import LabeledInput from "../components/LabeledInput";
import { Button } from "../components/Button";
import UserLayout from "../layout/UserLayout";

function Account() {
  return (
    <UserLayout>
      <div className="flex h-full w-full flex-col gap-4 px-20 pt-4">
        <PageName page="My Account"></PageName>
        <div className="flex items-center justify-center ">
          <div className="flex w-80 flex-col gap-4">
            <LabeledInput name="username" label="Username" />
            <LabeledInput name="name" label="Name" />
            <LabeledInput name="password" label="Password" />
            <LabeledInput name="email" label="Email" />
            <Button buttonText="Update" />
            <Button variant="danger" buttonText="Delete my Account" />
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

export default Account;
