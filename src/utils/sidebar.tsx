/* eslint-disable import/prefer-default-export */
export const getPosition = (
  shouldStick: boolean,
  shouldUnstickBottom: boolean
): string => {
  if (shouldStick) {
    return "fixed";
  }
  if (shouldUnstickBottom) {
    return "absolute";
  }
  return "unset";
};

export const getIsNotReachingBottomBootcamp = (
  sectionBottom: number,
  deviceHeight: number
): boolean => {
  return sectionBottom < deviceHeight - 200;
};

export const getShouldStick = (
  currPosY: number,
  stickDistanceToTop: number,
  isNotReachingBottomBootcamp: boolean
): boolean => {
  return currPosY < stickDistanceToTop && !isNotReachingBottomBootcamp;
};

export const getShouldUnstickBottom = (
  shouldStick: boolean,
  currPosY: number
): boolean => {
  return !shouldStick && currPosY < 0;
};

export const getLinkColor = (
  activeIndex: number,
  index: number,
  color: string
) => {
  return activeIndex === index ? color : "#595959";
};
