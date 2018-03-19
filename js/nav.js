		// 
		// This needs a controller.
		//

		// init controller
		new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

		// build scenes
		new ScrollMagic.Scene({triggerElement: "#edit"})
						.setClassToggle("#test", "hide")
						.addIndicators({name: "Add .hide class"})
						.addTo(controller);