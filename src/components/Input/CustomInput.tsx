import React, { Component, ChangeEvent } from "react";
import { IPropsInputCustom } from "./input.interface";

class CustomInput extends Component<IPropsInputCustom> {
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (this.props.onChange) {
      this.props.onChange(event);
    }

  };

  render() {
    const { placeholder, className, id, disabled, labelName, icon, readOnly, type, value, defaultValue, isError, errorMessage } = this.props;
    return (
      <div className="mb-2">
        <label htmlFor={id} className={`block mb-2 text-sm font-medium text-gray-900`}>
          {labelName}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className={`w-5 h-5 flex items-center justify-center ${isError ? "text-red-400" : "text-gray-900"} text-gray-500`}>{icon}</span>
          </div>
          <input
            defaultValue={defaultValue}
            type={type}
            readOnly={readOnly}
            value={value}
            id={id}
            disabled={disabled}
            onChange={this.handleChange}
            className={`bg-gray-50 border   text-sm rounded-lg focus:max-sm:ring-blue-500  focus:max-sm:border-blue-500 block w-full pl-10 p-2.5 ${className} ${isError ? "border-red-600 text-red-400" : "border-gray-300 text-gray-900"}`}
            placeholder={placeholder}
          />
        </div>
        {
          isError && (
            <span className="text-red-400 text-sm">
              {errorMessage}
            </span>
          )
        }
      </div>
    );
  }
}

export default CustomInput;
