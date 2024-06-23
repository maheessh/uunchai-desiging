const amazonProduct = {
    itemName : "Parker Jotter Standard CT Ball Pen (Black)",
    rateUser: 7002,
    label: "Deal of the Day.",
    price: 270,
    discount: "5% Off"
}

amazonProduct.rateUser = amazonProduct.rateUser + 1
console.log(amazonProduct)


const Profile = {
    profileUser: "Mahesh Pandit",
    postCount: 195,
    ifFollow: true,
    title: "Microsoft Intern"
}

Profile.postCount = Profile.postCount + 3;
console.log(Profile);


let age = 19;
if (age > 18) {
    console.log("Age is match, you can vote");
}else{
    console.log("You cannot vote, sorry!")
}


let name = prompt("Enter any Number");

if (name%5 == 0) {
    console.log('The number is multiple of 5');
}else{
    console.log("It is not");
}


let score = prompt("Enter the student score from 0-100");

if (score >= 85 && score <= 100) {
    console.log("Grade A");
}else if (score >= 70 && score <= 89) {
    console.log("Grade B");
}else if (score >= 60 && score <= 69) {
    console.log("Grade C");
}else if (score >= 50 && score <= 59) {
    console.log("Grade D");
}else {
    console.log("Fail");
}


let sum = 0;
for (let i =1 ; i<=5 ; i++) {
    sum = sum + i; 
}
console.log(sum)