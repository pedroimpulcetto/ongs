export function setLoading() {
  return {
    type: "@loading/SET",
    loading: true
  };
}

export function closeLoading() {
  return {
    type: "@loading/CLOSE",
    loading: false
  };
}
