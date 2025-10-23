console.log(1 + "1");    // "11"  → 숫자 + 문자열 → 문자열로 변환됨
console.log(!!"hello");  // true  → 문자열 → 불리언으로 변환됨
console.log(!!"");       // false → 빈 문자열 → falsy
console.log(parseInt("123"));       // 123 → 문자열 → 숫자
console.log(parseInt("11", 2));     // 3   → 2진수로 변환됨


parseInt("010", 10); // 명시 하는게 좋은듯 