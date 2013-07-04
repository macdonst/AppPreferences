# Application Preferences plugin for Phonegap #
Originally by Simon MacDonald (@macdonst), ported to plugman and some other cleanup by Dan Moore (@mooreds)

Information on writing plugins for PhoneGap 2.0 was taken from [this blog](http://simonmacdonald.blogspot.com/2012/08/so-you-wanna-write-phonegap-200-android.html) by Simon MacDonald (@macdonst)

## Install

This plugin uses [plugman](https://github.com/apache/cordova-plugman)

`cordova plugins add https://github.com/8zrealestate/AppPreferences`

## Using the plugin ##

There will be a window.applicationPreferences object defined after the plugin is installed.

The `applicationPreferences` object created above will be used in the following examples.

### get ###

In order to get the value a property you would call the get method.

    /**
      * Get the value of the named property.
      *
      * @param key           
      */
    get(key, success, fail)

Sample use:

    window.applicationPreferences.get("myKey", function(value) {
			alert("Value is " + value);
		}, function(error) {
			alert("Error! " + JSON.stringify(error));
	});

### set ###

In order to set the value a property you would call the set method.

    /**
      * Set the value of the named property.
      *
      * @param key
      * @param value           
      */
    set(key, value, success, fail)

Sample use:

    window.applicationPreferences.set("myKey", "myValue", function() {
			alert("Successfully saved!");
		}, function(error) {
			alert("Error! " + JSON.stringify(error));
	});


### remove ###

In order to remove a key along with the value, you would call the remove method.

    /**
	  * Remove the key along with the value
	  *
	  * @param key      
      */
     remove(key, success, fail)

Sample use:

		window.applicationPreferences.remove("myKey", function(value) {
			alert("Value removed!");
		}, function(error) {
			alert("Error! " + JSON.stringify(error));
		});

### clear ###

In order to remove all shared preferences, you would call the clear method.

     /**
	  * Clear all shared preferences
	  *	       
	  */
     clear(success, fail)

Sample use:

		window.applicationPreferences.clear(function() {
			alert("Cleared all preferences!");
		}, function(error) {
			alert("Error! " + JSON.stringify(error));
		});

### load ###

In order to get all the properties you can call the load method. The success callback of the load method will be called with a JSONObject which contains all the preferences.

    /**
      * Get all the preference values.
      *
      */
    load(success, fail)

Sample use:

    window.applicationPreferences.load(function(prefs) {
			alert(JSON.stringify(prefs));
		}, function() {
			alert("Error! " + JSON.stringify(error));
	});

### show ###

If you want to load the PreferenceActivity of your application that displays all the preferences you can call the show method with the class name.

    /**
      * Get all the preference values.
      *
      */
    show(activity, success, fail)

Sample use:
    
    function showPreferenceActivity() {
		window.applicationPreferences.show("com.ranhiru.apppreferences.PreferenceActivity", function() {
			alert("Showing Preferences Activity!");
		}, function(error) {
			alert("Error! " + JSON.stringify(error));
		});
	  }
	
