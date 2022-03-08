import { useRef } from "react";
import { Button, Input } from "@chakra-ui/react";

export const CrustInput = (props) => {
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  const onClickHandler = () => {
    fileInputRef.current?.click();
  };

  const onChangeHandler = (event) => {
    if (!event.target.files?.length) {
      return;
    }

    const formData = new FormData();

    Array.from(event.target.files).forEach((file) => {
      formData.append(event.target.name, file);
    });

    props.onChange(formData);

    formRef.current?.reset();
  };

  return (
    <form ref={formRef}>
      <Button type="button" onClick={onClickHandler}>
        {props.label}
      </Button>
      <Input
        accept={props.acceptedFileTypes}
        multiple={props.allowMultipleFiles}
        name={props.uploadFileName}
        onChange={onChangeHandler}
        ref={fileInputRef}
        style={{ display: "none" }}
        type="file"
      />
    </form>
  );
};

CrustInput.defaultProps = {
  acceptedFileTypes: "",
  allowMultipleFiles: false,
};
