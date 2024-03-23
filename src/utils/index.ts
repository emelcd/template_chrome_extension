const calculateUrgency = (date: Date) => {
  // three possibilities 2 days, 5 days, 10 days
  const today = new Date();
  const diff = date.getTime() - today.getTime();
  const diffInDays = diff / (1000 * 3600 * 24);
  if (diffInDays <= 2) {
    return "HIGH";
  }
  if (diffInDays <= 5) {
    return "MEDIUM";
  }
  return "LOW";
};
