import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeComponent } from "./home/home.component";
import { ExpertiseComponent } from "./expertise/expertise.component";
import { JoinUsComponent } from "./join-us/join-us.component";
import { ContactComponent } from "./contact/contact.component";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "ourteam", redirectTo: "/home", pathMatch: "full" },
  { path: "expertise", component: ExpertiseComponent },
  { path: "joinus", component: JoinUsComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ExpertiseComponent,
    JoinUsComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
