import FormPortal from "components/Form";
import React, { useState } from "react";

const SignIn = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <FormPortal showLogin={showLogin} setShowLogin={setShowLogin} />
    </div>
  );
};

export default SignIn;
