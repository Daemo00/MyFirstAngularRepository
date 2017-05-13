import { FormGroup, FormControl, Validators } from "@angular/forms";

export class Ingredient {
    constructor(public name: string = "", public amount: number = 0, public UoM: string = "") {
    }

    static getFormGroup(ingredient: Ingredient): FormGroup {
        return new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
            'UoM': new FormControl(ingredient.UoM, Validators.required)
        })
    }

    static ingredientsEqual(a: Ingredient[], b: Ingredient[]) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length != b.length) return false;

        // If you don't care about the order of the elements inside
        // the array, you should sort both arrays here.
        for (var i = 0; i < a.length; ++i) {
            if (!Ingredient.equals(a[i], b[i])) return false;
        }
        return true;
    }

    static equals(a, b: Ingredient) {
        console.log("Ingredients equal called between " + a.name + " and " + b.name);
        if(a === b) return true;
        if (!a || !b) return false;
        return a.name === b.name &&
            a.amount === b.amount &&
            a.UoM === b.UoM
    }
}