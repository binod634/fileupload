import apiClient from "../../api/apiclient";
import TopBar from "../topbar/topbar";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../../api/constants";
import { FaFile } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

function Listing() {
  const [imageFiles, setImageFiles] = useState([
    {
      name: "file1.jpg",
      size: 1024,
      type: "image/jpeg",
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/200/300`,
    },
    {
      name: "Sample Image",
      size: 1024,
      type: "image/jpeg",
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/200/300`,
    },
    {
      name: "Sample Image",
      size: 1024,
      type: "image/jpeg",
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/200/300`,
    },
    {
      name: "Sample Image",
      size: 1024,
      type: "image/jpeg",
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/200/300`,
    },
    {
      name: "Sample Image",
      size: 1024,
      type: "image/jpeg",
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/200/300`,
    },
    {
      name: "Sample Image",
      size: 1024,
      type: "image/jpeg",
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/200/300`,
    },
    {
      name: "Sample Image",
      size: 1024,
      type: "image/jpeg",
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/200/300`,
    },
    {
      name: "Sample Image",
      size: 1024,
      type: "image/jpeg",
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/200/300`,
    },
    {
      name: "Sample Image",
      size: 1024,
      type: "image/jpeg",
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/200/300`,
    },
    {
      name: "Sample Image",
      size: 1024,
      type: "image/jpeg",
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/200/300`,
    },
    {
      name: "Sample Image",
      size: 1024,
      type: "image/jpeg",
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/200/300`,
    },
    {
      name: "Sample Image",
      size: 1024,
      type: "image/jpeg",
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/200/300`,
    },
    {
      name: "Sample Image",
      size: 1024,
      type: "image/jpeg",
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/200/300`,
    },
    {
      name: "Sample Image",
      size: 1024,
      type: "image/jpeg",
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/200/300`,
    },
    {
      name: "Sample Image",
      size: 1024,
      type: "image/jpeg",
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/200/300`,
    },
    {
      name: "Sample Image",
      size: 1024,
      type: "image/jpeg",
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/200/300`,
    },
    {
      name: "Sample Image",
      size: 1024,
      type: "image/jpeg",
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/200/300`,
    },
    {
      name: "Sample Image",
      size: 1024,
      type: "image/jpeg",
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/200/300`,
    },
    {
      name: "Sample Image",
      size: 1024,
      type: "image/jpeg",
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/200/300`,
    },
    {
      name: "Sample Image",
      size: 1024,
      type: "image/jpeg",
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/200/300`,
    },
    {
      name: "Sample Image",
      size: 1024,
      type: "image/jpeg",
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/200/300`,
    },
    {
      name: "Sample Image",
      size: 1024,
      type: "image/jpeg",
      url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/200/300`,
    },
  ]);

  const [files, setFiles] = useState([]);
  const [imageHoverIndex, setImageHoverIndex] = useState(-1);
  const [filesHoverItem, setFilesHoverItem] = useState(-1);

  const setFileHover = (index) => {
    setFilesHoverItem(index);
  };

  const setImageHover = (index) => {
    setImageHoverIndex(index);
  };

  const downloadFile = (file) => {
    alert(
      "For security purpose. we don't save files with their original names. Please save the file with the name you want to save it as.",
    );
    document.location = `${SERVER_URL}/${file.url}`;
  };

  useEffect(() => {
    apiClient("/listfiles").then((data) => {
      //  debugging. lol.
      console.log(data.data.files);
      // filter out image files
      const imageFiles = data.data.files.filter((file) =>
        file.type.includes("image"),
      );

      // filter out non-image files
      const otherFiles = data.data.files.filter(
        (file) => !file.type.includes("image"),
      );
      setFiles(otherFiles);
      console.log(imageFiles);
      setImageFiles(imageFiles);
    });
  }, []);

  return (
    <>
      <TopBar />
      <div className="no-scrollbar flex justify-center md:pt-16 h-screen overflow-auto bg-gradient-to-r from-gray-800 to-gray-600">
        <div className=" shadow-2xl w-full  grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 p-8">
          {imageFiles.map((file, index) => (
            <div
              className="bg-white  rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 h-48 w-48 "
              onMouseEnter={() => setImageHover(index)}
              onMouseLeave={() => setImageHover(-1)}
              key={index}
            >
              {/* {console.log(file.url)} */}
              {imageHoverIndex === index ? (
                <IoMdDownload
                  className="text-2xl text-gray-500 w-full h-full"
                  ame={file.name}
                  onClick={() => downloadFile(file)}
                />
              ) : (
                <img
                  src={`${SERVER_URL}/${file.url}`}
                  alt={file.name}
                  className="w-full h-full  object-cover"
                />
              )}
            </div>
          ))}
          {files.map((file, index) => (
            <div
              className="bg-white  rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 h-48 w-48 "
              onMouseEnter={() => setFileHover(index)}
              onMouseLeave={() => setFileHover(-1)}
              key={index}
            >
              <div className="flex h-full w-full flex-col justify-center items-center">
                {index !== filesHoverItem ? (
                  <FaFile className="text-2xl text-gray-500 w-2/3 h-1/2" />
                ) : (
                  <IoMdDownload
                    className="text-2xl text-gray-500 w-2/3 h-1/2"
                    onClick={() => downloadFile(file)}
                  />
                )}
                <p className="pt-4 text-gray-800 text-sm text-center font-bold ">
                  {file.name}
                </p>
              </div>

              {/* <img
                src={`${SERVER_URL}/${file.url}`}
                alt={file.name}
                className="w-full h-full  object-cover"
              /> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Listing;
