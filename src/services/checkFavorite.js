export const favoriteSome = (item, comparisson) => {
  const checkFavorite = item
    .some((digimon) => digimon.name === comparisson.name);

  return checkFavorite;
};
