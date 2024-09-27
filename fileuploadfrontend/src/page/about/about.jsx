import TopBar from "../topbar/topbar";

function About() {
  return (
    <div className="no-scrollbar flex justify-center   overflow-hidden   from-blue-500 to-blue-300">
      <TopBar />
      <div className="w-screen h-full overflow-auto no-scr bg-gradient-to-r from-gray-800 to-gray-700 flex flex-col justify-center items-center pb-16">
        <div className="mt-20  bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-2xl ">
          <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
          <p className="mb-4">
            This project is a learning initiative designed to create an FTP-like
            service for file upload, storage, and listing on the web. It aims to
            provide users with a seamless and efficient way to manage their
            files online.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Features</h2>
          <ul className="list-disc list-inside mb-4">
            <li>User authentication for secure access</li>
            <li>File upload and download capabilities</li>
            <li>File listing with sorting and searching options</li>
            <li>File preview for supported file types</li>
            <li>Responsive design for mobile and desktop users</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="mb-4">
            My name is Binod Kandel, and I am an Android developer currently
            learning the MERN stack. This project has allowed me to enhance my
            skills in web development and gain a deeper understanding of file
            management systems.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Future Plans</h2>
          <p className="mb-4">
            I plan to continue improving this project by adding more features
            such as enhanced security, better user interface, and more extensive
            file management options. Placeholder for any additional future goals
            you may have.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
