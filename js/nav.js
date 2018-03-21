		// 
		// Fix weird bugs with nav based on scroll position. States need to cascade perfectly.  
		//
		// Things are in order of thier animation.
		//

		// This adds the .white_active class to the '4K' nav button. 
		new ScrollMagic.Scene({triggerElement: "#resolution", triggerHook: "onCenter", duration: "100%"})
						.setClassToggle("#nav_4k", "white_active")
						.addIndicators()
						.offset(-50)
						.addTo(controller);

// This is a test
		new ScrollMagic.Scene({triggerElement: "#resolution", triggerHook: "onCenter", duration: "100%"})
						.setClassToggle(".ghost", "white_non")
						.addIndicators()
						.offset(-50)
						.addTo(controller);

// This is also a test. 
		new ScrollMagic.Scene({triggerElement: "#resolution", triggerHook: "onLeave"})
						.setClassToggle(".ghost", "black_non")
						.addIndicators()
						.offset(-100)
						.addTo(controller);

		// This makes the header bar hide 
		new ScrollMagic.Scene({triggerElement: "#resolution", triggerHook: "onLeave"})
						.setClassToggle("#test", "hide")
						.addIndicators({name: "Add .hide class"})
						.offset(-100)
						.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#edit", triggerHook: "onCenter", duration: "100%"})
						.setClassToggle("#nav_edit", "black_active")
						.addIndicators()
						.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#stills", triggerHook: "onCenter", duration: "100%"})
						.setClassToggle("#nav_stills", "black_active")
						.addIndicators()
						.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#webpage", triggerHook: "onCenter", duration: "100%"})
						.setClassToggle("#nav_webpage", "black_active")
						.addIndicators()
						.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#book", triggerHook: "onCenter", duration: "100%"})
						.setClassToggle("#nav_book", "black_active")
						.addIndicators()
						.addTo(controller);

		// This changes the font color on the nav
		new ScrollMagic.Scene({triggerElement: "#resolution", triggerHook: "onLeave"})
						.setClassToggle("a", "black")
						.addIndicators()
						.offset(-100)
						.addTo(controller);

		// This changes the logo color 
		new ScrollMagic.Scene({triggerElement: "#resolution", triggerHook: "onLeave"})
						.setClassToggle(".heart", "murder")
						.addIndicators()
						.offset(-100)
						.addTo(controller);

		// This changes the .active class on the 4K nav button from white to black. 
		new ScrollMagic.Scene({triggerElement: "#resolution", triggerHook: "onLeave", duration: "50%"})
						.setClassToggle("#nav_4k", "black_active")
						.addIndicators()
						.offset(-100)
						.addTo(controller);

		// This makes sure the :hover state is correct on the nav once it goes dark.
		new ScrollMagic.Scene({triggerElement: "#resolution", triggerHook: "onLeave"})
						.setClassToggle(".ghost", "dark")
						.addIndicators()
						.addTo(controller);
