// init controller
var controller = new ScrollMagic.Controller({});

// build scenes
new ScrollMagic.Scene({triggerElement: "#resolution"})
				.setClassToggle("#altar", "appear")
				.offset(-50)
				.addTo(controller);