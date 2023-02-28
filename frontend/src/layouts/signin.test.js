import React from "react";
import { mount,  shallow } from "enzyme";
import SignIn from "./authentication/sign-in";
import {BrowserRouter as  Router } from "react-router-dom";
import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";

describe("Test login form",()=>{
    it("render sign-in component withour crash",()=>{
        shallow(<Router><SignIn/></Router> )
    });

})