const initialState = [
  {
    "id": "2",
    "text": "Paris is so cool!",
    "commenter": {
      "id": "1",
      "name": "Polly Jane"
    }
  }
];


export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
