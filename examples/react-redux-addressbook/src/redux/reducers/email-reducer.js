// a dummy reducer to check if this is called irrespective of the action type
function emailReducer(state = {}, action) {
  console.log('email.reducer CALLED ');
  switch (action.type) {
    case 'SEND_EMAIL': {
      console.log('email.reducer--> delete contact ');
    }
  }
  return { ...state };
}

export default emailReducer;
