import {Link} from 'react-router-dom'

const ErrorPage = () => {
    return (
        <>
            <h1>Resource does not exists!</h1>
            <Link to="/">Go back.</Link>
        </>
    )
}

export default ErrorPage;