import React from "react";
import styled from "@emotion/styled"
import { MdError } from "react-icons/md"

// Form Error Msg
const FormError = styled.div`
  color: red;
  font-size: 0.9rem;
  line-height: 1.5rem;
  text-align: start;
  margin-top: -16px;
  margin-bottom: 10px;
`;

const I = styled.span`
  border: none;
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
  vertical-align: sub;
`;

const Error = ({ message }) => {
  if (message) {
    return (
      <FormError>
        <I>
          <MdError />
        </I>{" "}
        {message}
      </FormError>
    )
  }
  return <></>
}

export default Error
