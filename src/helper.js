function convertDegreesToDirection8(degrees) {
    const directions = ["North", "NorthEast", "East", "SouthEast", "South", "SouthWest", "West", "NorthWest"];
    const index = Math.round(degrees / 45) % 8;// Adjust division by 45 for 8 directions
    return directions[index];
  };

  export {convertDegreesToDirection8}