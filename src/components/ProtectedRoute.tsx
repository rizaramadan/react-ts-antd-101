import {Redirect, Route, RouteProps} from 'react-router';
import AuthContext from './AuthContext';

class ProtectedRoute extends Route<RouteProps> {
    public render() {
        let redirectPath: string = ''
        if (!AuthContext.isLoggedIn) {
            redirectPath = '/login'
        }

        if (redirectPath) {
            const renderComponent = () => (<Redirect to={{pathname: redirectPath}}/>);
            return <Route {...this.props} component={renderComponent} render={undefined}/>;
        } else {
            return <Route {...this.props}/>;
        }
    }
}

export default ProtectedRoute;