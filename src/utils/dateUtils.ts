export const getCurrentDayName = (): string => {
  return new Date().toLocaleString('en-US', { weekday: 'long' });
};