import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { API, graphqlOperation, Storage, Auth } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { createProduct } from "../api/graphql/mutations";
import config from "../aws-exports";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../redux/actions";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

function Admin() {
  const User = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const [userGroup, setUserGroup] = useState(null);
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    title: "",
    description: "",
    image: "",
    seller: "",
    price: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!productDetails.title || !productDetails.price) return;
      await API.graphql(
        graphqlOperation(createProduct, { input: productDetails })
      ).then((data) => {
        console.log(data);
      });

      setProductDetails({
        title: "",
        description: "",
        image: "",
        seller: "",
        price: "",
      });
    } catch (err) {
      console.log("error creating producct:", err);
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    // Can add video support later
    const file = e.target.files[0];
    const extension = file.name.split(".")[1];
    const name = file.name.split(".")[0];
    const key = `images/${uuidv4()}${name}.${extension}`;
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
    try {
      // Upload the file to s3 with public access level.
      await Storage.put(key, file, {
        level: "public",
        contentType: file.type,
      });
      // Retrieve the uploaded file to display
      const image = await Storage.get(key, { level: "public" });
      setImage(image);
      setProductDetails({ ...productDetails, image: url });
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((data) => {
        setUserGroup(
          data.signInUserSession.accessToken.payload["cognito:groups"]
        );
      })
      .catch(() => setUserGroup(null));

    return onAuthUIStateChange((nextAuthState, authData) => {
      dispatch(getCurrentUser());
    });
  }, []);
  if (userGroup === "null") return <p>Restricted access to this page</p>;
  return (
    <section className="">
      <AmplifyAuthenticator>
        <section className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <AmplifySignOut></AmplifySignOut>
          <form className="flex flex-wrap items-center justify-center pt-8 pt-0">
            <div style={{ flex: "1 1 50rem" }}>
              {image ? (
                <img className="w-96" src={image} alt="" />
              ) : (
                <input
                  type="file"
                  accept="image/jpg"
                  onChange={(e) => handleImageUpload(e)}
                />
              )}
            </div>
            <div className="form-fields">
              <div className="title-form">
                <label
                  htmlFor="title"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Title
                </label>

                <input
                  name="email"
                  type="title"
                  placeholder="Type the title"
                  onChange={(e) =>
                    setProductDetails({
                      ...productDetails,
                      title: e.target.value,
                    })
                  }
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  required
                />
              </div>
              <div className="description-form">
                <p>
                  <label htmlFor="description">Description</label>
                </p>
                <p>
                  <textarea
                    className="appearance-none block w-full bg-white-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    name="description"
                    type="text"
                    rows="8"
                    placeholder="Type the description of the product"
                    onChange={(e) =>
                      setProductDetails({
                        ...productDetails,
                        description: e.target.value,
                      })
                    }
                    required
                  />
                </p>
              </div>
              <div className="seller-form">
                <p>
                  <label htmlFor="seller">Seller</label>
                </p>
                <p>
                  <input
                    name="seller"
                    type="text"
                    placeholder="Type the seller's name"
                    onChange={(e) =>
                      setProductDetails({
                        ...productDetails,
                        seller: e.target.value,
                      })
                    }
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    required
                  />
                </p>
              </div>
              <div className="price-form">
                <p>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Price
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>

                    <input
                      name="price"
                      type="number"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7  sm:text-sm border-gray-300 rounded-md"
                      placeholder="What is the Price of the product (USD)"
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          price: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </p>
              </div>
              <div className="featured-form">
                <p>
                  <label>Featured?</label>
                  <input
                    type="checkbox"
                    className="featured-checkbox"
                    checked={productDetails.featured}
                    onChange={() =>
                      setProductDetails({
                        ...productDetails,
                        featured: !productDetails.featured,
                      })
                    }
                  />
                </p>
              </div>
              <div className="submit-form">
                <button
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>
      </AmplifyAuthenticator>
    </section>
  );
}

export default Admin;
