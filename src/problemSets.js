export const getNumbers = () => {
  const randomRange = Math.floor(Math.random() * (Math.floor(5) - Math.ceil(2)) + Math.ceil(2));
  const numbers = [];

  for(var i = 0; i < randomRange; i++) {
    const randomNumber = Math.floor(Math.random() * (Math.floor(12) - Math.ceil(1)) + Math.ceil(1));

    numbers.push(randomNumber);
  }

  return numbers;
}

export const writeExpression = (nums, op) => {
  return nums.join(` ${op} `);
}

export const operationPairings = {
  "+": "add",
  "-": "subtract",
  "*": "multiply"
}
