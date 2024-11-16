import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CestaComponent } from './pages/cesta/cesta.component';
import { DetalheComponent } from './pages/detalhe/detalhe.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { LoginComponent } from './pages/login/login.component';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"login", component:LoginComponent},
    {path:"cadastro", component:CadastroComponent},
    {path:"esqueci-senha", component:EsqueciSenhaComponent},
    {path:"home", component:HomeComponent},
    {path:"produto/:id", component:DetalheComponent},
    {path:"cesta", component:CestaComponent},
    {path:"resultados", component:PesquisaComponent},
];
