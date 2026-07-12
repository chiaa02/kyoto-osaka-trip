window.onload = function () {
	var navigation = document.getElementById("navigation");

	// Stop if the navigation menu does not exist
	if (!navigation) {
		return;
	}

	// Create the mobile menu button
	var mobileButton = document.createElement("span");
	mobileButton.setAttribute("id", "mobile-navigation");

	navigation.parentNode.insertBefore(mobileButton, navigation);

	// Open and close the mobile navigation
	mobileButton.onclick = function () {
		if (navigation.style.display === "block") {
			navigation.style.display = "";
			mobileButton.style.backgroundImage =
				"url(images/mobile-menu.png)";
		} else {
			navigation.style.display = "block";
			mobileButton.style.backgroundImage =
				"url(images/mobile-close.png)";
		}
	};

	// Add submenu buttons only if a menu item has a submenu
	var menuItems = navigation.getElementsByTagName("li");

	for (var i = 0; i < menuItems.length; i++) {
		if (menuItems[i].children.length > 1) {
			var submenuButton = document.createElement("span");

			submenuButton.setAttribute("class", "mobile-submenu");
			submenuButton.setAttribute("data-index", i);

			submenuButton.onclick = function () {
				var index = this.getAttribute("data-index");
				toggleSubmenu(index);
			};

			menuItems[i].appendChild(submenuButton);
		}
	}

	function toggleSubmenu(index) {
		var submenu = menuItems[index].children[1];
		var submenuButton = menuItems[index].lastChild;

		if (submenu.style.display === "block") {
			submenu.style.display = "";
			submenuButton.style.backgroundImage =
				"url(images/mobile-expand.png)";
			submenuButton.style.backgroundColor =
				"rgba(11, 163, 156, 0.7)";
		} else {
			submenu.style.display = "block";
			submenuButton.style.backgroundImage =
				"url(images/mobile-collapse.png)";
			submenuButton.style.backgroundColor =
				"rgba(0, 0, 0, 0.8)";
		}
	}
};