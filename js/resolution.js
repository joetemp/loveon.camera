// init controller
var controller = new ScrollMagic.Controller({});

// build scenes
new ScrollMagic.Scene({triggerElement: "#resolution"})
				.setClassToggle("#blue", "appear")
				.offset(-50)
				.addTo(controller);