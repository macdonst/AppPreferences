# Application Preferences plugin for Phonegap #
Originally by Simon MacDonald (@macdonst), ported to plugman and some other cleanup by Dan Moore (@mooreds).  Dan Moore also pulled in the iOS code, written by Tue Topholm / Sugee

Information on writing plugins for PhoneGap 2.0 was taken from [this blog](http://simonmacdonald.blogspot.com/2012/08/so-you-wanna-write-phonegap-200-android.html) by Simon MacDonald (@macdonst)

This code only supports Phonegap/Cordova 2.9.  If you want to have support for 3.0 or greater, check out [this repository](https://github.com/chrisekelley/AppPreferences/).

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


