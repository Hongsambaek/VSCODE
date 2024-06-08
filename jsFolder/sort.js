// 정렬하기 위한 정보 얻기
// document.getElementsByTagName('tr');
let v_trs = document.querySelectorAll('tr'); // 유사배열(Array 아님, 메소드 사용불가)
console.log(v_trs);

let v_arr = []; // 유사배열 값을 담을 빈 배열 생성

// sort메소드 적용을 위해 배열로 데이터 옮기기

// 1. 기본 for문 이용 방식
for(let i = 1; i<v_trs.length; i++) {
  v_arr.push(v_trs[i]);
}
// console.log(v_arr);

// 2. Array.from() 이용 방식
let v_arr2 = Array.from(v_trs);
// 배열 내용 수정 - splice(idx,n,a,b,c...)
v_arr2.splice(0,1)
// console.log(v_arr2);

// 3. ES6 스프레드 연산자 이용 방식
let v_arr3 = [...v_trs];
v_arr3.splice(0,1);
// console.log(v_arr3);

function f_sort(p_idx) {
  // alert(p_idx); // 0 제목, 1 글쓴이, 2 내용 , 3 날짜

  // v_trs.sort(); // 유사배열로서 배열의 메소드 활용 불가, sort is not a function
  v_arr2.sort(function(a,b){
    // console.log(a); // a와 b매개변수로 행정보가 모두 들어오고 있음
    // console.log(a.children); // 행 내부 td요소
    // console.log(a.children[p_idx]); // 행 내부 td요소의 세부항목
    console.log(a.children[p_idx].innerText); // 세부항목의 text정보

    if(a.children[p_idx].innerText > b.children[p_idx].innerText) {
      return 1;
    }else {
      return -1; // 자리변경
    }

  });
  console.log(v_arr2);

  // 정렬된 행(tr) 4개를 넣을 대상요소(table) 얻기
  let v_tbl = document.querySelector('table');
  // 자바스크립트는 일괄 처리 불가, 행요소 하나씩 append(이동)처리
  for(let i = 0; i<v_arr2.length; i++) {
    v_tbl.append(v_arr2[i]);
  }
}