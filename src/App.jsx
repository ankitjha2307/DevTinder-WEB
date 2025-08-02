import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import Body from "./Body";
import Home from "./Home";
import Login from "./Login";
import Feed from "./Feed";
import Profile from "./Profile";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="feed" element={<Feed />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
