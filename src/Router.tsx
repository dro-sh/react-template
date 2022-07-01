import { BrowserRouter, Route, Routes } from "react-router-dom";

import NewOrganization from "src/routes/NewOrganization";
import WithHeader from "src/routes/WithHeader";
import Profile from "src/routes/withHeader/Profile";
import Landing from "src/routes/withHeader/Landing";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/organization/new" element={<NewOrganization />} />
      <Route path="/" element={<WithHeader />}>
        <Route index element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
