let  itemPrice = [250, 645, 300, 900, 50]

console.log(`The Price Before the Discount = ${itemPrice}`)

let disc = 0; 


for (let dis of itemPrice) {
    discount = dis * 0.01;
    itemPrice[disc] = itemPrice[disc] - discount;
    console.log(`Value after discount = ${itemPrice[disc]}`);
    discount++;
}
