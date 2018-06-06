// init controller
var controller = new ScrollMagic.Controller({});

// build scenes
new ScrollMagic.Scene({triggerElement: "#resolution"})
				.setClassToggle("#res-id", "res-class")
				.offset(-50)
				.addTo(controller);