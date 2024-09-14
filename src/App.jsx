import { useState } from "react";
import Button from "@mui/material/Button";

function App() {
  const [bgColor, setBgColor] = useState("rgb(237,108,2)");

  return (
    <>
      <div
        style={{
          width: "50rem",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          backgroundColor: `${bgColor}`,
        }}
        className="rounded-md h-96 m-auto mt-10 flex justify-center items-end gap-4 pb-5"
      >
        <Button
          variant="contained"
          color="warning"
          onClick={() => setBgColor("rgb(237,108,2)")}
        >
          warning
        </Button>{" "}
        <Button
          variant="contained"
          color="success"
          onClick={() => setBgColor("rgb(46,125,50)")}
        >
          Success
        </Button>{" "}
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setBgColor("rgb(156,39,176)")}
        >
          secondary
        </Button>{" "}
        <Button
          variant="contained"
          color="error"
          onClick={() => setBgColor("rgb(211,47,47)")}
        >
          error
        </Button>{" "}
        <Button
          variant="contained"
          color="info"
          onClick={() => setBgColor("rgb(2,136,209)")}
        >
          info
        </Button>
      </div>
    </>
  );
}

export default App;
