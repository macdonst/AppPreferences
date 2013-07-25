function applicationPreferences() {}

applicationPreferences.prototype.get = function(key,success,fail) 
{
    var args = {};
    args.key = key;
    cordova.exec(success,fail,"applicationPreferences","getSetting",[args]);
};

applicationPreferences.prototype.set = function(key,value,success,fail) 
{
    var args = {};
    args.key = key;
    args.value = value;
    cordova.exec(success,fail,"applicationPreferences","setSetting",[args]);
};

	module.exports = new applicationPreferences();

