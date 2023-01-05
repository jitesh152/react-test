import {Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Jumbotron( props ) {
    return (
        <div className='jumbotron p-3 p-md-5 text-white rounded bg-dark'>
            <Col md={6} className='px-0'>
                <h1 className="display-4 font-italic">{props.heading}</h1>
                <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
                <p className='lead mb-0'>
                    <Link className="text-white font-weight-bold" to={props.path}>Continue reading...</Link>
                </p>
            </Col>
        </div>
    );
}

Jumbotron.defaultProps = {
    heading: "Title of a longer featured blog post",
    path: '/',
}

export default Jumbotron;