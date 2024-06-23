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