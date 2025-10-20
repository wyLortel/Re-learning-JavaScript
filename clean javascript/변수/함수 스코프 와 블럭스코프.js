//전역 스코프 까지 영향이 감
var global = "전역"

if (global === "전역") {
    var global = "지역"
    console.log(global)
}

console.log(global)




//전역 변수에 영향을 끼치지않음 
let global = "전역"

if (global === "전역") {
    let global = "지역"
    console.log(global) //지역 
}

console.log(global) //전역

//이런점에서 우리는 let const를 사용하는게 더 안전함
//근데 왜 let보다 const를 사용하는게 더 좋은것이냐 
//const는 선언과 동시에 할당 그리고 재할당이 안됨



//하지만 이렇게 직접 값을 변경하는것은 가능 재참조를 한것이 아니고 객체의 내부값만 바꾼것이기에
const person = {
    name : 'jang',
    age : 30,
}

console.log(person)

person.name = "lee"
person.age = "22"

console.log(person)



//그럼 배열은?
const persons = [{
    name : 'jang',
    age : 30,
}]

console.log(persons)

persons.push({
    name: 'jang',
    age:30,
})
console.log(persons)

//const 는 재할당만 금지한다 생각하면된다 본연의 객체 그리고 배열같은 레퍼런스 객체들을 조작할때는 가능 