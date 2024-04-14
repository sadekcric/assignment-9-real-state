import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CommonContext } from "../../Route/CommonRoute";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const UpdateProfile = () => {
  const { user } = useContext(CommonContext);
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(user.displayName);
  const [img, setImg] = useState(user.photoURL);

  const editImg = (e) => {
    setImg(e.target.value);
  };
  const editName = (e) => {
    setName(e.target.value);
  };

  const handleEdit = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: img,
    })
      .then()
      .catch((err) => console.log(err.message));

    setEdit(!edit);
  };

  return (
    <div>
      <Helmet>
        <title>Homely Haven | Update-profile</title>
      </Helmet>
      <div className="flex items-center justify-center min-h-[calc(100vh-240px)]">
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
          {edit ? (
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Your Photo URL
              </label>
              <input
                onChange={editImg}
                type="text"
                name="image"
                id="image"
                required
                placeholder={img}
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          ) : (
            <img src={user.photoURL} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
          )}

          <div className="mt-6 mb-2">
            {edit ? (
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Your Name
                </label>
                <input
                  onChange={editName}
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder={name}
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
            ) : (
              <p className="text-lg my-3">
                <span className=" font-semibold">Name:</span> {user.displayName}
              </p>
            )}

            <p className="text-lg my-3">
              <span className=" font-semibold">Email:</span> {user.email}
            </p>
          </div>

          {edit ? (
            <button onClick={handleEdit} className="bg-green-100 text-green-500 w-full py-3 hover:underline rounded-sm">
              Save
            </button>
          ) : (
            <button onClick={() => setEdit(!edit)} className="bg-green-100 text-green-500 w-full py-3 hover:underline rounded-sm">
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
