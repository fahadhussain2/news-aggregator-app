interface MyObject {
  [key: string]: boolean;
}

export function getTrueKeys(obj: MyObject): string {
  const trueKeys = Object.keys(obj).filter((key) => obj[key]);
  return trueKeys.join(",");
}

export const truncateText = (text: string | undefined, maxLength:number) => {
  return text && text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};