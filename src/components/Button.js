import React from "react";

const Button = ({ accountId }) => {
  const accountInfo = {
    "12345": "This is account 12345's information.",
    "67890": "This is account 67890's information.",
    "11121": "This is account 11121's information.",
  };

  return (
    <div>
        <h1>Remote App (Micro-Frontend)</h1>
        <button>
        {accountInfo[accountId] || "Select a valid account ID to see information."}
        </button>
    </div>
  );
};

export default Button