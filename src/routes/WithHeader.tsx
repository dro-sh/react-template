import { Outlet } from "react-router-dom";

import Header from "src/compenents/Header";

const WithHeader = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default WithHeader;
