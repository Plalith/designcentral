import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WardrobeComponent } from './design/wardrobe/wardrobe.component';
import { HouseComponent } from './design/house/house.component';

const routes: Routes = [
    { path: '', component:HomeComponent},
    {path:'design_wardrobe', component:WardrobeComponent},
    {path:'gft_home', component:HouseComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
