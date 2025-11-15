function middleSubstring(stringInput: string): string {
  // 関数を完成させてください

  if (stringInput.length <= 2) {
    return stringInput[0];
  } else {
    const a: number = Math.floor(stringInput.length / 2);

    const b: string =
      stringInput.slice(0, a) + stringInput.slice(a + 1, length - 1);
    return b;
  }
}
