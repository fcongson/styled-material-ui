import React from "react";
import { CountrySelect, CountrySelectMultiple } from "./CountrySelect";

export default {
  title: "Country Select",
  component: CountrySelect
};

export const Single = () => <CountrySelect />;

export const Multiple = () => <CountrySelectMultiple />;
