const cutNumberInPlaceOfTen = num => ("0" + num).slice(-2);
/**
 *
 * 단일 책임 원칙
 * 이름에서 두자리 이상이 있어야 할 것 같다
 * 매직넘버 .. 조심
 * convertNumberToLastTwoDigit -> cutNumberInPlaceOfTen
 */
const convertDateToStringYYMMDD = dateObj => {
  const year = cutNumberInPlaceOfTen(dateObj.getFullYear());
  const month = cutNumberInPlaceOfTen(dateObj.getMonth() + 1);
  const date = cutNumberInPlaceOfTen(dateObj.getDate());
  return year + month + date;
};

module.exports = {
  cutNumberInPlaceOfTen,
  convertDateToStringYYMMDD
};
