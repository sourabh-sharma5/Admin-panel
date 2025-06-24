import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  list: [
    {
      id: 1,
      name: "Andrew Bojangles",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      status: "Active",
      phone: "+79000010101",
      position: "Designer",
      department: "Pride 1",
      activity: "2 days ago"
    },
    {
      id: 2,
      name: "Samantha Grey",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      status: "Active",
      phone: "+79000010102",
      position: "Developer",
      department: "Pride 2",
      activity: "5 days ago"
    },
    {
      id: 3,
      name: "James Kent",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      status: "Inactive",
      phone: "+79000010103",
      position: "Manager",
      department: "Pride 1",
      activity: "1 day ago"
    }
  ],
  selectedUser: null
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSelectedUser(state, action) {
      state.selectedUser = action.payload;
    },
    addUser(state, action) {
  state.list.push(action.payload);
    },

    updateUser(state, action) {
      const idx = state.list.findIndex((u) => u.id === action.payload.id);
      if (idx !== -1) {
        state.list[idx] = action.payload;
      }
    },
    deleteUser(state, action) {
  state.list = state.list.filter(user => user.id !== action.payload);
}

  }
});

export const { setSelectedUser, updateUser,deleteUser, addUser } = userSlice.actions;

export default userSlice.reducer;
