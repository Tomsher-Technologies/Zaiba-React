interface PercentageFormatProps {
  Amount: number | string;
  decimal?: number;
  unknownValue?: string;
  zeroValue?: string;
}

export const formatDate = (inputDate: any) => {
  const options: any = { day: 'numeric', month: 'short', year: 'numeric' };
  const date = new Date(inputDate);
  return date.toLocaleDateString('en-US', options);
};

export const formatDateAndTime = (inputDate: any) => {
  if (inputDate) {
    let dateComponents = inputDate.split(' ');

    const dayMonthYear = dateComponents[0].split('-');
    const time = dateComponents[1].split(':');

    const day = Number(dayMonthYear[0]);
    const month = Number(dayMonthYear[1]) - 1; // Month in Date object is zero-based
    const year = Number(dayMonthYear[2]);
    let hour = Number(time[0]);
    const minute = Number(time[1]);
    let meridiem = '';

    // Check if 'am' or 'pm' is present in the time string
    if (dateComponents.length > 2) {
      meridiem = dateComponents[2].toLowerCase();
    }

    if (meridiem === 'pm' && hour < 12) {
      hour += 12; // Convert to 24-hour format if 'pm' and hour is less than 12
    } else if (meridiem === 'am' && hour === 12) {
      hour = 0; // Convert 12 AM to 0 (midnight) in 24-hour format
    }

    const formattedDate = new Date(year, month, day, hour, minute);
    // Check if the created date object is valid
    if (isNaN(formattedDate.getTime())) {
      return 'Invalid Date';
    }
    const options: any = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };

    return formattedDate.toLocaleString('en-US', options);
  } else {
    return 'Invalid Date';
  }

};

export const formatPhoneNumber = (phone: number | string): string => {
  if (phone) {
    let phoneNumber = phone.toString();

    if (!phoneNumber.startsWith('+971')) {
      phoneNumber = phoneNumber.replace(/^0+/, '');
      phoneNumber = '+971' + phoneNumber;
    }

    if (phoneNumber.length === 13) {
      phoneNumber = `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7, 10)} ${phoneNumber.slice(10)}`;
    }

    return phoneNumber;
  } else {
    return 'Phone is not found';
  }
}

export const capitalizeWordsFirstLetter = (str: string) => {
  return str && str.replace(/_/g, ' ').replace(/\b\w/g, (char: string) => char.toUpperCase()) || "";
};

export const amountFormat = (
  Amount: number | string,
  decimal: number = 2,
  unknownValue: string = 'AED 0.00',
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

export const percentageFormat = (
  Amount: number | string,
  decimal = 0,
  unknownValue = '--',
  zeroValue = '0'
): string => {
  const parsedAmount = typeof Amount === 'string' ? parseFloat(Amount) : Amount;

  if (isNaN(parsedAmount)) {
    return unknownValue;
  } else if (parsedAmount === 0) {
    return '0%';
  } else {
    return `${parsedAmount.toFixed(decimal)}%`;
  }
};
export const isImage = (url: any) => {
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'];
  let isFileTypeImage: any = '';
  let extension: any = '';
  if (url instanceof File) {
    isFileTypeImage = url instanceof File;
  } else {
    extension = (url?.split('.').pop() || '').toLowerCase();
  }
  return isFileTypeImage || imageExtensions.includes(extension);
};

