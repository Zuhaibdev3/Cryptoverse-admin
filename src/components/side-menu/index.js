import React, { useState, useEffect } from "react";
import SideMenuData from "./side-menu-data";
import { Grid, IconButton } from "@mui/material";
import "./index.css";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Logo } from "../../images";
import PagesList from "./pages-list";
import { Back, Search, Notification } from "../../svg";
import { useAuth } from "../../hooks/useAuth";

export const SideMenu = (props) => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  let CurrentPagePath = location.pathname;
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  const { user } = useAuth()

  return (
    <>
      <div>
        <Grid container>
          <Grid item xs={12} md={2}>
            <SideMenuData />
          </Grid>
          <Grid item xs={12} lg={10}>
            <div className="right-side-container">
              <div className="right-side-header-container">
                <div className="right-side-header-content-wrapper">
                  <div>
                    {isMatch ? (
                      <div>
                        <IconButton
                          onClick={() => {
                            setIsDrawerOpen(true);
                          }}
                        >
                          <MenuIcon style={{ color: "#fff" }} />
                        </IconButton>
                      </div>
                    ) : (
                      <div> </div>
                    )}

                    <Drawer
                      anchor="left"
                      open={isDrawerOpen}
                      onClose={handleDrawerClose}

                    >
                      <div style={{ backgroundColor: "#1C1C1C" }}>
                        <div className="sider-content-wraper">
                          <div
                            className="drawer-header-main"
                            style={{ paddingRight: "20px" }}
                          >
                            <img src={Logo} alt="Logo" />
                            <IconButton
                              onClick={() => {
                                handleDrawerClose();
                              }}
                              className="app-bar-component-drawer-close-btn"
                            >
                              <CloseIcon />
                            </IconButton>
                          </div>
                          <div className="side-menu-data-list-main">
                            <ul className="side-menu-ul">
                              {PagesList.map((val, index) => {
                                return (
                                  <li
                                    className="side-menu-list-item"
                                    key={index}
                                  >
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
                                      <img
                                        src={
                                          CurrentPagePath === val.path
                                            ? val.activeIcon
                                            : val.icon
                                        }
                                      />
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
                            <Button
                              variant="text"
                              className="side-menu-log-out-btn"
                            >
                              <LogoutOutlinedIcon />
                              <span>Log Out</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Drawer>
                  </div>

                  <div className="side-menu-header">
                    <div>
                      <Button
                        variant="text"
                        disableRipple={true}
                        onClick={() => CurrentPagePath !== "/" && navigate(-1)}
                        className="side-menu-back-btn"
                      >
                        <img src={Back} />
                      </Button>
                      <p className="side-menu-header-title">{props.title}</p>
                    </div>
                    <div>
                      <Button
                        variant="text"
                        disableRipple={true}
                        className="side-menu-search-btn"
                      >
                        <img src={Search} />
                      </Button>
                      <Button
                        variant="text"
                        disableRipple={true}
                        className="side-menu-search-btn"
                      >
                        <div />
                        <img src={Notification} />
                      </Button>
                      <div className="side-menu-header-line" />
                      <Button variant="text" className="side-menu-profile">
                        <img src={user?.profilePicUrl} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"side-menu-children-data"}>{props.children}</div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default SideMenu;
