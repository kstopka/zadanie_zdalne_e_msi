import * as React from "react";
import { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/App.css";
import Home from "./components/Home";
import Controls from "./components/Controls";
import EmployeeTable from "./components/EmployeeTable";
import TableOfVat from "./components/TableOfVat";
import DelegationTable from "./components/DelegationTable";
import CounterpartData from "./components/CounterpartData";

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
                                    <Link to="/employee-table">Tabela Pracowników</Link>
                                </li>
                                <li>
                                    <Link to="/table-of-vat">Tabela Faktur VAT</Link>
                                </li>
                                <li>
                                    <Link to="/delegation-table">Tabela Delegacji BD</Link>
                                </li>
                                <li>
                                    <Link to="/counterpart-data">Dane Kontrahentów</Link>
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
                            <Route path="/employee-table">
                                <EmployeeTable />
                            </Route>
                            <Route path="/table-of-vat">
                                <TableOfVat />
                            </Route>
                            <Route path="/delegation-table">
                                <DelegationTable />
                            </Route>
                            <Route path="/counterpart-data">
                                <CounterpartData />
                            </Route>
                        </Switch>
                    </div>
                </section>
            </div>
        </Router>
    );
};

export default App;
