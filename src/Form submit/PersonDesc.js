import React from "react";

const PersonDesc = ({ data }) => {
  const {
    firstName,
    lastName,
    employment,
    isFriendly,
    favColor,
    email,
    comment,
  } = data;
  const fullName = `${firstName} ${lastName}`;

  return (
    data && (
      <div>
        <b>{fullName}</b> is a <b>{employment}</b> worker with a{" "}
        <b>{isFriendly ? "friendly" : "non-friendly"} personality</b> and a
        penchant for the color <b>{favColor}</b>. His quote,
        <b>
          {" "}
          <i>"{comment}"</i>{" "}
        </b>{" "}
        is a snippet of his personal perspective or opinion on something.
        Connect with Vikash to learn more about his views and ideas! his email
        id is{" "}
        <b>
          <i>{email}</i>
        </b>
        .
      </div>
    )
  );
};

export default PersonDesc;
