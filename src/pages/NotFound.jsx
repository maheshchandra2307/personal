import { Link } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import Button from '../components/ui/Button';

function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <HiOutlineExclamationCircle className="text-amber-600" size={56} />
      <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-amber-700">
        404
      </p>
      <h1 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-slate-600">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/">
          <Button>Back to Calculator</Button>
        </Link>
        <Link to="/pay">
          <Button variant="outline">Pay Bill</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
