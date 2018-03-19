		// 
		// This needs a controller.
		//

		// init controller

		// build scenes
		new ScrollMagic.Scene({triggerElement: "#edit", triggerHook: "onEnter"})
						.setClassToggle("#test", "hide")
						.addIndicators({name: "Add .hide class"})
						.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#resolution", triggerHook: "onLeave", duration: "100%"})
						.setClassToggle("#waldo", "active")
						.addIndicators()
						.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#edit", triggerHook: "onLeave", duration: "100%"})
						.setClassToggle("#fuck", "active")
						.addIndicators()
						.addTo(controller);
