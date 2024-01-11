export const formatDate = (inputDate: any) => {
    const options: any = { day: 'numeric', month: 'short', year: 'numeric' };
    const date = new Date(inputDate);
    return date.toLocaleDateString('en-US', options);
  };
  
  export const capitalizeWordsFirstLetter = (str: any) => {
    return str?.replace(/\b\w/g, (char: any) => char.toUpperCase());
  };
  
  export const amountFormat = (
    Amount: number | string,
    decimal: number = 2,
    unknownValue: string = '--',
    zeroValue: string = '0',
    textColor: string = ''
  ): string | JSX.Element => {
    if (isNaN(parseFloat(String(Amount)))) {
      return unknownValue;
    } else if (Amount === '0') {
      return zeroValue;
    } else {
      return (
        'AED ' + (Number(Amount && parseFloat(String(Amount)).toFixed(decimal) || '0'))?.toFixed(2)
      );
    }
  };
  
  // export const percentageFormat = (
  // 	Amount,
  // 	decimal = 0,
  // 	unknownValue = '--',
  // 	zeroValue = '0'
  // ) => {
  // 	if (isNaN(Amount) == true) {
  // 		return unknownValue;
  // 	} else if (Amount == '0') {
  // 		return zeroValue;
  // 	} else {
  // 		return <>{parseFloat(Amount).toFixed(decimal)} <span style={{ fontFamily: "sans-serif", color: "#666666" }}>%</span> </>;
  // 	}
  // };
  