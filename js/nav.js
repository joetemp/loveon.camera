		// 
		// This needs a controller.
		//

		// init controller
		var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

		// build scenes
		var scene = new ScrollMagic.Scene({triggerElement: "#edit"})
						.setClassToggle("#test", "hide")
						.addIndicators({name: "Add .hide class"})
						.addTo(controller);