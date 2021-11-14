
var student1 = {id:121, phone:19293, name:"Mahia mahi"};
var student2 = {id:123, phone:18975, name:"Shakib"};

// object theke proparty access korar nioym 3ti

// 1
var phoneNo1 = student1.phone;
// 2
var phoneNo2 = student1["phone"];
// 3
var phonePropName = "phone";
var phoneNo3 = student1[phonePropName];

// object a proparty update korar niyom;
student2.phone = 1584785;

console.log(phoneNo1);
console.log(student2)