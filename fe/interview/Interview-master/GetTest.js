const getTest = (total) => {
  const questions = [];
  while (questions.length < 10) {
    const que = Math.round(Math.random() * total);
    !questions.includes(que) && questions.push(que);
  }
  return questions.sort((a, b) => a - b);
};

console.log(getTest(72));
