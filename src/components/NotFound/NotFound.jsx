import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div>
      <h1>Sorry, something wrong</h1>
      <Link to="/">Back to HOME page</Link>
    </div>
  );
};
export default NotFound;
