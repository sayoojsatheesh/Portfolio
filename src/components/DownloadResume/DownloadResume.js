// CSS //
import { Fragment } from "react";
import classes from "./DownloadResume.module.css";

const DownloadResume = () => {
  const handleDownload = () => {
    // Replace 'your_resume.pdf' with the actual path to your resume PDF
    const resumePdfPath = "/Filies/Sayooj Satheesh Resume.pdf";

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = resumePdfPath;

    // Set the download attribute with the desired file name
    link.download = "Sayooj_Satheesh_Resume.pdf";

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <Fragment>
      <button onClick={handleDownload} className={classes["download-button"]}>
        <div className={classes.docs}>
          <svg
            className={classes["css-i6dzq1"]}
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            height="20"
            width="20"
            viewBox="0 0 24 24"
          >
            <svg
              class="css-i6dzq1"
              stroke-linejoin="round"
              stroke-linecap="round"
              fill="none"
              stroke-width="2"
              stroke="currentColor"
              height="20"
              width="20"
              viewBox="0 0 24 24"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line y2="13" x2="8" y1="13" x1="16"></line>
              <line y2="17" x2="8" y1="17" x1="16"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </svg>
          Download CV
        </div>
        <div className={classes.download}>
          <svg
            className={classes["css-i6dzq1"]}
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            height="24"
            width="24"
            viewBox="0 0 24 24"
          >
            <svg
              class="css-i6dzq1"
              stroke-linejoin="round"
              stroke-linecap="round"
              fill="none"
              stroke-width="2"
              stroke="currentColor"
              height="24"
              width="24"
              viewBox="0 0 24 24"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line y2="3" x2="12" y1="15" x1="12"></line>
            </svg>
          </svg>
        </div>
      </button>
    </Fragment>
  );
};

export default DownloadResume;
