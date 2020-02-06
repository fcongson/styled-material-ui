import React, { useState } from "react";
import { CountrySelect } from "./CountrySelect";

export default {
  title: "Country Select",
  component: CountrySelect
};

export const Default = () => {
  const [value, setValue] = useState("ATA");
  return <CountrySelect value={value} onChange={value => setValue(value)} />;
};
