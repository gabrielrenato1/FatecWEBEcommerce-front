import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CestaComponent } from './pages/cesta/cesta.component';
import { DetalheComponent } from './pages/detalhe/detalhe.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { LoginComponent } from './pages/login/login.component';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';
import { VitrineComponent } from './pages/vitrine/vitrine.component';

export const routes: Routes = [
    {path:"", component:VitrineComponent},
    {path:"login", component:LoginComponent},
    {path:"cadastro", component:CadastroComponent},
    {path:"esqueci-senha", component:EsqueciSenhaComponent},
    {path:"vitrine", component:VitrineComponent},
    {path:"produto/:id", component:DetalheComponent},
    {path:"cesta", component:CestaComponent},
    {path:"pesquisa", component:PesquisaComponent},
];
