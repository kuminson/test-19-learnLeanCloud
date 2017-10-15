let APP_ID = 'E1tdtMXPl1dhn36xlLxVYJMk-gzGzoHsz';
let APP_KEY = 'yF2RQ8kWLsAWDijlVYgDMPt7';

var AV = require('leancloud-storage');

AV.init({
	appId: APP_ID,
	appKey: APP_KEY
});
console.log(v2Domain);

// var exec = require('child_process').exec;
// exec('ping {{v2Domain}}',function(err,stdout,stderr){
//     console.log(stdout);
// });