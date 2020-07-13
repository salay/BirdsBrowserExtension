document.addEventListener('DOMContentLoaded', function(){
    const bg = chrome.extension.getBackgroundPage()
	//object.keys is an array of the keys in the birds variable
	//(each key is the url and each value is the count of birds)
	//forEach iterates through each key (each url) and passes the key to the closure
	//and you can get the count from the object b/c you have the key (the url) associated with that count
    Object.keys(bg.birds).forEach(function (url) {
		const div = document.createElement('div')
		div.textContent = `${url}: ${bg.birds[url]}`
		document.body.appendChild(div)
	})

	
	// document.getElementById('countEmBirds').addEventListener(
    //     'click',
    //     function clickBirdCounter(){
    //         chrome.tabs.query({
    //                 currentWindow: true, 
    //                 active: true
    //             },
    //             function sendBird(tabs) {
    //                 chrome.tabs.sendMessage(tabs[0].id, 'bird sent', setBirdCount)
	// 			})
				
	// 		function setBirdCount (birdCountInitResp) {
	// 			console.log("birdCountInitResp", birdCountInitResp)
	// 			const div = document.createElement('div')
	// 			div.textContent = `${birdCountInitResp.count} birds`
	// 			document.body.appendChild(div)
	// 		}
			
	}, false)
