function f_num1() {
  let sum = 0;
  for(let i = 1; i<=10; i++) {
    sum += i;
  }
  console.log("합: " + sum);
}

function f_num2() {
  let sum = 0, sum1 = 0, sum2 = 0;
  // 방식1
  for(let i = 2; i<=200; i+=2) {
    sum += i;
  }

  // 방식 2
  for(let i = 1; i<=200; i++) {
    if(i%2 == 0) {
      sum1+=i;
    }
  }

  // 방식 3
  for(let i = 1; i<=200; i++) {
    if(i%2 != 0) continue;
    sum2 += i;
  }
  console.log("결과1 >> " + sum + " 결과2 >> " + sum1 + " 결과3 >> " + sum2);
}

function f_num3() {
  let str = ""; // 입력된 정보를 문자열로 저장
  let sum = 0;  // 입력된 값을 저장
  
  while(!0) {
    let input = parseInt(prompt("입력하시오.")); // type string이므로 덧셈연산을 위해 정수변환 필요

    // 무한루프의 경우 빠져나갈 조건 먼저 정의하기
    if(input == 0) break;


    sum += input;
    str += input + " ";

  }
  
  // 출력문 생성
  let rst = "입력된 항목 : " + str + "\r\n";
  rst += "더해진 값 : " + sum;
  
  console.log(rst);
}

function f_num4() {

  let rst = "";
  for(let i = 1; i<=10; i++) {
    for(let k = 1; k<=10; k++) {

      if( (i+k)%3 != 0 ) continue;
      // rst += "i: " + i + ", k: " + k + " = " + (i+k) + "\r\n"; //콘솔로 출력시 줄넘김 기호
      rst += "i: " + i + ", k: " + k + " = " + (i+k) + "<br>"; //body 출력시 줄넘김 기호
    }
  }
  
  console.log(rst);
  // div 영역에 출력하기
  document.querySelector('div').innerHTML += rst;

}

function f_num5() {
  let rst = "";
  for(let i = 1; i<=100; i++) {
    if( i%2 == 0 && i%3 == 0 ) {
      rst += i + " ";
    }
  }
  console.log(rst);
  document.querySelector('div').innerText += rst;
}
function f_num6() {

  let rst = "";
  for(;;){
    let su1 = parseInt(prompt("첫번째 수"));
    let su2 = parseInt(prompt("두번째 수"));
    
    // 빠져나갈 조건
    if(su1 == 0 && su2 ==0) break;

    // 두 수의 합이 100일때만 저장
    let hap = su1 + su2;
    // if(hap > 100)
      if(hap < 100) continue;
      rst += su1 + "+" + su2 + "=" + hap + "<br>";
  }
  document.querySelector('div').innerHTML = rst;
}