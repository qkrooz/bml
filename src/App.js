import React, { useState } from "react";
// react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// Other
import texts from "./_resources/texts.json";
import "./App.css";
import "antd/dist/antd.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
// Screens
import Home from "./_screens/Home";
import Calendar from "./_screens/Calendar";
import Ranking from "./_screens/Ranking";
import Teams from "./_screens/Teams";
import Login from "./_screens/Login";
import SignUp from "./_screens/SignUp";
import Error from "./_screens/Error";
import Article from "./_screens/Article";
// Ant Design
import { Layout } from "antd";
const { Content } = Layout;
function App() {
  // Este State Maneja el idioma
  const [language, setLanguage] = useLocalStorage("lang", "es");
  // const [language, setLanguage] = useState("es");
  let isLive = false;
  return (
    <Router>
      <Switch>
        <Redirect from="/" to="/home" exact />
        <Route path="/home">
          <Layout style={{ height: "100%", backgroundColor: "#2e2e2e" }}>
            <Header
              lang={language}
              setLanguage={setLanguage}
              texts={texts}
              isLive={isLive}
            />
            <Content style={{ height: "auto" }}>
              <Switch>
                <Route path="/home" exact>
                  <Home isLive={isLive} lang={language} />
                </Route>
                <Route path="/home/calendar">
                  <Calendar />
                </Route>
                <Route path="/home/ranking">
                  <Ranking />
                </Route>
                <Route path="/home/teams">
                  <Teams />
                </Route>
                <Route path="/home/article">
                  <Article />
                </Route>
              </Switch>
            </Content>
            <Footer lang={language} texts={texts} />
          </Layout>
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/error" component={Error} />
      </Switch>
    </Router>
  );
}
// Hook
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
export default App;
