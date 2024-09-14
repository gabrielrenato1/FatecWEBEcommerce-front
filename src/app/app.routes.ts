import { Routes } from '@angular/router';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { CestaComponent } from './components/pages/cesta/cesta.component';
import { DetalheComponent } from './components/pages/detalhe/detalhe.component';
import { EsqueciSenhaComponent } from './components/pages/esqueci-senha/esqueci-senha.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PesquisaComponent } from './components/pages/pesquisa/pesquisa.component';
import { VitrineComponent } from './components/pages/vitrine/vitrine.component';

export const routes: Routes = [
    {path:"", component:VitrineComponent},
    {path:"login", component:LoginComponent},
    {path:"cadastro", component:CadastroComponent},
    {path:"esqueci-senha", component:EsqueciSenhaComponent},
    {path:"vitrine", component:VitrineComponent},
    {path:"produto", component:DetalheComponent},
    {path:"cesta", component:CestaComponent},
    {path:"pesquisa", component:PesquisaComponent},
];
