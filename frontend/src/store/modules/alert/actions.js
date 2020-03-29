export function success(msg) {
  return {
    type: "@alert/SUCCESS",
    alert: {
      open: true,
      type: "success",
      msg
    }
  };
}

export function error(msg) {
  return {
    type: "@alert/ERROR",
    alert: {
      open: true,
      type: "error",
      msg
    }
  };
}

export function info(msg) {
  return {
    type: "@alert/INFO",
    alert: {
      open: true,
      type: "info",
      msg
    }
  };
}

export function close() {
  return {
    type: "@alert/CLOSE",
    alert: {
      open: false
    }
  };
}
