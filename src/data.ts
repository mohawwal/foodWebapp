// import { Food } from "./app/Shared/models/food";
// import { Tag } from "./app/Shared/models/tag";

// export const sample_foods: Food[] = [
//     {
//         id:'1',
//         name: 'Whopper',
//         cookTime: '10-20',
//         price: 10,
//         favorite: false,
//         origins: ['Italy'],
//         stars: 4.5,
//         imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/Whopper-Sandw.jpg',
//         description: 'Our Whopper® Sandwich is a ¼ lb* of savory flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.',
//         tags: ['Creamy', 'Lunch'],
//       },
//       {
//         id:'2',
//         name: 'Steakhouse',
//         price: 20,
//         cookTime: '20-30',
//         favorite: true,
//         origins: ['South Africa', ' - USA'],
//         stars: 4.7,
//         imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/hamburger.jpg',
        
//         description: '',
//         tags: ['Lunch', 'FastFood'],
//       },
//       {
//         id:'3',
//         name: 'Double Whopper',
//         price: 13,
//         cookTime: '2-6',
//         favorite: true,
//         origins: ['Nigeria', ' - USA'],
//         stars: 4.7,
//         imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/08/769_DOUBLE-WHOPPER.jpg',
//         description: 'Our Double Whopper® Sandwich is a pairing of two ¼ lb* savory flame-grilled beef patties topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.',
//         tags: ['Creamy'],
//       },
//       {
//         id:'4',
//         name: 'Big King',
//         price: 25,
//         cookTime: '8-16',
//         favorite: true,
//         origins: ['China'],
//         stars: 4.7,
//         imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-bk-nigeria//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/12/big-king-middle-bun.jpeg',
//         description: 'The BIG KING® is one of the biggest in our family. With two freshly flame-grilled 100% pure beef patties, cheese, onions, pickles, lettuce and the unique BIG KING™ sauce, it just tastes amazing.',
//         tags: ['Lunch'],
//       },
//       {
//         id:'5',
//         name: 'Double Steakhouse',
//         price: 35,
//         cookTime: '12-16',
//         favorite: false,
//         origins: ['Middle east'],
//         stars: 4.7,
//         imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/double-steakhouse-wi.jpg',
//         description: '',
//         tags: ['Spicy', 'Lunch'],
//       },
//       {
//         id:'6',
//         name: 'Big King XXL',
//         price: 55,
//         cookTime: '45-65',
//         favorite: true,
//         origins: ['Peru', ' - France'],
//         stars: 4.7,
//         imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/hamburger.jpg',
        
//         description: 'Fresh flame-grilled beef, the original BIG KING sauce, and two delicious cheddar cheese slices, fresh lettuce, sliced white onions and crunchy pickles. The BIG KING® XXL is a real ultimate hunger beater.',
//         tags: ['Lunch'],
//       },
//       {
//         id:'7',
//         name: 'cheeseburger',
//         price: 15,
//         cookTime: '4-5',
//         favorite: false,
//         origins: ['Kenya', ' - UAE'],
//         stars: 4.7,
//         imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/big-king-xxlw.jpg',
//         description: 'Our Cheeseburger is a signature flame-grilled beef patty topped with a simple layer of melted American cheese, crinkle cut pickles, yellow mustard, and ketchup on a toasted sesame seed bun.',
//         tags: ['Lunch', 'milk'],
//       },
//       {
//         id:'8',
//         name: 'Hamburger',
//         price: 15,
//         cookTime: '14-15',
//         favorite: true,
//         origins: ['Africa'],
//         stars: 4.7,
//         imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/cheeseburger-sandwich.jpg',
//         description: 'Our Hamburger is a signature flame-grilled beef patty topped with a simple layer of crinkle cut pickles, yellow mustard, and ketchup on a toasted sesame seed bun.',
//         tags: ['Creamy'],
//       },
//       {
//         id:'9',
//         name: 'Head Hamburger',
//         price: 5.6,
//         cookTime: '1-5',
//         favorite: true,
//         origins: ['Spain', ' - Africa'],
//         stars: 4.7,
//         imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/steakhouses.jpg',
//         description: 'Our Hamburger is a signature flame-grilled beef patty topped with a simple layer of crinkle cut pickles, yellow mustard, and ketchup on a toasted sesame seed bun.',
//         tags: ['Lunch'],
//       },
//       {
//         id:'10',
//         name: 'Double Cheeseburger',
//         price: 12,
//         cookTime: '1-15',
//         favorite: true,
//         origins: ['Island'],
//         stars: 4.7,
//         imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/double-cheese-burger.jpg',
//         description: 'Classic ingredients flavored just right. You can’t go wrong with our Cheeseburger, a signature flame-grilled beef patty topped with a simple layer of melted cheese, pickles, and ketchup on a toasted sesame seed bun.',
//         tags: ['Lunch', 'milk'],
//       },
//       {
//         id:'11',
//         name: 'Vanilla burger',
//         cookTime: '10-20',
//         price: 10,
//         favorite: false,
//         origins: ['Italy'],
//         stars: 4.5,
//         imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/Whopper-Sandw.jpg',
//         description: 'Our Whopper® Sandwich is a ¼ lb* of savory flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.',
//         tags: ['FastFood', 'Creamy', 'Lunch'],
//       },
//       {
//         id:'12',
//         name: 'Key-pie burger',
//         price: 20,
//         cookTime: '20-30',
//         favorite: true,
//         origins: ['South Africa', ' - USA'],
//         stars: 4.7,
//         imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/hamburger.jpg',
        
//         description: '',
//         tags: ['Spicy', 'Lunch', 'FastFood'],
//       },
//       {
//         id:'13',
//         name: 'Triple Whopper',
//         price: 13,
//         cookTime: '2-6',
//         favorite: true,
//         origins: ['Nigeria', ' - USA'],
//         stars: 4.7,
//         imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/08/769_DOUBLE-WHOPPER.jpg',
//         description: 'Our Double Whopper® Sandwich is a pairing of two ¼ lb* savory flame-grilled beef patties topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.',
//         tags: ['Spicy', 'Lunch'],
//       },
//       {
//         id:'14',
//         name: 'Big Queen',
//         price: 25,
//         cookTime: '8-16',
//         favorite: true,
//         origins: ['China'],
//         stars: 4.7,
//         imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-bk-nigeria//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/12/big-king-middle-bun.jpeg',
//         description: 'The BIG KING® is one of the biggest in our family. With two freshly flame-grilled 100% pure beef patties, cheese, onions, pickles, lettuce and the unique BIG KING™ sauce, it just tastes amazing.',
//         tags: ['Lunch'],
//       },
//       {
//         id:'15',
//         name: 'multiple Steak-home',
//         price: 35,
//         cookTime: '12-16',
//         favorite: false,
//         origins: ['Middle east'],
//         stars: 4.7,
//         imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/double-steakhouse-wi.jpg',
//         description: '',
//         tags: ['Creamy', 'Lunch'],
//       },
//       {
//         id:'16',
//         name: 'maximum king XXL',
//         price: 55,
//         cookTime: '45-65',
//         favorite: true,
//         origins: ['Peru', ' - France'],
//         stars: 4.7,
//         imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/hamburger.jpg',
        
//         description: 'Fresh flame-grilled beef, the original BIG KING sauce, and two delicious cheddar cheese slices, fresh lettuce, sliced white onions and crunchy pickles. The BIG KING® XXL is a real ultimate hunger beater.',
//         tags: ['FastFood'],
//       },
//       {
//         id:'17',
//         name: 'Home alone',
//         price: 15,
//         cookTime: '4-5',
//         favorite: false,
//         origins: ['Kenya', ' - UAE'],
//         stars: 4.7,
//         imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/big-king-xxlw.jpg',
//         description: 'Our Cheeseburger is a signature flame-grilled beef patty topped with a simple layer of melted American cheese, crinkle cut pickles, yellow mustard, and ketchup on a toasted sesame seed bun.',
//         tags: ['Lunch'],
//       },
//       {
//         id:'18',
//         name: 'Lagos Hamburger',
//         price: 15,
//         cookTime: '14-15',
//         favorite: true,
//         origins: ['Africa'],
//         stars: 4.7,
//         imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/cheeseburger-sandwich.jpg',
//         description: 'Our Hamburger is a signature flame-grilled beef patty topped with a simple layer of crinkle cut pickles, yellow mustard, and ketchup on a toasted sesame seed bun.',
//         tags: ['Lunch', 'milk'],
//       },
//       {
//         id:'19',
//         name: 'Goat Tail burger',
//         price: 5.6,
//         cookTime: '1-5',
//         favorite: true,
//         origins: ['Spain', ' - Africa'],
//         stars: 4.7,
//         imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/steakhouses.jpg',
//         description: 'Our Hamburger is a signature flame-grilled beef patty topped with a simple layer of crinkle cut pickles, yellow mustard, and ketchup on a toasted sesame seed bun.',
//         tags: ['Lunch'],
//       },
    
// ]



// export const sample_tags:Tag[] = [
//   {name: 'All', count: 19},
//   {name: 'Creamy', count: 5},
//   {name: 'Lunch', count: 16},
//   {name: 'Spicy',count: 3},
//   {name: 'FastFood', count: 4},
//   {name: 'milk', count: 3}
// ]

import { Food } from "./app/Shared/models/food";
import { Tag } from "./app/Shared/models/tag";

export const sample_foods:Food[] = [
  
    {
        id:'1',
        name: 'Whopper',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/Whopper-Sandw.jpg',
        description: 'Our Whopper® Sandwich is a ¼ lb* of savory flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.',
        tags: ['Creamy', 'Lunch'],
      },
      {
        id:'2',
        name: 'Steakhouse',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['South Africa', ' - USA'],
        stars: 4.7,
        imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/hamburger.jpg',
        
        description: '',
        tags: ['Lunch', 'FastFood'],
      },
      {
        id:'3',
        name: 'Double Whopper',
        price: 13,
        cookTime: '2-6',
        favorite: true,
        origins: ['Nigeria', ' - USA'],
        stars: 4.7,
        imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/08/769_DOUBLE-WHOPPER.jpg',
        description: 'Our Double Whopper® Sandwich is a pairing of two ¼ lb* savory flame-grilled beef patties topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.',
        tags: ['Creamy'],
      },
      {
        id:'4',
        name: 'Big King',
        price: 25,
        cookTime: '8-16',
        favorite: true,
        origins: ['China'],
        stars: 4.7,
        imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-bk-nigeria//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/12/big-king-middle-bun.jpeg',
        description: 'The BIG KING® is one of the biggest in our family. With two freshly flame-grilled 100% pure beef patties, cheese, onions, pickles, lettuce and the unique BIG KING™ sauce, it just tastes amazing.',
        tags: ['Lunch'],
      },
      {
        id:'5',
        name: 'Double Steakhouse',
        price: 35,
        cookTime: '12-16',
        favorite: false,
        origins: ['Middle east'],
        stars: 4.7,
        imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/double-steakhouse-wi.jpg',
        description: '',
        tags: ['Spicy', 'Lunch'],
      },
      {
        id:'6',
        name: 'Big King XXL',
        price: 55,
        cookTime: '45-65',
        favorite: true,
        origins: ['Peru', ' - France'],
        stars: 4.7,
        imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/hamburger.jpg',
        
        description: 'Fresh flame-grilled beef, the original BIG KING sauce, and two delicious cheddar cheese slices, fresh lettuce, sliced white onions and crunchy pickles. The BIG KING® XXL is a real ultimate hunger beater.',
        tags: ['Lunch'],
      },
      {
        id:'7',
        name: 'cheeseburger',
        price: 15,
        cookTime: '4-5',
        favorite: false,
        origins: ['Kenya', ' - UAE'],
        stars: 4.7,
        imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/big-king-xxlw.jpg',
        description: 'Our Cheeseburger is a signature flame-grilled beef patty topped with a simple layer of melted American cheese, crinkle cut pickles, yellow mustard, and ketchup on a toasted sesame seed bun.',
        tags: ['Lunch', 'milk'],
      },
      {
        id:'8',
        name: 'Hamburger',
        price: 15,
        cookTime: '14-15',
        favorite: true,
        origins: ['Africa'],
        stars: 4.7,
        imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/cheeseburger-sandwich.jpg',
        description: 'Our Hamburger is a signature flame-grilled beef patty topped with a simple layer of crinkle cut pickles, yellow mustard, and ketchup on a toasted sesame seed bun.',
        tags: ['Creamy'],
      },
      {
        id:'9',
        name: 'Head Hamburger',
        price: 5.6,
        cookTime: '1-5',
        favorite: true,
        origins: ['Spain', ' - Africa'],
        stars: 4.7,
        imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/steakhouses.jpg',
        description: 'Our Hamburger is a signature flame-grilled beef patty topped with a simple layer of crinkle cut pickles, yellow mustard, and ketchup on a toasted sesame seed bun.',
        tags: ['Lunch'],
      },
      {
        id:'10',
        name: 'Double Cheeseburger',
        price: 12,
        cookTime: '1-15',
        favorite: true,
        origins: ['Island'],
        stars: 4.7,
        imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/double-cheese-burger.jpg',
        description: 'Classic ingredients flavored just right. You can’t go wrong with our Cheeseburger, a signature flame-grilled beef patty topped with a simple layer of melted cheese, pickles, and ketchup on a toasted sesame seed bun.',
        tags: ['Lunch', 'milk'],
      },
      {
        id:'11',
        name: 'Vanilla burger',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/Whopper-Sandw.jpg',
        description: 'Our Whopper® Sandwich is a ¼ lb* of savory flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.',
        tags: ['FastFood', 'Creamy', 'Lunch'],
      },
      {
        id:'12',
        name: 'Key-pie burger',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['South Africa', ' - USA'],
        stars: 4.7,
        imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/hamburger.jpg',
        
        description: '',
        tags: ['Spicy', 'Lunch', 'FastFood'],
      },
      {
        id:'13',
        name: 'Triple Whopper',
        price: 13,
        cookTime: '2-6',
        favorite: true,
        origins: ['Nigeria', ' - USA'],
        stars: 4.7,
        imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/08/769_DOUBLE-WHOPPER.jpg',
        description: 'Our Double Whopper® Sandwich is a pairing of two ¼ lb* savory flame-grilled beef patties topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.',
        tags: ['Spicy', 'Lunch'],
      },
      {
        id:'14',
        name: 'Big Queen',
        price: 25,
        cookTime: '8-16',
        favorite: true,
        origins: ['China'],
        stars: 4.7,
        imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-bk-nigeria//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/12/big-king-middle-bun.jpeg',
        description: 'The BIG KING® is one of the biggest in our family. With two freshly flame-grilled 100% pure beef patties, cheese, onions, pickles, lettuce and the unique BIG KING™ sauce, it just tastes amazing.',
        tags: ['Lunch'],
      },
      {
        id:'15',
        name: 'multiple Steak-home',
        price: 35,
        cookTime: '12-16',
        favorite: false,
        origins: ['Middle east'],
        stars: 4.7,
        imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/double-steakhouse-wi.jpg',
        description: '',
        tags: ['Creamy', 'Lunch'],
      },
      {
        id:'16',
        name: 'maximum king XXL',
        price: 55,
        cookTime: '45-65',
        favorite: true,
        origins: ['Peru', ' - France'],
        stars: 4.7,
        imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/hamburger.jpg',
        
        description: 'Fresh flame-grilled beef, the original BIG KING sauce, and two delicious cheddar cheese slices, fresh lettuce, sliced white onions and crunchy pickles. The BIG KING® XXL is a real ultimate hunger beater.',
        tags: ['FastFood'],
      },
      {
        id:'17',
        name: 'Home alone',
        price: 15,
        cookTime: '4-5',
        favorite: false,
        origins: ['Kenya', ' - UAE'],
        stars: 4.7,
        imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/2021/09/big-king-xxlw.jpg',
        description: 'Our Cheeseburger is a signature flame-grilled beef patty topped with a simple layer of melted American cheese, crinkle cut pickles, yellow mustard, and ketchup on a toasted sesame seed bun.',
        tags: ['Lunch'],
      },
      {
        id:'18',
        name: 'Lagos Hamburger',
        price: 15,
        cookTime: '14-15',
        favorite: true,
        origins: ['Africa'],
        stars: 4.7,
        imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/cheeseburger-sandwich.jpg',
        description: 'Our Hamburger is a signature flame-grilled beef patty topped with a simple layer of crinkle cut pickles, yellow mustard, and ketchup on a toasted sesame seed bun.',
        tags: ['Lunch', 'milk'],
      },
      {
        id:'19',
        name: 'Goat Tail burger',
        price: 5.6,
        cookTime: '1-5',
        favorite: true,
        origins: ['Spain', ' - Africa'],
        stars: 4.7,
        imageUrl: 'https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/steakhouses.jpg',
        description: 'Our Hamburger is a signature flame-grilled beef patty topped with a simple layer of crinkle cut pickles, yellow mustard, and ketchup on a toasted sesame seed bun.',
        tags: ['Lunch'],
      },
]

export const sample_tags:Tag[] = [
  {name: 'All', count: 19},
  {name: 'Creamy', count: 5},
  {name: 'Lunch', count: 16},
  {name: 'Spicy',count: 3},
  {name: 'FastFood', count: 4},
  {name: 'milk', count: 3}
]