// https://www.hackerrank.com/challenges/sock-merchant

interface SockGroup {
  [key: number]: number;
}

export default function sockMerchant(n: number, ar: number[]): number {
  const socksGroup: SockGroup = ar.reduce((acc: SockGroup, val: number) => {
    acc[val] = acc[val] ? acc[val] + 1 : 1;
    return acc;
  }, {});
  return Object.values(socksGroup).reduce((acc: number, val: number) => {
    return acc + Math.floor(val / 2);
  }, 0);
}
