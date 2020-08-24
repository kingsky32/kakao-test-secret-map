"use strict";

function solution(n, arr1, arr2) {
  var answer = [];

  for (var i = 0; i <= n - 1; i++) {
    var temp = [];
    var temp1 = [];
    var temp2 = [];

    for (var j = 0; j <= n - 1; j++) {
      arr1[i].toString(2)[j] ? temp1.push(arr1[i].toString(2)[j] === "1" ? 1 : 0) : temp1.unshift(0);
      arr2[i].toString(2)[j] ? temp2.push(arr2[i].toString(2)[j] === "1" ? 1 : 0) : temp2.unshift(0);
    }

    for (var _j = 0; _j <= n - 1; _j++) {
      temp.push(temp1[_j] || temp2[_j] ? "#" : " ");
    }

    answer.push(temp.join(""));
  }

  return answer;
}