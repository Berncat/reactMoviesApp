import React from "react";
import HeaderMovieList from "../components/headerMovieList";
import { MemoryRouter } from "react-router";

export default {
  title: "Navigation/Movie List Header",
  component: HeaderMovieList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <HeaderMovieList title={"Title Here"}/>;

Basic.storyName = "Default";
