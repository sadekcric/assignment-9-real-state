import { useContext } from "react";
import { Link } from "react-router-dom";
import { CommonContext } from "../../Route/CommonRoute";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const { firebaseRegister, setUser } = useContext(CommonContext);
  const handleRegisterForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;
    const conformPassword = e.target.conformPassword.value;

    firebaseRegister(email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: name,
          photoURL: image,
        })
          .then()
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="bg-green-50 min-h-[calc(100vh-240px)] flex justify-center items-center p-3">
      <div className="flex flex-col items-center justify-center max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 border border-green-500 my-10 bg-green-200">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm dark:text-gray-600">Welcome our Website! Please Sign up.</p>
        </div>
        <form onSubmit={handleRegisterForm} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter Your Name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Your Photo URL
              </label>
              <input
                type="text"
                name="image"
                id="image"
                required
                placeholder="Enter Your Photo URL"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm">
                Your Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="@Abc123"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm">
                Conform Password
              </label>
              <input
                type="password"
                name="conformPassword"
                id="conformPassword"
                placeholder="@Abc123"
                required
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 bg-green-500 text-white"
              >
                Sign up
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              You have already an Account?
              <Link
                to="/login"
                rel="noopener noreferrer"
                className="hover:underline dark:text-violet-600 text-blue-500 underline ml-2 font-semibold"
              >
                Sign In
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
