
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'; // Make sure this path points to your store file

function Page() {
  const { username, password } = useSelector((state: RootState) => state.auth);

  return (
    <div>
      <h1>Welcome to </h1>
      <p>Username: {username}</p>
      <p>Password: {password}</p>
    </div>
  );
}

export default Page;
