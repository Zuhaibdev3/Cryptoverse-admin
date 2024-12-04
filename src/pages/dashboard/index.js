import React, { useState } from "react";
import { SideMenu, BalanceChart } from "../../components";
import Grid from "@mui/material/Grid";
import {
  TotalNft,
  TotalDeposits,
  TotalClients,
  File,
  EditIcon,
  Delete,
  Right,
  TopUser,
} from "../../svg";


import "./index.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
const columns = [
  { id: "User", label: "User", minWidth: 100 },
  { id: "Type", label: "Type", minWidth: 100 },
  { id: "Balance", label: "Balance", minWidth: 100 },
  {
    id: "BalanceAsOf",
    label: "Balance As Of.",
    minWidth: 150,
  },
  {
    id: "Action",
    label: "Action",
    minWidth: 120,
  },
  {
    id: "Portfolio",
    label: "",
    minWidth: 80,
  },
];
const Dashbaord = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const List = [
    {
      user: "abc",
      type: "Stock",
      balance: "55,000",
      date: "09/30/2024",
    },
    {
      user: "abc",
      type: "Stock",
      balance: "55,000",
      date: "09/30/2024",
    },

    {
      user: "abc",
      type: "Stock",
      balance: "55,000",
      date: "09/30/2024",
    },
    {
      user: "abc",
      type: "Stock",
      balance: "55,000",
      date: "09/30/2024",
    },

    {
      user: "abc",
      type: "Stock",
      balance: "55,000",
      date: "09/30/2024",
    },
    {
      user: "abc",
      type: "Stock",
      balance: "55,000",
      date: "09/30/2024",
    },
    {
      user: "abc",
      type: "Stock",
      balance: "55,000",
      date: "09/30/2024",
    },
    {
      user: "abc",
      type: "Stock",
      balance: "55,000",
      date: "09/30/2024",
    },
    {
      user: "abc",
      type: "Stock",
      balance: "55,000",
      date: "09/30/2024",
    },
    {
      user: "abc",
      type: "Stock",
      balance: "55,000",
      date: "09/30/2024",
    },
  ];
  const TopUsersList = [
    {
      name: "Darwin Shaffer",
      username: "@Oschaf_1",
      price: "$ 23,3B",
    },
    {
      name: "Darwin Shaffer",
      username: "@Oschaf_1",
      price: "$ 23,3B",
    },
    {
      name: "Darwin Shaffer",
      username: "@Oschaf_1",
      price: "$ 23,3B",
    },
    {
      name: "Darwin Shaffer",
      username: "@Oschaf_1",
      price: "$ 23,3B",
    },
    {
      name: "Darwin Shaffer",
      username: "@Oschaf_1",
      price: "$ 23,3B",
    },
    {
      name: "Darwin Shaffer",
      username: "@Oschaf_1",
      price: "$ 23,3B",
    },
  ];
  return (
    <SideMenu title="Welcome Back, John Doe">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={9}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <div className="dashborad-header-box">
                <img src={TotalNft} />
                <div>
                  <p className="dashborad-header-ttile">Total NFT</p>
                  <p className="dashborad-header-value">9,170</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <div className="dashborad-header-box">
                <img src={TotalDeposits} />
                <div>
                  <p className="dashborad-header-ttile">Total deposits</p>
                  <p className="dashborad-header-value">$ 9,170,500</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <div className="dashborad-header-box">
                <img src={TotalClients} />
                <div>
                  <p className="dashborad-header-ttile">Total Clients</p>
                  <p className="dashborad-header-value">14500</p>
                </div>
              </div>
            </Grid>
          </Grid>
          <div className="dashboard-table">
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          backgroundColor: "#1c1c1c",
                          borderBottomWidth: "0px",
                          borderRadius: "16px",
                        }}
                        className="dashboard-table-header-title"
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {List.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  ).map((row, i) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={i}
                        className="dashboard-table-row"
                      >
                        <TableCell className="table-cell dashboard-table-text">
                          {row.user}
                        </TableCell>
                        <TableCell className="table-cell dashboard-table-text">
                          {row.type}
                        </TableCell>
                        <TableCell className="table-cell dashboard-table-text">
                          $ {row.balance}
                        </TableCell>
                        <TableCell className="table-cell dashboard-table-text">
                          {row.date}
                        </TableCell>
                        <TableCell className="table-cell dashboard-table-text">
                          <div>
                            <Button
                              variant="contained"
                              disableRipple={true}
                              className="dashboard-action-btn"
                            >
                              <img src={File} />
                            </Button>
                            <Button
                              variant="contained"
                              disableRipple={true}
                              className="dashboard-action-btn"
                              style={{ margin: "0px 10px" }}
                            >
                              <img src={EditIcon} />
                            </Button>
                            <Button
                              variant="contained"
                              disableRipple={true}
                              className="dashboard-action-btn"
                            >
                              <img src={Delete} />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell className="table-cell dashboard-table-text">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            <Button
                              variant="contained"
                              disableRipple={true}
                              className="dashboard-portfolio-btn"
                            >
                              Portfolio
                              <img src={Right} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={3}>
       
          <div className="dashboard-balance-box">
            <p className="dashboard-balance-title">Balance</p>
            <p className="dashboard-balance-price">$93,566.00</p>
            <div style={{ margin: "10px" }}>
              <BalanceChart />
            </div>
          </div>
          <div className="dashboard-top-users-box">
            <p>Top Users</p>
            {TopUsersList.map((val, index) => {
              return (
                <div key={index} className="top-user-card">
                  <div>
                    <img src={TopUser} />
                    <div>
                      <p className="top-user-card-name">{val.name}</p>
                      <p className="top-user-card-username">{val.username}</p>
                    </div>
                  </div>
                  <p>{val.price}</p>
                </div>
              );
            })}
            <Button
              variant="contained"
              disableRipple={true}
              className="dashboard-view-all-btn"
            >
              View All
            </Button>
          </div>
        </Grid>
      </Grid>
    </SideMenu>
  );
};
export default Dashbaord;
