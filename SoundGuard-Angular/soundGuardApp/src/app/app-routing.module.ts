import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoundDataComponent } from './sound-data/sound-data.component';

const routes: Routes = [
  { path: '', component: SoundDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
