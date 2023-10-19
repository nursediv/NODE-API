/* global use, db */
// MongoDB Product and Category Data 
//TEMPLATE USED FROM MONGODB EXTENSION
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('Marketplace');

// Insert a few documents into the sales collection.
db.getCollection('Products').insertMany([
  { 'name': 'shirt', 'description': 'Black t-shirt', 'price': 20, 'quantity': 9, 'category': 'Women' },
  { 'name': 'pants', 'description': 'white pants(flare)', 'price': 30, 'quantity': 6, 'category': 'Women' },
  { 'name': 'dress', 'description': 'red dress (mini) ', 'price': 78, 'quantity': 5, 'category': 'Women' },
  { 'name': 'dress', 'description': 'green bodycon', 'price': 200, 'quantity': 6, 'category': 'Women' },
  { 'name': 'bodysuit', 'description': 'Black lace body suit', 'price': 120, 'quantity': 7, 'category': 'Women' },
  { 'name': 'socks', 'description': '5 pack white ankle socks', 'price': 30, 'quantity': 8, 'category': 'Women' },
  { 'name': 'bodysuit', 'description': 'red lace body suit', 'price': 40, 'quantity': 9, 'category': 'Women' },
  { 'name': 'jeans', 'description': 'denim jeans', 'price': 70, 'quantity': 9, 'category': 'Men' },
  { 'name': 'shirt', 'description': 'Black t-shirt', 'price': 60, 'quantity': 8, 'category': 'Men' },
  { 'name': 'underwear', 'description': '5 pack boxers', 'price': 30, 'quantity': 8, 'category': 'Men' },
  { 'name': 'under shirt', 'description': '3 pack white under shirt', 'price': 30, 'quantity': 8, 'category': 'Men' },
  { 'name': 'underwear', 'description': '5 pack briefs', 'price': 30, 'quantity': 8, 'category': 'Men' },
  { 'name': 'jeans', 'description': 'black ripped jean', 'price': 30, 'quantity': 80, 'category': 'Men' },
  { 'name': 'socks', 'description': '8 pack multicolour long socks', 'price': 10, 'quantity': 8, 'category': 'Men' },
  { 'name': 'socks', 'description': '6 pack athletic sock', 'price': 70, 'quantity': 9, 'category': 'Teen' },
  { 'name': 'shirt', 'description': 'purple t-shirt', 'price': 60, 'quantity': 10, 'category': 'Teen' },
  { 'name': 'hoodie', 'description': 'graphic print sweater', 'price': 30, 'quantity': 8, 'category': 'Teen' },
  { 'name': 'shoes', 'description': 'high top converse', 'price': 110, 'quantity': 8, 'category': 'Teen' },
  { 'name': 'shoes', 'description': 'white sneakers', 'price': 130, 'quantity': 5, 'category': 'Teen' },
  { 'name': 'shoes', 'description': 'brown timberlands', 'price': 130, 'quantity': 8, 'category': 'Teen' },
  { 'name': 'shoes', 'description': 'black ugg boots', 'price': 100, 'quantity': 8, 'category': 'Teen' },

]);

// Run a find command to view Teen items
const Teens = db.getCollection('Products').find({
  category: { $gte: new (Teens)}
}).count();

// Print a message to the output window.
console.log(`${Teens} products.`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
db.getCollection('Products').aggregate([
  // Find all of the Products that occurred in 2014.
  { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
  // Group the total Products for each product.
  { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
]);
