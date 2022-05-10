const productReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SEARCH": {
      let filtered = [];
      if (!payload.isWith) {
        filtered = state.filter((p) =>
          p.name.toUpperCase().includes(payload.value.toUpperCase())
        );
      } else {
        filtered = payload.data.filter((p) =>
          p.name.toUpperCase().includes(payload.value.toUpperCase())
        );
      }
      return filtered;
    }
    case "PRICE": {
      let filtered = [];
      if (!payload.isWith) {
        filtered = state.filter(
          (p) => p.price >= payload.value[0] && p.price <= payload.value[1]
        );
      } else {
        filtered = payload.data.filter(
          (p) => p.price >= payload.value[0] && p.price <= payload.value[1]
        );
      }

      return filtered;
    }
  }
};

export default productReducer;
