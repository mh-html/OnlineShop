const shortenTtile = (title) => {
  const titleSplit = title.split(" ");
  return `${titleSplit[0]} ${titleSplit[1]}`;
};

export { shortenTtile };
