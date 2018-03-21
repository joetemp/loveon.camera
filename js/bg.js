// init controller
var controller = new ScrollMagic.Controller({});

// build scenes
new ScrollMagic.Scene({triggerElement: "#video", triggerHook: "onEnter", duration: "200%"})
				.setTween("#video > video", {y: "80%", ease: Linear.easeNone})
				.addIndicators({name: "video"})
				.addTo(controller);