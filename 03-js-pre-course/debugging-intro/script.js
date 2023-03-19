// 1. Start with a headline and some article content
let currentHeadline = "News in the world today"
const currentArticle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquy auctor."

// "is or has" for boolean storing ariables and "amount or number" for integer values
const isFakeNews = false;
const amountOfWords = 957;

// 2. Before we start we need to make sure the headline isn't too long
if(currentHeadline.length > 15) {  //.length is a helper method, giving the length of the string
    currentHeadline = currentHeadline.substring(0, 15) + "..."; //.substring() method to shorten string to assigned length
}

// 3. Show it to the user (in terminal anyway)
console.log("Nology Post 2021")
console.log(`Headline: ${currentHeadline}`)
console.log(currentArticle);

// 4. Example of a meaningful funciton name.. getData() is vague
function getPost() {
    //Get your post in here..
}
