import FormPortal from "components/Form";
import React, { useState } from "react";

const Admin = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <FormPortal showLogin={showLogin} setShowLogin={setShowLogin} />
    </div>
  );
};

Admin.getLayout = (page: React.ReactElement) => {
  return <>{page}</>;
};

export default Admin;
