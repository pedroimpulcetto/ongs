const INITIAL_STATE = false;

export default function loading(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@loading/SET":
      return action.loading;
    case "@loading/CLOSE":
      return action.loading;
    default:
      return state;
  }
}
