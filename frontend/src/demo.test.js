import React from 'react';
import { shallow } from "enzyme";
import {  } from "demo";

describe('Test App Entry point', function () {
    it('should have a header tag with Hello world React!', function () {
      const wrapper = shallow(<demo/>);
    });
  });