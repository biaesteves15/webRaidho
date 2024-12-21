import { Routes } from '@angular/router';
import { AutenticarFuncionarioComponent } from './components/pages/autenticar-funcionario/autenticar-funcionario.component';
import { CriarFuncionarioComponent } from './components/pages/criar-funcionario/criar-funcionario.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { RelatorioGestorComponent } from './components/pages/relatorio-gestor/relatorio-gestor.component';
import { MarcarPontoComponent } from './components/pages/marcar-ponto/marcar-ponto.component';

export const routes: Routes = [
    {
        path: 'pages/funcionarios/autenticar',
        component: AutenticarFuncionarioComponent
    },
    {
        path: 'layout/sidebar',
        component: SidebarComponent
    },
    {
        path: 'pages/relatorio-gestor',
        component: RelatorioGestorComponent
    },
    {
        path:'pages/marcar-ponto',
        component: MarcarPontoComponent
    },
    {
        path: '', pathMatch: 'full',
        redirectTo: 'pages/funcionarios/autenticar'
    }
];
