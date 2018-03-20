		// 
		// This needs a controller.
		//

		// init controller

		// build scenes
		new ScrollMagic.Scene({triggerElement: "#edit", triggerHook: "onEnter"})
						.setClassToggle("#test", "hide")
						.addIndicators({name: "Add .hide class"})
						.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#resolution", triggerHook: "onCenter", duration: "100%"})
						.setClassToggle("#nav_4k", "active")
						.addIndicators()
						.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#edit", triggerHook: "onCenter", duration: "100%"})
						.setClassToggle("#nav_edit", "active")
						.addIndicators()
						.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#stills", triggerHook: "onCenter", duration: "100%"})
						.setClassToggle("#nav_stills", "active")
						.addIndicators()
						.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#webpage", triggerHook: "onCenter", duration: "100%"})
						.setClassToggle("#nav_webpage", "active")
						.addIndicators()
						.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#book", triggerHook: "onCenter", duration: "100%"})
						.setClassToggle("#nav_book", "active")
						.addIndicators()
						.addTo(controller);

