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



// function CodeEditor({ value, onChange, onMount, language = "typescript", readonly = false, fontSize = 12 }: Props) {
//   const { colorMode } = useColorMode() 
//   useEffect(() => {
//     monaco.editor.create(document.getElementById('monaco-container'), {
//       value: value,
//       language: language,
//       readOnly: readonly,
//       lineNumbers: "on",
//       lineNumbersMinChars: 4,
//       lineDecorationsWidth: 0,
//       scrollbar: {
//         verticalSliderSize: 5,
//         horizontalSliderSize: 5,
//       },
//       automaticLayout: true,
//       minimap: {
//         enabled: false
//       },
//       fontSize: fontSize,
//       theme: colorMode === "dark" ? "vs-dark" : "vs-light",

//     });
//   }, [colorMode])
//   return (<div id="monaco-container"></div>)
// }