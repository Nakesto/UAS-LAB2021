import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { AuthGuard } from "./Auth/auth.guard";
import { BlogComponent } from "./blog/blog.component";
import { LoginComponent } from "./login/login.component";
import { NewsComponent } from "./news/news.component";
const routes: Routes = [
    { path: '', component: NewsComponent },
    { path: 'developer', component: AboutComponent },
    { path: 'blog', component: BlogComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [BlogComponent, NewsComponent, LoginComponent, BlogComponent]