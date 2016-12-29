var app = angular.module("app", ["pascalprecht.translate"]).config(function($translateProvider) {
	$translateProvider.translations("en_US", {
		username: "Username",
		password: "Password",
		re_password: "Retype password",
		dashboard: "Dashboard",
		add: "Add",
		edit: "Edit",
		
		hash: "Unique ID",
		hash_description: "The Unique ID (UID) that is present on the backside of the sensor",
		name: "Name",
		name_description: "A name for the Sensor, to later easily identify it",
		
		about_description_title: "About Bartiméus",
		about_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet quam sit amet diam convallis, ut mollis lacus scelerisque. Maecenas sit amet lorem vitae velit vulputate elementum eget vel odio. In ac bibendum ex. Nulla facilisi.",
		project_description_title: "About the project",
		project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet quam sit amet diam convallis, ut mollis lacus scelerisque. Maecenas sit amet lorem vitae velit vulputate elementum eget vel odio. In ac bibendum ex. Nulla facilisi.",
		app_description_title: "About the app",
		app_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet quam sit amet diam convallis, ut mollis lacus scelerisque. Maecenas sit amet lorem vitae velit vulputate elementum eget vel odio. In ac bibendum ex. Nulla facilisi.",
		
		logged_out: "You're logged out",
		click_logout: "Click here to logout",
		click_login: "Click here to login",
		login_error: "Invalid username or password",
		no_account: "Don't have an account?",
		create_account: "Create one now!",
		
		manage_app: "Manage Application",
		manage_sensor: "Manage Sensors",
		manage_not: "Manage Notifications",
		
		login_button: "Login",
		create_button: "Create",
		add_sensor: "Configure a sensor",
		new_sensor: "Add the sensor",
		edit_sensor: "Edit the sensor",
		
		create_title: "Create account",
		login_title: "Login",
		logout_title: "Logout",
		user_title: "User",
		home_title: "Home",
		about_title: "About",
		privacy_title: "Privacy",
		terms_title: "Terms",
	});
	
	$translateProvider.translations("nl_NL", {
		username: "Gebruikersnaam",
		password: "Wachtwoord",
		re_password: "Hertyp wachtwoord",
		add: "Toevoegen",
		edit: "Veranderen",
		
		hash: "Unieke ID",
		hash_description: "De Unieke ID (UID) die op de achterkant van de sensor staat",
		name: "Naam",
		name_description: "Een naam voor de Sensor, om later makkelijk terug te zien over welke Sensor het precies gaat",
		
		about_description_title: "Over Bartiméus",
		about_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet quam sit amet diam convallis, ut mollis lacus scelerisque. Maecenas sit amet lorem vitae velit vulputate elementum eget vel odio. In ac bibendum ex. Nulla facilisi.",
		project_description_title: "Over het project",
		project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet quam sit amet diam convallis, ut mollis lacus scelerisque. Maecenas sit amet lorem vitae velit vulputate elementum eget vel odio. In ac bibendum ex. Nulla facilisi.",
		app_description_title: "Over de app",
		app_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet quam sit amet diam convallis, ut mollis lacus scelerisque. Maecenas sit amet lorem vitae velit vulputate elementum eget vel odio. In ac bibendum ex. Nulla facilisi.",
		
		dashboard: "Dashboard",
		logged_out: "U bent uitgelogd",
		click_logout: "Klik hier om uit te loggen",
		click_login: "Klik hier om in te loggen",
		login_error: "Ongeldioge gebruikersnaam of wachtwoord",
		no_account: "Heeft u nog geen account?",
		create_account: "Maak er dan nu één aan!",
		
		manage_app: "Beheer Applicaties",
		manage_sensor: "Beheer Sensoren",
		manage_not: "Beheer Notificaties",
		
		login_button: "Inloggen",
		create_button: "Creëer uw account",
		add_sensor: "Configureer een sensor",
		new_sensor: "Voeg de nieuwe sensor toe",
		edit_sensor: "Verander de sensor",
		
		create_title: "Creëer een account",
		login_title: "Inloggen",
		logout_title: "Uitloggen",
		user_title: "Gebruiker",
		home_title: "Home",
		about_title: "Over",
		privacy_title: "Privacy",
		terms_title: "Voorwaarden",
	});
	
    var language = window.localStorage.getItem("language") || "nl_NL";
    $translateProvider.use(language);
});

app.run(function($rootScope) {
	var language = window.localStorage.getItem("language") || "nl_NL";
	$rootScope.LANG = language;
});