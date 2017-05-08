import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeworksComponent } from "app/homeworks/homeworks.component";


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: HomeworksComponent }
    ])],
    exports: [RouterModule]
})
export class HomeworksRoutingModule {

}