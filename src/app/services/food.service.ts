// import { Injectable } from '@angular/core';
// import { Food } from '../Shared/models/food';
// import { Tag } from '../Shared/models/tag';
// import { sample_foods, sample_tags } from 'src/data';


// @Injectable({
//   providedIn: 'root'
// })
// export class FoodService {

//   constructor() { }

//   getAll():Food[] {
//     return sample_foods;
//   }


//   getAllFoodsBySearchTerm(searchTerm:string) {
//     return this.getAll().filter(
//       food => food.name.toLowerCase()
//       .includes(searchTerm.toLowerCase())
//     )
//   }

//   getAllTags():Tag[] {
//     return sample_tags
//   }

//   getAllFoodsByTag(tag:string):Food[] {
//     return tag === 'All'?
//     this.getAll():
//     this.getAll().filter(food => food.tags?.includes(tag))
//   }

//   getFoodById(foodId:string):Food {
//     return this.getAll().find(food => food.id == foodId) ?? new Food()
//   }

// }



import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';
import { Food } from '../Shared/models/food';
import { Tag } from '../Shared/models/tag';
import { sample_tags } from 'src/data';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[] {
    return sample_foods
  }

  getAllFoodsBySearchTerm(searchTerm:string) {
    return this.getAll().filter(food => 
      food.name.toLowerCase()
      .includes(searchTerm.toLowerCase())
    )
  }

  getAllTags():Tag[] {
    return sample_tags
  }

  getAllFoodsByTag(tag:string):Food[] {
    return tag === 'All' ?
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag))
  }

  getFoodById(foodId:string):Food {
    return this.getAll().find(food => food.id === foodId) ?? new Food()
  }

}


