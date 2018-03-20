		// This SHOULD change the .active class to the .blacktive class. Fingers fucking crossed bruh.

		new ScrollMagic.Scene({triggerElement: "#video", triggerHook: "onLeave"})
						.setClassToggle(".active", "blacktive")
						.addIndicators()
						.addTo(controller);