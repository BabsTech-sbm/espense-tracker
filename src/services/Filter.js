const today = new Date();
const startOfWeek = new Date(today);
startOfWeek.setDate(today.getDate() - today.getDay());
/* const startOfMonth = new Date(today.getFullYear(), today.getMonth()) */

export const filterByDate = (data, filterType) => {
  return data.filter((item) => {
    const itemDate = new Date(item.date);

    if (filterType === "Today") {
      return (
        itemDate.getDate() === today.getDate() &&
        itemDate.getMonth() === today.getMonth() &&
        itemDate.getFullYear() === today.getFullYear()
      );
    } else if (filterType === "This Week") {
      return itemDate >= startOfWeek && itemDate <= today;
    } else if (filterType === "This Month") {
      return (
        itemDate.getMonth() === today.getMonth() &&
        itemDate.getFullYear() === today.getFullYear()
      );
    }
    return true;
  });
};

export const filterByCategory = (data, itemCategory) => {
  return data.filter((expense) => expense.category === itemCategory);
};
