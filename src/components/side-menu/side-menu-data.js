import React, { useEffect, useState } from "react";
import "./side-menu-data.css";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Logo } from "../../images";
import PagesList from "./pages-list";
import { useAuth } from "../../hooks/useAuth";
const SideMenuData = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, loading } = useAuth()
  let CurrentPagePath = location.pathname;
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      {isMatch ? (
        <div></div>
      ) : (
        <div
          className="side-menu-container"
          style={{ position: isMatch ? "" : "fixed" }}
        >
          <div className="sider-content-wraper">
            <div className="side-menu-logo-container">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="side-menu-data-list-main">
              <ul className="side-menu-ul">
                {PagesList.map((val, index) => {
                  return (
                    <li className="side-menu-list-item" key={index}>
                      <Button
                        variant="text"
                        className={
                          CurrentPagePath === val.path
                            ? "side-menu-active-page"
                            : "side-menu-page"
                        }
                        onClick={() => {
                          navigate(val.path);
                        }}
                      >
                        <div className="side-menu-icon">
                          <img
                            src={
                              CurrentPagePath === val.path
                                ? val.activeIcon
                                : val.icon
                            }
                          />
                        </div>
                        <span className="side-menu-page-title">
                          {val.title}
                        </span>
                      </Button>
                    </li>
                  );
                })}

                <br />
              </ul>
            </div>
            <div className="side-menu-footer-container">
              <Button onClick={logout} variant="text" className={"side-menu-log-out-btn"}>
                <LogoutOutlinedIcon />
                <span >{loading === "pending" ? "Logging Out..." : "Log Out"} </span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default SideMenuData;
