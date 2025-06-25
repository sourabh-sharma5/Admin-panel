import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  MenuItem,
  Button,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deleteUser} from "../features/users/userSlice";
import InviteModal from "../components/InviteModal";
import UserModal from "../components/UserModal";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);

  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [inviteOpen, setInviteOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this user?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        mt: 4,
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
          Users
        </Typography>

        
        <Grid container spacing={2} sx={{ mb: 3 }} alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <TextField
              select
              fullWidth
              label="Department"
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
            >
              <MenuItem value="All">All Departments</MenuItem>
              <MenuItem value="Pride 1">Pride 1</MenuItem>
              <MenuItem value="Frontend">Frontend</MenuItem>
              <MenuItem value="Design">Design</MenuItem>
              <MenuItem value="PMO">PMO</MenuItem>
              <MenuItem value="API">API</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={4} md={2}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => setInviteOpen(true)}
              startIcon={<PersonAddAltIcon />}
            >
              Invite
            </Button>
          </Grid>
        </Grid>

        
        <Paper sx={{ width: "100%", overflowX: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Phone number</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Activity</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .filter((user) =>
                  user.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .filter(
                  (user) =>
                    departmentFilter === "All" ||
                    user.department === departmentFilter
                )
                .map((user) => (
                  <TableRow key={user.id} hover>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          src={user.avatar}
                          alt={user.name}
                          sx={{ width: 32, height: 32, mr: 1 }}
                        />
                        {user.name}
                      </Box>
                    </TableCell>
                    <TableCell>{user.status}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.position}</TableCell>
                    <TableCell>{user.department}</TableCell>
                    <TableCell>{user.activity}</TableCell>
                    <TableCell align="center">
                      <IconButton onClick={() => setEditUser(user)}>
                        <MoreVertIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleDelete(user.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Paper>

        
        <InviteModal open={inviteOpen} onClose={() => setInviteOpen(false)} />
        {editUser && (
          <UserModal
            open={!!editUser}
            user={editUser}
            onClose={() => setEditUser(null)}
          />
        )}
      </Container>
    </Box>
  );
};

export default Users;
