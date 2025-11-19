var initEnteries = [
  { id: 1, title: "Work Income", value: 1100, isExpense: false },
  { id: 2, title: "Water Bill", value: 30, isExpense: true },
  { id: 3, title: "Rent", value: 300, isExpense: true },
  { id: 4, title: "Power Bill", value: 60, isExpense: true },
];

export default function reducer(state = initEnteries, action) {
  switch (action.type) {
    case "ADD_ENTRY":
      return [...state, action.payload];

    case "REMOVE_ENTRY":
      return state.filter((entry) => entry.id !== action.payload);

    case "UPDATE_ENTRY":
      const newEnteries = [...state];
      const index = newEnteries.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEnteries[index] = { ...action.payload.entry };
      return newEnteries;

    default:
      return state;
  }
}
