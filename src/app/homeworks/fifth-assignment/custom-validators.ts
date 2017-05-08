import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

export class customValidators {
    static forbiddenProjectNames: string[] = ["Test"];
    static asyncForbiddenProjectNames: string[] = ["AsyncTest"];

    static forbiddenProjectName(control: AbstractControl): ValidationErrors {
        if (customValidators.forbiddenProjectNames.indexOf(control.value) > -1) {
            return { 'forbiddenProjectName': true };
        }
        return null;
    }

    static asyncForbiddenProjectName(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return new Promise<ValidationErrors>((resolve) => {
            setTimeout(() => {
                if (customValidators.asyncForbiddenProjectNames.indexOf(control.value) > -1) {
                    resolve({ 'asyncForbiddenProjectName': true });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}