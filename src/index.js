// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
  let americanCoins = {"H":50, "Q":25, "D":10, "N":5, "P":1};
  let resultCoins = {};
  let floor;

  let keys = Object.keys(americanCoins);

  if(currency > 0 && currency < 10000){

      for(let i = 0; i < keys.length, currency !== 0; i++){
        
          floor = Math.floor(currency / americanCoins[keys[i]]);
          if(floor === 0) continue;
          currency = currency - floor * americanCoins[keys[i]];
          resultCoins[keys[i]] = floor;
      }
      return resultCoins;
  }else if(currency >= 10000){
          resultCoins = {error: "You are rich, my friend! We don't have so much coins for exchange"}
      return resultCoins;
  }else{
      return resultCoins;
  }

}

