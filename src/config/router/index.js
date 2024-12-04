import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DynamicComponentRouter, Dashbaord, Nft, UserWallets, Deposits, Settings } from "../../pages";
import { AuthProvider } from "../../context/AuthContext";
import AuthGuard from "../../guards/AuthGuard";
import GuestGuard from "../../guards/GuestGuard";
import { Provider } from "react-redux";
import { store } from "../../store"

const RouterNavigation = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Provider store={store}>
          <Routes>

            <Route element={<AuthGuard />}>
              <Route path="/" element={<Dashbaord />} />

              <Route path="/nft" element={<Nft />} />
              <Route path="/user-wallets" element={<UserWallets />} />
              <Route path="/deposits" element={<Deposits />} />
              <Route path="/settings" element={<Settings />} />

            </Route>

            <Route element={<GuestGuard />}>
              {/* New login Routes */}
              <Route path="/signin" element={<DynamicComponentRouter />} />
              <Route path="/forgot-password" element={<DynamicComponentRouter />} />
            </Route>




          </Routes>
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  );
};
export default RouterNavigation;
