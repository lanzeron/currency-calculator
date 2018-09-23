export const getFormatedDate = currentDate => {
  let date = new Date(currentDate);

  if (!date.getTime()) {
    return new Error('invalid date is passed!');
  }

  let dd = date.getDate();
  let mm = date.getMonth()+1;
  const yyyy = date.getFullYear();

  (dd<10) && (dd=`0${dd}`);
  (mm<10)&& (mm=`0${mm}`);

  return `${mm}/${dd}/${yyyy}`;
};

export const calculateKuna = (value, currency) => {
  const result = currency.unit_value === 1 ?
    value * currency.median_rate :
    value * currency.median_rate * 100;
  return Math.round(result) === result ?
    result :
    +result.toFixed(3);
};


 export const calculateFromKuna = (value, currency) => {
   const result = currency.unit_value === 1 ?
     value / currency.median_rate :
     value / currency.median_rate / 100;
   return Math.round(result) === result ?
     result :
     +result.toFixed(3);
 };
