import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, Box, Avatar
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, setSelectedUser } from "../features/users/userSlice";
import { useState, useEffect } from "react";
import { Snackbar, Alert } from "@mui/material";


const UserModal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.users.selectedUser);
  const [editData, setEditData] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);


  useEffect(() => {
    if (selectedUser) setEditData(selectedUser);
  }, [selectedUser]);

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(updateUser(editData));
    setOpenSnackbar(true);
    onClose();
  };

  if (!selectedUser) return null;

  return (
    <>
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}>
          <Avatar src={editData.avatar} />
          <TextField
            label="Name"
            name="name"
            value={editData.name}
            onChange={handleChange}
            fullWidth
          />
        </Box>
        <TextField label="Status" name="status" value={editData.status} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <TextField label="Phone" name="phone" value={editData.phone} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <TextField label="Position" name="position" value={editData.position} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <TextField label="Department" name="department" value={editData.department} onChange={handleChange} fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
    
       <Snackbar
  open={openSnackbar}
  autoHideDuration={3000}
  onClose={() => setOpenSnackbar(false)}>
  <Alert severity="success" sx={{ width: '100%' }}>
    User updated successfully!
  </Alert>
</Snackbar>

    </>
  );
};

export default UserModal;
