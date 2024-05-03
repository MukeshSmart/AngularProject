import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient,private recipeService: RecipeService) { }

  storeRecipe(){
    const recipe = this.recipeService.getRecipes();
    this.http.put("https://agulardb-default-rtdb.firebaseio.com/recipe.json",recipe)
    .subscribe(response=>{
      console.log(response);
    });
  }

  getRecipes(){
    this.http.get<Recipe[]>("https://agulardb-default-rtdb.firebaseio.com/recipe.json")
    .subscribe(recipes=>{
      this.recipeService.setRecipe(recipes);
    })
  }
}
