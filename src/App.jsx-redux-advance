import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./features/user/userSlice";

function App() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <h1 className="text-3xl text-black ">loading...</h1>;
  }

  if (error) {
    return <h1 className="text-3xl text-red-500 ">Error</h1>;
  }

  return (
    <div className="min-h-svh flex flex-col justify-center items-center ">
      <h1 className="text-3xl text-red-500 ">Users</h1>
      {users.map((user) => (
        <h1 key={user.id} className="text-3xl text-red-500 ">
          {user.name}
        </h1>
      ))}
    </div>
  );
}
export default App;
