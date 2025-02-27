function max(x, y) {
    if (x > y) return x;
    return y;
  }
  
  // outro exemplo simplificado
  function simpMax(x, y) {
    return x > y ? x : y;
  }
  console.log(simpMax(17700, 16700));
  
  // outro exemplo simplificado
  const simpMax2 = (x, y) => (x > y ? x : y);
  console.log(simpMax2(1000, 1000));
  