const greetings = ["hi", "hello", "hey", "ola", "hallo"];
const timeBoundGreetings = [];
const weatherMatrix = [];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = "";
let timePeriod = "";

const findTimeOfDay = () => {
	const now = new Date();
	const hours = now.getHours();
	switch (true) {
		case hours < 12 && hours > 0 : 
			timePeriod = "morning";
			break;
		case hours >= 12 && hours < 18 : 
			timePeriod = "afternoon";
			break;
		case hours >= 18 && hours < 22 : 
			timePeriod = "evening";
			break;
		default: 
			timePeriod = "night";
			break;
	}
	currentMonth = monthsOfYear[now.getMonth()];
	console.log("month = " + currentMonth);
	console.log("time = " + timePeriod);

}

const checkWeatherIsTypical = () => {

}

const generateMessage = () => {
	findTimeOfDay();
	const greetingRandomNum = Math.floor(Math.random() * greetings.length);
	console.log(greetingRandomNum);
	console.log(greetings[greetingRandomNum]);
}


generateMessage();	



/* Tests
	for (let i = 0; i < 1000; i++) {
		generateMessage();	
	}
*/
