function distanceFromHqInBlocks(start,end) {
    let DistanceCovered = end - start;
    console.log(DistanceCovered);
  }

  distanceFromHqInBlocks(50,100)

  function distanceFromHqInFeet(start,end) {
    distanceFromHqInBlocks(start,end);
    let DistanceCoveredInFeet =((end - start)*264)
  }

  function distanceTravelledInFeet(start, destination) {
    let finaldistance = destination - start;
    return finaldistance;
  }

  distanceTravelledInFeet (50,100)

  function calculatesFarePrice(start, destination) {
      let fare;
    let finaldistance = (destination - start);
    if (finaldistance<=400){
      fare = 'its free for you';
  } else if (finaldistance >400 && finaldistance<= 4000) {
      fare = finaldistance*2;
  } else {
      console.log("not valid");
  }
  }