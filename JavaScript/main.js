'use strict'
//
// // const userName = document.getElementById("profileName")
// //
// // userName.innerText = "кто-то"
//
//
// let num;
//
// num = Math.max("8", "9")
//
// let ceilnum = Math.ceil(1.9);
// let floornum = Math.floor(1.1);
// let roundnum = Math.round(1.9)
//
// console.log(num)
// console.log(ceilnum)
// console.log(floornum)
// console.log(roundnum)
// // console.log(a)

const algorithm = (arr, item) => {
	let low = 0;
	let high = arr.length - 1;
	let count = 0;

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		let guest = arr[mid];

		++count;

		console.log(`--------------\nCOUNT: ${count} (Начало)\nlow = ${low}\nhigh = ${high}\nmid = ${mid}\nguest = ${guest}`)


		if (guest === item) {
			return mid
		} else if (guest > item) {
			high = mid-1;
		} else {
			low = mid+1;
		}

		++count;

		console.log(`--------------\nCOUNT: ${count} (Конец)\nlow = ${low}\nhigh = ${high}\nmid = ${mid}\nguest = ${guest}`)

	}

	return null;
}

console.log(algorithm([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));