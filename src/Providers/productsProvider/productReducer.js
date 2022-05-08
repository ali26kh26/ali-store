const productReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SIZE": {
      console.log(payload);
      return state;
    }
    case "SEARCH": {
      const filtered = payload.data.filter((p) =>
        p.name.toUpperCase().includes(payload.value.toUpperCase())
      );
      return filtered;
    }
    case "PRICE": {
      const filtered = payload.data.filter(
        (p) => p.price >= payload.value[0] && p.price <= payload.value[1]
      );
      return filtered;
    }
  }
};

export default productReducer;
