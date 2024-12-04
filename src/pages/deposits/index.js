import React from "react";
import { SideMenu, SummaryChart, TableChart } from "../../components";
import "./index.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { File, EditIcon, Delete, Right } from "../../svg";
import TableFooter from "@mui/material/TableFooter";
import { Graph } from "../../images";
const columns = [
  { id: "User", label: "User", minWidth: 100 },
  { id: "Type", label: "Type", minWidth: 100 },
  { id: "Balance", label: "Balance", minWidth: 100 },
  {
    id: "BalanceAsOf",
    label: "Balance As Of.",
    minWidth: 100,
  },
  {
    id: "chart",
    label: "",
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
const Deposits = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const List = [
    {
      user: "Abc",
      type: "Artistic",
      balance: "55,000",
      date: "09/30/2022",
    },
    {
      user: "Abc",
      type: "Artistic",
      balance: "55,000",
      date: "09/30/2022",
    },
    {
      user: "Abc",
      type: "Artistic",
      balance: "55,000",
      date: "09/30/2022",
    },
    {
      user: "Abc",
      type: "Artistic",
      balance: "55,000",
      date: "09/30/2022",
    },
  ];
  return (
    <SideMenu title="Deposits">
      <div className="deposites-summary-box">
        <div className="deposites-summary-box-header">
          <p className="deposites-summary-box-title">Summary</p>
          <p className="deposites-summary-box-header-text">
            Last 12 months data as of last month
          </p>
        </div>
        <div className="deposites-summary-box-chart">
          <SummaryChart />
        </div>
      </div>
      <div className="user-wallet-table">
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
                      <img src={Graph} width={"210px"} height={"42px"}/>
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
            <TableFooter className="deposits-table-footer">
              <TableRow>
                <TableCell colSpan={2}>
                  <div>
                    <p className="deposits-table-footer-title">Total</p>
                  </div>
                </TableCell>
                <TableCell colSpan={6}>
                  <p className="deposits-table-footer-price">$ 345,000</p>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </SideMenu>
  );
};
export default Deposits;
