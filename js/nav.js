		// 
		// Fix weird bugs with nav based on scroll position. States need to cascade perfectly.  
		//
		// Things are in order of thier animation.
		//

		// This adds the .white_active class to the '4K' nav button. 
		new ScrollMagic.Scene({triggerElement: "#resolution", triggerHook: "onCenter", duration: "50%"})
						.setClassToggle("#nav_4k", "white_active")
						.addIndicators({name: "white_active", colorStart: "rgba(102, 102, 102, 0.8)", colorEnd: "rgba(102, 102, 102, 0.8)", colorTrigger: "rgba(102, 102, 102, 0.8)"})
						.offset(-50)
						.addTo(controller);

		// This assigns the .white_non class to all the nav buttons when the 4K button becomes active (still white)
		new ScrollMagic.Scene({triggerElement: "#resolution", triggerHook: "onCenter", duration: "50%"})
						.setClassToggle(".ghost", "white_non")
						.addIndicators({name: "white_non", colorStart: "rgba(102, 102, 102, 0.8)", colorEnd: "rgba(102, 102, 102, 0.8)", indent: 115})
						.offset(-50)
						.addTo(controller);

		// This assigns the .black_non class to all the nav buttons when the nav turns black.
		new ScrollMagic.Scene({triggerElement: "#resolution", triggerHook: "onLeave"})
						.setClassToggle(".ghost", "black_non")
						.addIndicators({name: "black_non", colorStart: "rgba(102, 102, 102, 0.8)", colorTrigger: "rgba(102, 102, 102, 0.8)"})
						.offset(-100)
						.addTo(controller);

		// This makes the header bar hide 
		new ScrollMagic.Scene({triggerElement: "#resolution", triggerHook: "onLeave"})
						.setClassToggle("#test", "hide")
						.addIndicators({name: "hide", indent: 420, colorStart: "rgba(102, 102, 102, 0.8)"})
						.offset(-100)
						.addTo(controller);

		// This sets the .black_active class according to what section is currently on the screen.
		new ScrollMagic.Scene({triggerElement: "#edit", triggerHook: "onCenter", duration: 100})
						.setClassToggle("#nav_4k", "gap")
						.addIndicators({name: "4k Gap", indent: 60, colorStart: "rgba(102, 102, 102, 0.8)", colorEnd: "rgba(102, 102, 102, 0.8)"})
						.offset(-100)
						.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#edit", triggerHook: "onCenter", duration: "100%"})
						.setClassToggle("#nav_edit", "black_active")
						.addIndicators({name: "Edit active", colorStart: "rgba(102, 102, 102, 0.8)", colorEnd: "rgba(102, 102, 102, 0.8)"})
						.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#stills", triggerHook: "onCenter", duration: "100%"})
						.setClassToggle("#nav_stills", "black_active")
						.addIndicators({name: "Stills active", colorStart: "rgba(102, 102, 102, 0.8)", colorEnd: "rgba(102, 102, 102, 0.8)"})
						.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#webpage", triggerHook: "onCenter", duration: "100%"})
						.setClassToggle("#nav_webpage", "black_active")
						.addIndicators({name: "Webpage active", colorStart: "rgba(102, 102, 102, 0.8)", colorEnd: "rgba(102, 102, 102, 0.8)"})
						.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#book", triggerHook: "onCenter", duration: "100%"})
						.setClassToggle("#nav_book", "black_active")
						.addIndicators({name: "Book active", colorStart: "rgba(102, 102, 102, 0.8)", colorEnd: "rgba(102, 102, 102, 0.8)", indent: 30})
						.addTo(controller);

		// This changes the font color on the nav
		new ScrollMagic.Scene({triggerElement: "#resolution", triggerHook: "onLeave"})
						.setClassToggle("a", "black")
						.addIndicators({name: "text black", indent: 206, colorStart: "rgba(102, 102, 102, 0.8)"})
						.offset(-100)
						.addTo(controller);

		// This changes the logo color 
		new ScrollMagic.Scene({triggerElement: "#resolution", triggerHook: "onLeave"})
						.setClassToggle(".cls-2", "murder")
						.addIndicators({name: "black logo", indent: 102, colorStart: "rgba(102, 102, 102, 0.8)"})
						.offset(-100)
						.addTo(controller);

		// This changes the .active class on the 4K nav button from white to black. 
		new ScrollMagic.Scene({triggerElement: "#resolution", triggerHook: "onLeave", duration: "50%"})
						.setClassToggle("#nav_4k", "black_active")
						.addIndicators({name: "black_active", indent: 305, colorStart: "rgba(102, 102, 102, 0.8)", colorEnd: "rgba(102, 102, 102, 0.8)"})
						.offset(-100)
						.addTo(controller);
