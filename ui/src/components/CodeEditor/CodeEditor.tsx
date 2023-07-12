import React from "react";

import { useColorMode } from "@chakra-ui/react";
import { editor } from "monaco-editor";
import MonacoEditor from "react-monaco-editor"

interface Props {
    value: string 
    language?: string
    onChange?: (value: string) => void
    onMount?: (editor: editor.IStandaloneCodeEditor) => void
    readonly?: boolean
    fontSize?: number
    
}
function CodeEditor({value, onChange,onMount,language="typescript",readonly=false,fontSize=12}:Props) {
  const {colorMode} = useColorMode()
  return ( <MonacoEditor
      // editorDidMount={(editor:editor.IStandaloneCodeEditor) => {
      //   onMount && onMount(editor)
      //   // @ts-ignore
      //   window.MonacoEnvironment.getWorkerUrl = (
      //     _moduleId: string,
      //     label: string
      //   ) => {
      //     if (label === "json")
      //       return "_next/static/json.worker.js";
      //     if (label === "css")
      //       return "_next/static/css.worker.js";
      //     if (label === "html")
      //       return "_next/static/html.worker.js";
      //     if (
      //       label === "typescript" ||
      //       label === "javascript"
      //     )
      //       return "_next/static/ts.worker.js";
      //     return "_next/static/editor.worker.js";
      //   };
      // }}
      language={language}
      theme={colorMode === "dark" ? "vs-dark" : "vs-light"}
      value={value}
      options={{
        minimap: {
          enabled: false
        },
        lineNumbers: "on",
        automaticLayout: true,
        lineNumbersMinChars: 4,
        lineDecorationsWidth: 0,
        overviewRulerBorder: false,
        scrollbar: {
            verticalSliderSize: 5,
            horizontalSliderSize: 5,
        },
        readOnly: readonly,
        fontSize: fontSize
      }}
      onChange={onChange}
      
    />)
}

export default CodeEditor