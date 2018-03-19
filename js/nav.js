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
						.setClassToggle("#res_button", "active")
						.addIndicators()
						.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#edit", triggerHook: "onLeave", duration: "100%"})
						.setClassToggle("#edit_button", "active")
						.addIndicators()
						.addTo(controller);
