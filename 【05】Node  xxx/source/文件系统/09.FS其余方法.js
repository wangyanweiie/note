// FS其他文件方法
/*-----------------------------
 * 验证文件路径是否存在
    -  fs.existsSync(path)
    
* 获取文件信息:返回一个对象,返回的对象中保存了当前对象的相关信息;
    - fs.statSync(path)
    - fs.stat(path,callback(err,stats){})
        stats.size          文件大小
        stats.isFile()        是否是一个文件
        stats.isDirectory()   是否是一个文件夹/目录

* 删除文件
    - fs.unlink(path,callback(err){})
    - fs.unlinkSync(path)

* 列出文件
    – fs.readdir(path, [options], callback(err,files){})
    – fs.readdirSync(path, [options])

* 截断文件：将当前文件修改文指定大小
    – fs.truncate(path, len, callback)
    – fs.truncateSync(path, len)

* 监视文件更改：fs.watchFile(filename, [options], listener(curr,prev){})
    - options：{interval:1000}    可以修改监听的频率
    - listener(curr,prev)   回调函数：文件发生变化时执行;
        curr    修改后文件状态（stats对象,可以使用size isFiles等方法）
        prev    修改后文件状态（stats对象,可以使用size isFiles等方法）

* 建立目录
    – fs.mkdir(path, [mode], callback)
    – fs.mkdirSync(path, [mode])

* 删除目录
    – fs.rmdir(path, callback)
    – fs.rmdirSync(path)

* 重命名文件和目录（剪切）
    – fs.rename(oldPath, newPath, callback)
    – fs.renameSync(oldPath, newPath)

* 复制目录: fs.cp('源路径', '目标路径', [options], callback)
    – options: { recursive: true }  拷贝整个目录，包括子目录
    – callback(err) 回调函数
 -------------------------------------------------------------------*/

//验证文件是否存在
var fs = require("fs");
var exist = fs.existsSync("Hi.txt");
console.log(exist);

//获取文件信息
fs.statSync("Hi.mp3", function (err, stats) {
  if (!err) {
    console.log(stats);
    console.log(stats.size);
    console.log(stats.isFile());
  }
});

//删除文件
//fs.unlinkSync("Hi.txt");

//列出文件
fs.readdir(".", function (err, files) {
  if (!err) {
    console.log(files);
  }
});

//监视文件修改
fs.watchFile("Hi.txt", { interval: 1000 }, function (curr, prev) {
  console.log("修改前文件大小" + prev.size);
  console.log("修改后文件大小" + curr.size);
});
