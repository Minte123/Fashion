/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/
 */

// Route Views
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import BaseLayout from "../layouts/BaseLayout";

import CartContainer from "../views/Cart/CartContainer";
import Checkout from "../views/Checkout";
import ThankYou from "../views/ThankYou";

var PrivateRoutes = [
  {
    path: "/cart",
    layout: BaseLayout,
    component: CartContainer,
  },
    {
    path: "/checkout",
    layout: BaseLayout,
    component: Checkout,
  },
    {
    path: "/thank-you",
    layout: BaseLayout,
    component: ThankYou,
  },


];

export default PrivateRoutes;
