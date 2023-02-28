import { shallow } from "enzyme";
import Homeloan from "./Homeloan";
import {BrowserRouter as  Router } from "react-router-dom";

describe("Test homeloan page",()=>{
    it("render homeloan component withour crash",()=>{
        shallow(<Homeloan/>)
    });
})