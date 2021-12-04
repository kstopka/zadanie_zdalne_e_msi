import * as React from "react";
import { FunctionComponent } from "react";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
    return <div className="home">{<h1>Home:</h1>}</div>;
};

export default Home;
