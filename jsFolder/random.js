function f_random(min,max) {
  // 랜덤 값 생성 공식
  //                        100-65+1 = 36
  //                                   65
  return Math.floor(Math.random()*(max-min+1)+min);
}