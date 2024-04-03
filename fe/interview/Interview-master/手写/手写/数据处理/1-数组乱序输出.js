function shuffleArray(arr) {
  const n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // 交换位置
  }

  return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 67, 8];
console.log(shuffleArray(arr));
