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
    case "SORT": {
      console.log("state : ", state);
      let filtered = [];

      if (state && state.length > 0) filtered = [...state];
      else filtered = [...payload.data];

      switch (payload.value) {
        case "AZ": {
          filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
          console.log(filtered);
          return filtered;
        }
        case "ZA": {
          filtered = filtered.sort(function (a, b) {
            if (a.name > b.name) {
              return -1;
            }
            if (a.name < b.name) {
              return 1;
            }
            return 0;
          });
          console.log(filtered);
          return filtered;
        }
        case "HTL": {
          filtered = filtered.sort(function (a, b) {
            if (a.price > b.price) {
              return -1;
            }
            if (a.price < b.price) {
              return 1;
            }
            return 0;
          });
          console.log(filtered);
          return filtered;
        }
        case "LTH": {
          filtered = filtered.sort(function (a, b) {
            if (a.price > b.price) {
              return 1;
            }
            if (a.price < b.price) {
              return -1;
            }
            return 0;
          });
          console.log(filtered);
          return filtered;
        }
      }
    }
  }
};

export default productReducer;
