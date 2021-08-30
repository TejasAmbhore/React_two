import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>404 error</h1>
            <h2>This page doesn't exist.</h2>
            <Link to="/reacttwo/" style={
                {
                    color:'#f1356d',
                }
            }>Back to the Homepage</Link>
        </div>
     );
}
 
export default NotFound;