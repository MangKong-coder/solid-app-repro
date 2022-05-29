import { useRoutes } from 'solid-app-router';
import { Router } from 'solid-app-router';
import { render } from 'solid-js/web';

const root = document.getElementById('root');
const ROUTES = [
    { path: '/*', component: () => <h1>Not found</h1> },
]

const App = () => {
    const Routes = useRoutes(ROUTES);
    return (
        <Router>
            <Routes />
            <a href="/test">yow</a>
        </Router>
    );
}

if (root) {
    render(() => <App />, root);
}