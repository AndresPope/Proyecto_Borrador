import { useState, useEffect } from "react";
import "./App.css";
import Materialui from "./components/Material";
import { AppLayout } from "@awsui/components-react";
import ReactMarkdown from "react-markdown";
import documentationMK from "./components/documentationMK.md";

const test = async () => await require("./components/documentationMK.md");

const App = () => {
  const [document, setDocument] = useState(undefined);

  useEffect(() => {
    setDocument(test());
  }, []);

  console.log(document);

  return (
    <AppLayout
      content={<Materialui />}
      tools={
        <ReactMarkdown
          source={documentationMK}
          children={(documentationMK, "nada")}
        ></ReactMarkdown>
      }
    />
  );
};
export default App;
