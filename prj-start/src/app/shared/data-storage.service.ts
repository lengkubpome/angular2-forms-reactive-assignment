import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

<<<<<<< HEAD
@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://ng-recipe-book.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get('https://ng-recipe-book.firebaseio.com/recipes.json')
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
=======

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
        private recipeService: RecipeService) { }

    storeRecipes() {
        return this.http.put('https://ng-recipe-book-af1c0.firebaseio.com/recipe.json',
            this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get('https://ng-recipe-book-af1c0.firebaseio.com/recipe.json')
            .map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                console.log(recipes);
                for (let recipe of recipes) {     
                    if (!recipe['ingredients']) {                        
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
            )
            .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
            );
    }
}
>>>>>>> 8f00ed4fa7fdd31675dc524a4323f9f085f5a105
