var mysql = null;
try {
    mysql = require('mysql');
} catch(err) {
    alert("获取mysql出错");
}
var mysqlConn = mysql.createConnection({
    host     : "106.14.135.234",
    user     : "root",
    password : "root",
    database : "mmall"
});

mysqlConn.connect(function(err) {
    if (err) {
        alert("连接数据库出错");
    }
});
var  sql = 'SELECT * FROM mmall_user';
//查
mysqlConn.query(sql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});