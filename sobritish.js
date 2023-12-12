const greetings = ["hi", "hello", "hey", "ola", "hallo"];
const timeBoundGreetings = [
	{greeting:"Good Morning", timeperiod:"morning"},
	{greeting:"Good afternoon", timeperiod:"afternoon"},
	{greeting:"'Afternoon", timeperiod:"afternoon"},
	];
const weatherMatrix = [];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = "";
let currentTimePeriod = "";

const findTimeOfDay = () => {
	const now = new Date();
	const hours = now.getHours();
	switch (true) {
		case hours < 12 && hours > 0 : 
			currentTimePeriod = "morning";
			break;
		case hours >= 12 && hours < 18 : 
			currentTimePeriod = "afternoon";
			break;
		case hours >= 18 && hours < 22 : 
			currentTimePeriod = "evening";
			break;
		default: 
			currentTimePeriod = "night";
			break;
	}
	currentMonth = monthsOfYear[now.getMonth()];
}

const getTimeBoundGreeting = () => {
	findTimeOfDay()
	let validArray = [];
	validArray = timeBoundGreetings.filter((item) => item["timeperiod"] === currentTimePeriod);
	const greetingRandomNum = Math.floor(Math.random() * validArray.length);
	return validArray[greetingRandomNum]["greeting"];
	
}

const checkWeatherIsTypical = () => {

}

const generateMessage = () => {
	
	const greetingRandomNum = Math.floor(Math.random() * greetings.length);
	console.log("tbg = " + getTimeBoundGreeting());
	console.log(greetingRandomNum);
	console.log(greetings[greetingRandomNum]);
}


generateMessage();	



/* Tests
	for (let i = 0; i < 1000; i++) {
		generateMessage();	
	}
*/
