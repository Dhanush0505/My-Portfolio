function minWorkers(quality, wage, cost) {
    var captain = wage[0];
    var cap_quality = quality[0];
    var temp_cost = captain;
    var count = 1;
    var temp = 0;
  
    for (let i = 1; i <= quality.length - 1; i++) {
      temp = quality[i] * (captain / cap_quality);
      if ((temp + captain) <= cost) {
        temp_cost += temp;
        count++;
      }
    }
    return count;
  }

  
  const quality = [10, 20, 5];
  const wage = [30, 50, 70];
  const cost = 105;
  
  const numberOfWorkers = minWorkers(quality, wage, cost);
  console.log(numberOfWorkers);