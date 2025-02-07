//your JS code here. If required.
let arr = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
for(let i=0;i<arr.length;i++){
	let newArr = arr[i].split(" ")
	console.log(newArr);
	if(newArr[0]=="a"||newArr[0]=="an"||newArr[0]=="the"){
		newArr.splice(0,1);
	}
	console.log(newArr)
	obj.[arr[i]]=newArr.join();
	console.log(obj);
}