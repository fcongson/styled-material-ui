import React, { useState } from "react";
import { CountrySelect, CountrySelectMultiple } from "./CountrySelect";

export default {
  title: "Country Select",
  component: CountrySelect
};

export const Single = () => {
  const [value, setValue] = useState("ATA");
  return <CountrySelect value={value} onChange={value => setValue(value)} />;
};

export const Multiple = () => {
  const [values, setValues] = useState(["ATA"]);
  return (
    <CountrySelectMultiple
      value={values}
      onChange={values => setValues(values)}
    />
  );
};
