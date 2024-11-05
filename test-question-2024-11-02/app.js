// not refactored or optimized/performant
const lookUp = (arr) => {
  console.time("start");
  let maximumProfit = 0;
  let priceDifference = 0;
  let dayToBuy = "Day " + 1;
  for (let j = 0; j < arr.length; j++) {
    // reference loop
    let initialPrice = arr[j];
    for (let i = j; i < arr.length; i++) {
      // look up loop
      if (initialPrice < arr[i + 1]) {
        priceDifference = arr[i + 1] - initialPrice;
        if (maximumProfit < priceDifference) {
          maximumProfit = priceDifference;
          dayToBuy = "Day " + (j + 1);
        }
      }
    }
  }
  console.timeEnd("start");
  return `To make the most profit of ${maximumProfit}, you need to buy on ${dayToBuy}`;
};

// refactored and highly performant
const lookUpRefactored = (arr) => {
  console.time("start");
  let maximumProfit = 0;
  let priceToBuy = arr[0];
  for (let i = 0; i < arr.length; i++) {
    // first approach

    // if (priceToBuy > arr[i]) {
    //   priceToBuy = arr[i];
    // } else if (maximumProfit < arr[i] - priceToBuy) {
    //   maximumProfit = arr[i] - priceToBuy;
    // }

    // second approach
    priceToBuy = Math.min(priceToBuy, arr[i]);
    maximumProfit = Math.max(maximumProfit, arr[i] - priceToBuy);
  }
  console.timeEnd("start");
  return maximumProfit;
};
