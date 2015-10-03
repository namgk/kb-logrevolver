var fs = require("fs"); //Load the filesystem module

var error = 0;
var timer;

function revolveLog(){
	try {
		var stats = fs.statSync(process.argv[2]);
		var fileSizeInBytes = stats["size"];
		if (fileSizeInBytes >= 1000000*5){//5MB
			var date = new Date();
		  var year = date.getFullYear();
		  var month = date.getMonth() + 1;
		  var day = date.getDate();
		  var hour = date.getHours();
		  var minute = date.getMinutes();
		  var sec = date.getSeconds();

		  var logSuffice = '_' + year + '-' + month + '-' + day + '_' +
		    hour + '-' + minute;

			fs.rename(process.argv[2], process.argv[2] + logSuffice, function(err) {
		    if ( err ) console.log('ERROR: ' + err);
		    try {
		      fs.appendFile(process.argv[2], process.argv[2] + logSuffice + ' Created!\n', function(err){
		        if (err !== null) console.log('Invalid log file (' + logger.file + ')!')
		      });
		    } catch (e){
		      console.log('Invalid log file (' + process.argv[2] + ')!');
		    }
			});
		}
	} catch (e){
		console.log(e);
		console.log("Usage: node index.js <log_file_to_watch>")
		error++;
	}
	if (error >= 5)
		clearTimeout(timer);
	else
		timer = setTimeout(revolveLog, 1000*60*30);//30min
}

revolveLog();	