const greetings = ["hi", "hello", "hey", "ola", "hallo"];
const timeBoundGreetings = [
	{greeting:"good Morning", timeperiod:"morning"},
	{greeting:"morning", timeperiod:"morning"},
	{greeting:"good afternoon", timeperiod:"afternoon"},
	{greeting:"'afternoon", timeperiod:"afternoon"},
	];
const weatherTypes = ["snow", "rain", "wind", "sun", "heat"];
const weatherMatrix = [
	{
		month:"January", 
		typicalWeather:["snow", "rain", "wind"]
	},
	{
		month:"December", 
		typicalWeather:["snow", "rain", "wind"]
	}
	];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = "";
let currentTimePeriod = "";
let randomWeather = "";


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
	//get random weather
	const weatherRandomNum = Math.floor(Math.random() * weatherTypes.length);
	randomWeather = weatherTypes[weatherRandomNum];
	//check if it is typcial for the month
	console.log(randomWeather)
	let weatherObj = weatherMatrix.filter((item)=> item["month"] === currentMonth)
	console.log(JSON.stringify(weatherObj))
	let isTypical = weatherObj[0]["typicalWeather"].indexOf(randomWeather);

	return isTypical;
}

const generateMessage = () => {
	
	const greetingRandomNum = Math.floor(Math.random() * greetings.length);
	const randomMessage = greetings[greetingRandomNum];
	const timeBoundMessage = getTimeBoundGreeting();
	const isTypicalWeather = checkWeatherIsTypical();

	if (isTypicalWeather === -1) {
		console.log(`${randomMessage}, ${timeBoundMessage}, this ${randomWeather} is crazy for this time of year isn't it!`);
	} else {
		console.log(`${randomMessage}, ${timeBoundMessage}, I hate this time of year, too much ${randomWeather}`);	
	}
	
	
}


generateMessage();	



/* Tests
	for (let i = 0; i < 1000; i++) {
		generateMessage();	
	}
*/
