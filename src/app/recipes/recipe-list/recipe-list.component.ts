import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test',
      'http://images.media-allrecipes.com/userphotos/250x250/02/57/31/2573174.jpg'),
    new Recipe('A Test Recipe', 'This is a test',
      'http://images.media-allrecipes.com/userphotos/250x250/02/57/31/2573174.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}