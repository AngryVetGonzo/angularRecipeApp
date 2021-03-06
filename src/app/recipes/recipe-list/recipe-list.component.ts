import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'this is a test', 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Wikibooks_hamburger_recipe.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
