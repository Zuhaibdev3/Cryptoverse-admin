import React, { useEffect } from "react";
import { SideMenu, TableChart } from "../../components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { File, EditIcon, Delete } from "../../svg";
import { Graph } from "../../images";
import './index.css'
import { useUsers } from "../../hooks/form/useUsers";
import { convertUTCToDate } from "../../utils/date";

const columns = [
  { id: "Wallet", label: "Wallet", minWidth: 100 },
  { id: "Users", label: "Users", minWidth: 100 },
  { id: "Balance", label: "Balance", minWidth: 100 },
  {
    id: "BalanceAsOf",
    label: "Balance As Of.",
    minWidth: 150,
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
];
const UserWallets = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { getUsers, store: { users, status } } = useUsers()

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <SideMenu title="User Wallets">
      {status === "pending" ? <p className="table-loader">Loading...</p> :
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
                {users.slice(
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
                        {row.walletAddress}
                      </TableCell>
                      <TableCell className="table-cell dashboard-table-text">
                        {row.fullName || "User"}
                      </TableCell>
                      <TableCell className="table-cell dashboard-table-text">
                        $ {row.balance || 0}
                      </TableCell>
                      <TableCell className="table-cell dashboard-table-text">
                        {convertUTCToDate(row.updatedAt) || "23 Nov 2001"}
                      </TableCell>
                      <TableCell className="table-cell dashboard-table-text">
                        {/* <TableChart /> */}
                        <img src={Graph} width={"210px"} height={"42px"} />
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
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      }
    </SideMenu>
  );
};
export default UserWallets;
