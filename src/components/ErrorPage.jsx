import {Link} from 'react-router-dom'

const ErrorPage = () => {
    return (
        <>
            <h1>Resource does not exists!</h1>
            <Link href="/">Go back.</Link>
        </>
    )
}

export default ErrorPage;