export const generatePeriodData = () => {
  const currentYear = new Date().getFullYear();

  const years = currentYear - 2015;
  return Array.from({ length: years }, (_, i) => ({
    id: 2015 + 1 + i,
    name: (2015 + 1 + i).toString(),
  }));
};
