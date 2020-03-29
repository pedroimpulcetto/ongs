const INITIAL_STATE = { open: false };

export default function alert(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@alert/SUCCESS":
      return action.alert;
    case "@alert/ERROR":
      return action.alert;
    case "@alert/INFO":
      return action.alert;
    case "@alert/CLOSE":
      return action.alert;
    default:
      return state;
  }
}
