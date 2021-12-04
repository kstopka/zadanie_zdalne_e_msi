import * as React from "react";
import { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Controls from "./components/Controls";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <Router>
            <div className="wrapper">
                <header>
                    <Link to="/">
                        <h1>Zadanie Zdalne e-MSI - Krystian Stopka</h1>
                    </Link>
                </header>
                <section className="content">
                    <div className="lewy">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/controls">Różne kontrolki HTML</Link>
                                </li>
                                <li>
                                    <Link to="/">Tabela Pracowników</Link>
                                </li>
                                <li>
                                    <Link to="/">Tabela Faktur VAT</Link>
                                </li>
                                <li>
                                    <Link to="/">Tabela Delegacji BD</Link>
                                </li>
                                <li>
                                    <Link to="/">Dane Kontrahentów</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="prawy">
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/controls">
                                <Controls />
                            </Route>
                        </Switch>
                    </div>
                </section>
            </div>
        </Router>
    );
};

export default App;
