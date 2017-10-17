import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
            'This is a test',
            'http://images.media-allrecipes.com/userphotos/250x250/02/57/31/2573174.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries' , 20)
            ]),
        new Recipe('Another Test Recipe',
            'This is another test',
            'http://images.media-allrecipes.com/userphotos/250x250/02/57/31/2573174.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 2)
            ])
    ];

    constructor(private slService: ShoppingListService){

    }
    
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return  this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
