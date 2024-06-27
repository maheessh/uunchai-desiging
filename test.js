let  itemPrice = [250, 645, 300, 900, 50]

console.log(`The Price Before the Discount = ${itemPrice}`)

let disc = 0; 


for (let dis of itemPrice) {
    discount = dis * 0.01;
    itemPrice[disc] = itemPrice[disc] - discount;
    console.log(`Value after discount = ${itemPrice[disc]}`);
    discount++;
}


let veggies = ['chowchow', 'apple', 'litchi', 'tomatoes'];

console.log(veggies)
veggies.push('Mahesh');
console.log(veggies)

veggies.pop()
console.log(veggies)


console.log(veggies.toString())


let mix = itemPrice.concat(veggies);
console.log(mix)


veggies.unshift('Aalu')
console.log(veggies)


console.log(veggies.slice(1,3))