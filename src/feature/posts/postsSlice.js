import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "Harry Potter",
    content: "One of the best burger in the Town",
  },
  {
    id: "2",
    name: "Willet ton ",
    content: "The best part is i can build my owen burger",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, content) {
        return {
          payload: {
            id: nanoid(),
            name,
            content,
          },
        };
      },
    },
  },
});

export const selectAllReview = (state) => state.posts;

// this is for dispatch
export const { postAdded } = postsSlice.actions;
// this is for configureStore
export default postsSlice.reducer;
