import React from 'react';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./Pages/Login";
import Testing from "./components/Createschema";
import EditSchema from './components/EditSchema';
import Home from "./Pages/Home";
import Schemasui from "./Pages/Schemasui";
import { useSelector } from 'react-redux';
import Settings from "./Pages/Settings";
import SearchRecipe from "./Pages/SearchRecipe";
import CreateRecipe from "./Pages/CreateRecipe";
import CreateRecipe2 from "./Pages/CreateRecipe2";
import JsonEditStructure from "./components/JsonEditStructure";
import CreateRecipeCustomizations from './Pages/CreateRecipe';
import EditExperimentPlan from "./Pages/EditExperimentPlan"
import CreateRecipeWizard1 from './Pages/CreateRecipeWizard1';
import CreateRecipeWizard2 from './Pages/CreateRecipeWizard2';

export default function App() {

  const state = useSelector((state: any) => state.schemaState);

  return (
    <div>
      {
        state.isloggedin ?
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/testing" element={<Testing />} />
              <Route path="/schemasui" element={<Schemasui />} />
              <Route path="/schemasui" element={<Schemasui />} />
              <Route path="/editschema" element={<EditSchema />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/createrecipe" element={<CreateRecipe />} />
              <Route path="/createrecipe2" element={<CreateRecipe2 />} />
              <Route path="/searchrecipe" element={<SearchRecipe />} />
              <Route path="/login" element={<Login />} />
              <Route path="/editexperimentplan" element={<EditExperimentPlan />} />
              <Route path="/jsoneditstructure" element={<JsonEditStructure />} />
              <Route path="/createrecipecustomizations" element={<CreateRecipeCustomizations />} />
              <Route path="/createrecipewizard1" element={<CreateRecipeWizard1 />} />
              <Route path="/createrecipewizard2" element={<CreateRecipeWizard2 />} />
            </Routes>
          </> :
          <>
            <Login />
          </>
      }
    </div>
  )
}