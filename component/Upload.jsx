import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

const FileInput = styled.div`
  margin: 1em 0;
  border: 1px solid #dedede;
  color: #000000;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  font-size: 1.2em;
  padding: 2em 0;
  margin-top: 0;
`;

const Span = styled.span`
  font-size: 0.9em;
  display: block;
  margin-bottom: 0.5em;
`;
export default function Upload({ setRequiredUpload, requiredUpload, label }) {
  const onDrop = useCallback(async (acceptedFiles) => {
    setRequiredUpload(acceptedFiles[0]);
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <Span>{label}</Span>
      <FileInput {...getRootProps()}>
        <input
          {...getInputProps()}
          directory=""
          webkitdirectory=""
          type="file"
        />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <>
            {!requiredUpload ? (
              <p style={{ fontSize: ".95em" }}>Upload a file</p>
            ) : null}

            <p style={{ fontSize: ".65em" }}>
              {requiredUpload ? "File Ready" : "Drag and drop some files here"}
            </p>
          </>
        )}
      </FileInput>
    </div>
  );
}
