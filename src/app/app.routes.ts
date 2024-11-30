import { Routes } from '@angular/router';
import { CestaComponent } from './pages/cesta/cesta.component';
import { DetalheComponent } from './pages/detalhe/detalhe.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { LoginComponent } from './pages/login/login.component';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';
import { HomeComponent } from './pages/home/home.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"login", component:LoginComponent},
    {path:"esqueci-senha", component:EsqueciSenhaComponent},
    {path:"home", component:HomeComponent},
    {path:"produto/:id", component:DetalheComponent},
    {path:"cesta", component:CestaComponent},
    {path:"resultados", component:PesquisaComponent},
    {path:"pedidos", component:PedidosComponent},
];
