import React from 'react';

interface ValidationErrorMessageProps {
  errorMessages: string | Record<string, string> | object | unknown;
}

const ValidationErrorMessage: React.FC<ValidationErrorMessageProps> = ({ errorMessages }) => {
  const isStringErrorMessage = typeof errorMessages === 'string';
  const isErrorObject = typeof errorMessages === 'object' && errorMessages !== null;

  return (
    <>
      {errorMessages !== '' && (
        <>
          {isStringErrorMessage ? (
            <div className="my-2 text-error text-[13px]">{errorMessages}</div>
          ) : isErrorObject ? (
            Object.values(errorMessages as Record<string, string>).map((val: string, index: number) => (
              <div key={index}>
                <span className="my-2 text-error text-xs">{val}</span>
                <br />
              </div>
            ))
          ) : null}
        </>
      )}
    </>
  );
};

export default ValidationErrorMessage;