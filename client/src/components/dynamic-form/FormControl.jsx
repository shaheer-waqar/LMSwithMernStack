import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function FormControl({ formContol = [], formData, setFormData }) {
  const renderComponent = (formItem) => {
    let element = null;
    const value = formData[formItem.name]

    switch (formItem.componentType) {
      case "input":
        element = (
          <Input
            id={formItem.name}
            name={formItem.name}
            type={formItem.type}
            placeholder={formItem.placeholder}
            onChange={(e)=>setFormData((prev)=> ({...prev ,[e.target.name]: e.target.value}))}
            value={value}
          />
        );
        break;   

      case "textarea":
        element = (
          <Textarea
            id={formItem.name}
            name={formItem.name}
            placeholder={formItem.placeholder}

          />
        );
        break;

      case "select":
        element = (
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={formItem.label} />
            </SelectTrigger>
            <SelectContent>
              {formItem.options && formItem.options.length
                ? formItem.options.map((option, index) => (
                    <SelectItem key={option.id} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;

      default:
        break;
    }

    return element;
  };
  return (
    <div className="flex flex-col gap-3">
      {formContol.map((controlItem, index) => (
        <div key={controlItem.name}>
          <Label htmlFor={controlItem.name}>{controlItem.label}</Label>
          {renderComponent(controlItem)}
        </div>
      ))}
    </div>
  );
}

export default FormControl;
