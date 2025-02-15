import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CommonContext } from "../../Route/CommonRoute";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import update from "../../assets/update.png";

const UpdateProfile = () => {
  const { user, edit, setEdit } = useContext(CommonContext);
  const [name, setName] = useState(user.displayName);
  const [img, setImg] = useState(user.photoURL);

  useEffect(() => {
    AOS.init();
  }, []);

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
      .then(() => {
        setEdit(!edit);
        Swal.fire({
          icon: "success",
          title: "Successfully Edit!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        return Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
          confirmButtonText: "Back",
        });
      });
  };

  return (
    <div className="min-h-[calc(100vh-394px)] bg-green-50">
      <Helmet>
        <title>Homely Haven | Update-profile</title>
      </Helmet>

      <div className="pt-10">
        <h1
          data-aos-duration="3000"
          data-aos="fade-down"
          className="text-center font-bold px-5 py-8 bg-green-100 rounded-lg text-3xl lg:text-5xl text-green-500 z-20"
        >
          {" "}
          PROFILE{" "}
        </h1>
      </div>

      <div className="flex  flex-col lg:flex-row items-center justify-center gap-5 ">
        <div data-aos-duration="3000" data-aos="fade-left" className="flex-1">
          <img className="w-full lg:w-[60%] mx-auto" src={update} alt="" />
        </div>

        <div data-aos-duration="3000" data-aos="fade-right" className="flex flex-1 items-center justify-center min-h-[calc(100vh-394px)] ">
          <div className="  p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 bg-green-100">
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
    </div>
  );
};

export default UpdateProfile;
