// import { Component, OnInit } from '@angular/core';
// import { Tag } from 'src/app/Shared/models/tag';
// import { FoodService } from 'src/app/services/food.service';

// @Component({
//   selector: 'app-tags',
//   templateUrl: './tags.component.html',
//   styleUrls: ['./tags.component.css']
// })
// export class TagsComponent implements OnInit {
//   tagShow:boolean = true
//   tags?:Tag[]
//   constructor(foodService: FoodService){
//     this.tags = foodService.getAllTags();
//   }
//   ngOnInit(): void {
    
//   }

//   OnShowCategoryTag() {
//     this.tagShow = !this.tagShow
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/Shared/models/tag';
import { FoodService } from 'src/app/services/food.service';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags?: Tag[]
  tagShow:boolean = true

  constructor(foodServices: FoodService){
    this.tags = foodServices.getAllTags()
  }
  ngOnInit(): void {
    console.log(this.tags)
  }

  OnShowCategoryTag() {
    this.tagShow = !this.tagShow
  }
}
