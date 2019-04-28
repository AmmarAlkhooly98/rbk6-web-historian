var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {// done
  fs.readFile(exports.paths.list,'utf8', ( err, data )=> {
    var res = data.toString().split('\n');
    callback(res);
  });
};

exports.isUrlInList = function(url, callback) {
  fs.readFile(exports.paths.list,'utf8', (err, data)=> {
    var res = data.toString().split('\n'); 
    var flag = false;
    for (let i = 0; i < res.length; i++) {
      if (url === res[i]){
        flag = true;
      }
    }
    // console.log(data); 
    callback(flag);//(data.includes(url))
  })
};

exports.addUrlToList = function(url, callback) {
  fs.appendFile(exports.paths.list, url, (err)=>{});
  callback();
};

exports.isUrlArchived = function(url, callback) {
  fs.readdir(exports.paths.archivedSites,'utf8', (err, file)=>{
    callback(file.includes(url));
  })
};

exports.downloadUrls = function(urls) {
  // var res = urls;
  for (let i = 0; i < urls.length; i++) {

    fs.writeFile('test/testdata/sites/',urls[i],(er)=>{console.log(er)})
    // urls.write(req);
  }
  // for (var i = 0; i < urls.length; i++) {
      // fs.mkdir(exports.paths.archivedSites,urls.toString('utf8'),(er,data)=>{
      //  console.log(urls[1])
      // });
      // console.log(urls[i])
  // }

  // fs.readdir(exports.paths.archivedSites,'utf8',(err,data)=>{
    // for (var i = 0; i < urls.length; i++) {
    //   if (!data.includes(urls[i])) {
    //     data.push(urls[i]);
    //   }
    // }
    // console.log(data);
  // });
};
this.downloadUrls(['www.example.com', 'www.google.com']);
