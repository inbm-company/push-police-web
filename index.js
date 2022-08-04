
let buttonTag 
let divTag 
let cnt = -1;
const colors = ['red', 'blue', 'green', 'yellow'];

let imgTag ;
let imgTextTag;
let btn4imgTag;

let ct;

const userId = "userid04"

window.onload = () => {
	buttonTag = document.getElementById('btnId');
 	divTag = document.getElementById('container');
	setListener();

	setTags();
	readyView();

	btn4imgTag.addEventListener('click', (e) => {
		setData()
	});
}

const setListener = () => {	
	buttonTag.addEventListener('click', (e) => {
		changeColor();
		showAndroidToast("hello word")
	});

	

}

const changeColor = ()=> {
	cnt++;
	cnt = cnt < 4 ? cnt : 0;
	divTag.style.backgroundColor = colors[cnt];
}

const showAndroidToast = (toast) => {
	Android.showToast(toast);
}


const readyView = () =>{
	setTimeout(function() {
		Android.showToast("readyView");
		Android.onReady(userId);
	}, 3000);
}

const logout = () => {
	alert("logout");
}



// =================================================================================================







const setTags = () => {
	console.log("test setTags");
	imgTag = document.getElementById('img');
	imgTextTag = document.getElementById('img-title');
	btn4imgTag = document.getElementById('change-img');
}

const setData = () => {
	console.log("test setData");
	const result = dbRead();
	imgTag.src = result.img;
	imgTextTag.text = result.text;
}

const dbRead = ()	 => {
	ct++;
	console.log("test dbRead");
	return{
		img:"https://picsum.photos/200",
		text:`text${ct}`
	}	
}