export const chatBubbleTime = (chatDate: string) => {
  const date = new Date(chatDate);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const isAM = hours < 12 ? true : false;
  const hours12 = hours < 13 ? hours : hours - 12;
  return `${isAM ? "오전" : "오후"} ${hours12}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;
};

export const checkDateChange = (date1: string, date2: string) => {
  const dateObj1 = new Date(date1);
  const dateObj2 = new Date(date2);
  if (
    dateObj1.getFullYear() === dateObj2.getFullYear() &&
    dateObj1.getMonth() === dateObj2.getMonth() &&
    dateObj1.getDate() === dateObj2.getDate()
  ) {
    return false;
  }
  return true;
};

export const dateChangeFormat = (date: string) => {
  const dateObj = new Date(date);
  const dayList = ["일", "월", "화", "수", "목", "금", "토"];
  return `${dateObj.getFullYear()}년 ${dateObj.getMonth() + 1}월${" "} 
  ${dateObj.getDate()}일 (${dayList[dateObj.getDay()]})`;
};
