export const gotoElementByIdAdjusted = (url: string, adjustment?: number) => {
  const element = document.getElementById(url);
  const headerOffset = adjustment ?? 40;
  const elementPosition = element ? element.getBoundingClientRect().top : 0;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};
