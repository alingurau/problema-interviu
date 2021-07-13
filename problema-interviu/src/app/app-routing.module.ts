import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DocumentsComponent} from "./components/documents/documents.component";

const routes: Routes = [
  { path: 'documents', component: DocumentsComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
