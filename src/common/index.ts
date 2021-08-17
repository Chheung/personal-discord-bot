export const random = (arr: any[]) => {
  if (!arr?.length) return "u wanna mess with me??";

  return arr[Math.floor(Math.random() * arr.length)];
};
