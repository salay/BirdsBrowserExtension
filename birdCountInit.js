// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
// 	const birdCount = new RegExp('bird', 'gi')
// 	const birdMatches = document.documentElement.innerText.match(birdCount)
//     const bird_count = birdMatches ? birdMatches.length : 0
//     sendResponse({count: bird_count})
// 	console.log("request: ", request)
// 	console.log("sender: ", sender)
// })

const birdCount = new RegExp('bird', 'gi')
const birdMatches = document.documentElement.innerText.match(birdCount)
const bird_count = birdMatches ? birdMatches.length : 0
chrome.runtime.sendMessage({
	url: window.location.href,
	count: bird_count
})    