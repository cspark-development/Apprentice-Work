/*
1. Create the class below:

| Book |
|--- |
| string title |
| string author |
| number[] ratings |
| --- |
| addRating(rating: number) : void |
| averageRating() : number |

2. Properties
- `title` and `author` are passed to the `constructor` as arguments.
- `ratings` is initialized as an empty array.
3. Methods
- `addRating(rating)` adds the `rating` to the book's array of `ratings`
- `averageRating()` calculates and returns the average number of the `ratings` array
4. Run your code
5. Test your code
*/
// Write your code here
class Book {
	constructor(title, author) {
		this.title = title;
		this.author = author;
		this.ratings = [];
	}
	addRating(rating) {
		this.ratings.push(rating);
	}
	averageRating() {
		let sum = 0;
		for (let rating of this.ratings) {
			sum += rating;
		}
		return sum / this.ratings.length;
	}
}

// DO NOT EDIT CODE BELOW
module.exports = Book;
