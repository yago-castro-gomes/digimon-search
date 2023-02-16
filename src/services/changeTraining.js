export const changeTraining = (item) => {
  const changeValueTraning = item.map((element) => {
    if (element.level === 'Training') {
      return { ...element, level: 'In Training' };
    }
    return element;
  });
  return changeValueTraning;
};
