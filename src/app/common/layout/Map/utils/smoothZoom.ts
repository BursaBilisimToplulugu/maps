export const smoothZoom = (from: number, to: number) => {
  if (from === to) return;
  let current = from;
  const increment = to > from ? 1 : -1;
  const stepTime = Math.abs(Math.floor(1000 / (to - from)));
  const timer = setInterval(() => {
    current += increment;
    // map.setZoom(current);
    if (current === to) {
      clearInterval(timer);
    }
  }, stepTime);
};
