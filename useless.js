// f' 펑션과 같은 백팁
function hello(name){
    console.log('Hello,' + name+'!');
}

// 백팁써보기
function bthello(name){
    console.log(`backtip, ${name} hello!`);
}
bthello('얄룽')

// 화살표함수 써보기
const add = (a,b) => {
    return a+b;
}

console.log(add(1,2));

// 함수내부에서 바로 return하는 경우
const add = (a,b) => a+b
console.log(add(1,2))

// 화살표 축약이 안되는 경우
const getGrade = score => {
    if (score === 100){
        return 'A+';
    }
    else if (score >= 80){
        return 'B+';
    }
    else{
        return 'F';
    }
};
const grade = getGrade(75);

function calcCircle(r = 1){
    return Math.PI * r * r ;
}
// default radius = 1
const area = calcCircle();
// 화살표함수로 선언해주기
const calcCircle = (r= 1) => Math.PI *r *r;
const area = calcCircle();

// 호이스팅을 방지하기 위해 var보다는 const와 let을 쓰자
// 삼항연산자
const array = [];
let text = '';
if (array.length === 0){
    text = "배열이 비어있습니다.";
} else {
    text = '배열이 비어있지 않습니다';
}
console.log(text)

const array = [];
let text = array.length === 0 ? '배열이 비어있습니다' : '배열이 비어있지 않습니다.';
console.log(text);

const cond ? 'true' : 'false';

// Truthy, Falsy

//falsy활용 _ 정의를 줄여주기
function print(person){
    if(!person){
        console.log('person이 없네용');
        return;
    }
    console.log(person.name);
}
const person = null;
print(person);
// falsy: undefined, null _ !falsy = True

// 객체 _ 키:원하는 값
const dog = {
    name: '멍멍이'
    age: 2
};

console.log(dog.name);
console.log(`얘 나이는 ${dog.age}야`);

// 함수에서 객체를 파라미터로 받기
const ironMan = {
    name : '토니',
    actor: '로다주',
    alias: '아이언맨'
};
const captainAmerica = {
    name: '스티브',
    actor: '크리스',
    alias: '충무공'
};

function print(hero){
    const text = `${hero.alias}(${hero.name})의 역할을 맡은 배우는 ${hero.actor} 입니다.`;
    console.log(text);
}
print(ironMan);
print(captainAmerica);

// 객체 안에 함수넣기
const dog = {
    name : '멍멍이',
    sound: '월월',
    // 화살표함수 사용 불가. 함수형 선언해야함 (return)
    say : function(){
        //함수안에서 자기 자신의 객체를 this로 칭함
        console.log(this.sound);
    }
};
dog.say();

// 객체 배열
const objects = [{name: '멍멍이'},{name : '야옹야옹이'}];
objects[0]//멍멍이
// 객체 push (append)
objects.push({
    name:'뭉치'
});
// 길이 확인
console.log(objects.length);

//forEach
const superheroes = ['아이언맨','캡아','ㅌㄹ']
// for문으로 이를 뽑으면
for (let i = 0; i<superheroes.length; i++){
    console.log(superheroes[i]);
}
// foreach를 활용하면 -> 함수형태의 파라미터 전달을 콜백함수라함
superheroes.forEach(hero => {
    console.log(hero);
});

//map을 안쓰면
var array1 = [1,2,3,4,5,6,7];
var squared = [];
for (let j = 0; j <array.length; i++){
    squared.push(array[i]*array[i]);
}
console.log(squared)

//foreach로 개선하면
array1.forEach(n=>{
    squared.push(n*n);
});
console.log(squared);

//map을 사용하면
const square =n => n*n
const squared_map = array1.map(squar);
console.log(squared_map);


// 비구조화 할당
const animal = {
    name: '멍멍이',
    type: '개'
  };
  
  //애니멀 객체 안의 name을 nickname으로 부르겠다는 뜻
  const { name: nickname } = animal
  console.log(nickname);

// 배열 비구조화 할당
var array1 = [1,2];
// one,two를 각각 array의 요소로 받아오겠다
var [one, two] = array;

// 깊은 비구조화 할당
const deepObject = {
    state: {
      information: {
        name: 'meotsa',
        languages: ['korean', 'english', 'chinese']
      }
    },
    value: 5
  };
  
const {name, languages} = deepObject.state.information;
const{value} = deepObject;
const extracted = {
    name,
    languages,
    value
};
console.log(extracted);

// 한번에 추출하기
const{
    state:{
        information: {name, languages}
    },
    value
} = deepObject;

//spread _ 객체 안에 같은 선언들을 해결해주기

var slime = {
    name: '슬라임'
  };
  
var cuteSlime = {
    name: '슬라임',
    attribute: 'cute'
  };
  
  var purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
  };

// 위에서 name, attribute가 반복됨 -> spread해주기 (상속느낌)
const slime = {
    name: '슬라임'
  };
  
  const cuteSlime = {
    ...slime,
    attribute: 'cute'
  };
  
  const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
  };

// 배열 spread
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];

// rest
const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
  };
  
  const { color, ...rest } = purpleCuteSlime;
  console.log(color);
  console.log(rest);
  // color을 제외한 attribute, name이 rest에 저장
// rest에 해당하는건 변수명이 자유로움.cuteslime등등가능
const { color, ...cuteSlime } = purpleCuteSlime;

//배열 rest : 0 빼고 나머지
const numbers = [0, 1, 2, 3, 4, 5, 6];
const [one, ...rest] = numbers;
// 반대는 성립되지 않음 [rest, one]

// 함수파라미터가 몇개가 될지 모르겠는 상황에서 ..rest로 NaN안나게 해주기
function sum(...rest) {
    return rest;
  }