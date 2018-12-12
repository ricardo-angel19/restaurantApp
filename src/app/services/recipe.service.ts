import { Recipe } from '../recipes/recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { IngredientsService } from './ingredients.service';
import { Subject } from 'rxjs';
@Injectable()
export class RecipeServices {
    recipesChanged = new Subject<Recipe[]>();
    //recipesSelected= new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Recipe 1', 'This is a simply test 1', 'http://www.laopinion.net/wp-content/uploads/2018/09/platillos.jpg',
            [new Ingredient('bread', 1),
            new Ingredient('chees', 2),
            new Ingredient('bread2', 1),
            new Ingredient('chees22', 2)
            ]),
        new Recipe('Recipe 2', 'This is a simply test 2', 'http://www.laopinion.net/wp-content/uploads/2018/09/platillos.jpg',
            [new Ingredient('orange', 1),
            new Ingredient('salt', 2),
            new Ingredient('orange2', 1),
            new Ingredient('salt2', 2)
            ]),
        new Recipe('Recipe 3', 'This is a simply test 3', 'http://www.laopinion.net/wp-content/uploads/2018/09/platillos.jpg',
            [new Ingredient('pizza', 1),
            new Ingredient('apples', 2),
            new Ingredient('orange2', 1),
            new Ingredient('salt2', 2)
            ])
    ];
    constructor(private ingredientsService: IngredientsService) { }
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
    AddRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.ingredientsService.addIngredients(ingredients);
 
    }

    onDelateRecipe(index: number) {

        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());


    }
}