const configQuery = (currentQuery, newQuery) => {
  currentQuery = { ...currentQuery, ...newQuery };
  if (newQuery?.search === "") {
    delete currentQuery.search;
  } else if (newQuery?.category === "all") {
    delete currentQuery.category;
  }
  return currentQuery;
};

export { configQuery };
