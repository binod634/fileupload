import uploadingImage from "../../assets/upload.svg";
import { Button } from "../../components/ui/button";
import TopBar from "../../page/topbar/topbar";
import React from "react";
import apiClient from "../../api/apiclient";
import { UploadEndpoint } from "../../api/constants";
import { useNavigate } from "react-router-dom";

function Upload() {
  const navigate = useNavigate();
  const uploadfileRef = React.useRef(null);

  const uploadFile = () => {
    uploadfileRef.current.click();
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    var formData = new FormData();
    formData.append("file", file);
    await apiClient
      .post(UploadEndpoint, formData)
      .then((res) => {
        console.log(res.data);
        if (
          confirm(
            "File uploaded successfully. Do you want to go to listing page?",
          )
        ) {
          navigate("/listing");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <TopBar />
      <div className="no-scrollbar flex justify-center md:pt-[20vh] h-screen overflow-hidden  bg-gradient-to-r from-blue-500 to-blue-300">
        <div className="bg-white md:h-[60vh] w-screen sm:w-[90vw] md:w-[70vw] lg:w-[60vw] 2xl:w-[50vw] border-dotted border-white border-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div
            className="h-1/2 w-full  bg-white rounded-t-lg flex justify-center items-end "
            onClick={() => uploadFile()}
          >
            <img
              src={uploadingImage}
              alt="upload image"
              className="h-2/3 w-3/5 md:w-2/3 object-contain"
            />
          </div>
          <div className="h-1/6 w-full bg-white flex flex-col justify-center items-center">
            <p className="text-center text-2xl font-bold text-gray-700 px-4">
              Upload your files here
            </p>
            <p className="text-center text-xl font-semibold text-gray-600">
              OR
            </p>
          </div>
          <div className="w-full flex justify-center">
            <Button
              className="font-semibold capitalize"
              onClick={() => uploadFile()}
            >
              Click to upload
            </Button>
            {/* {/* <label htmlFor="uploadfile" className="rounded-full bg-gray-400 text-white h-8 w-32 text-center font-bold text-sm" style={{ border: '2px', borderStyle: 'solid' }} >File</label> */}
            <input
              type="file"
              name="uploadfile"
              id="uploadfile"
              ref={uploadfileRef}
              onClick={() => uploadFile()}
              onChange={(e) => uploadFileHandler(e)}
              className="hidden bg-white border border-gray-300 rounded-lg p-2  focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Upload;
