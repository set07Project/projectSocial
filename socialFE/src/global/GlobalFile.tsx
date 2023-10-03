// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
// user: "" || null
// }

// const GlobalFile = createSlice({
//   name: "state",
//   initialState,
//   reducers: {
//  userState: (state, {payload}) => {
//     state.user = payload
//  },
//  logOut: (state) => {
//     state.user = null
//  }
//   }
// });

// export const {userState, logOut} = GlobalFile.actions



import { createSlice } from '@reduxjs/toolkit'

const initialState = {
user: "" || null
}

const GlobalFile = createSlice({
  name: "state",
  initialState,
  reducers: {
    userState: (state, {payload}) => {
        state.user = payload
    },
    logOut: (state) => {
        
    }
  }
});

export const {} = GlobalFile.actions

export default GlobalFile.reducer