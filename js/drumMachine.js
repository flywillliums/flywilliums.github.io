 		const playSound = e => {
			console.log("keypressed")
			const keyCode = e.keyCode,
				keyElement = document.querySelector(`div[data-key="${keyCode}"]`);
			console.log(keyCode)
			switch(keyCode){
				case 70:
					playKick();
					break;
				case 71:
					playSnare();
					break;
				case 72:
					playHat();
					break;
				case 74:
					playOpenHat();
					break;
			}
		}

		const playSnare = a => {
			play("#snareButton");
			const snare = document.querySelector("#snare");	
			snare.currentTime=0;
			snare.play();
		}

		const playKick = b => {
			play("#kickButton");
			const kick = document.querySelector("#kick");
			kick.currentTime=0;
			kick.play();
		}

		const playHat = c => {
			play("#hatButton");
			const hat = document.querySelector("#hat");	
			hat.currentTime=0;
			hat.play();
		}

		const playOpenHat = c => {
			play("#openHatButton");
			const openHat = document.querySelector("#openHat");	
			openHat.currentTime=0;
			openHat.play();
		}

		function play(drumId) {
			console.log("runningplay")
			document.querySelector(drumId).className= "drumButton";
			window.requestAnimationFrame(function(time) {
			  window.requestAnimationFrame(function(time) {
				document.querySelector(drumId).className = "drumButton animation";
			  });
			});
		  }


		window.addEventListener('keydown', playSound);
	