var orm = require("orm");
var opts = {
  database : "top",
  protocol : "mysql",
  host     : "127.0.0.1",
  port     : 3306,         // optional, defaults to database default
  user     : "root",
  password : "123",
  query    : {
    pool     : true,   // optional, false by default
    debug    : false,   // optional, false by default
    strdates : false   // optional, false by default
  }
};

describe('ORM', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present',function(done){
    	orm.connect("mysql://root:123@localhost/top", function(err, db) {
    		var User=db.define('user', {
			    name: String,
			    age: Number,
				id:Number
			},{
	        methods: {
	            fullName: function () {
	                return this.name + ' ' + this.age;
	            }
	        }});
		//同步User表
			User.sync(function (err) {
			    console.log("done!");
			});
			//也可以使用db.sync()同步所有表
			
		var Person = db.define('person', {
		    name : String
		});
		var Animal = db.define('animal', {
		    name : String
		});
		Animal.hasOne("owner", Person); // creates column 'owner_id' in 'animal' table
		
		// get animal with id = 123
		Animal.get(123, function (err, animal) {
		    // animal is the animal model instance, if found
			if(!animal)return;
		    animal.getOwner(function (err, person) {
		        // if animal has really an owner, person points to it
		    });
		});	
			
			
			
		//插入数据
		/*User.create([{
		    name: 'a',
		    age:28
		}, {
		    name: 'b',
		    age:25
		}], function(err, items) {
		   done();
		});*/
		//查找数据
		User.find({})
		    .limit(3)
		    //.offset(2)
		    .run(function(err, data) {
		    	console.log(data[0].name);
		    	console.log(data[0].age);
		    	data[0].name="好人";
		    	data[0].age=111;
		    	data[0].save(function(err) {
				    console.log("done!");
				    done();
				});
		    //非常漂亮的链式风格有木有~~~
		    //查询name为admin的用户，跳过前2个，保留3个结果而且只需要返回name和email字段
		});
		//更新、删除数据
		//更新db只需调用save即可
		/*SomeOne.save(function(err) {
		    console.log("done!");
		});
		//删除
		SomeOne.remove(function(err) {
		    console.log("done!");
		});*/
		//上面的SomeOne实例必须包含了uuid属性。
    	});
    })
  })
})