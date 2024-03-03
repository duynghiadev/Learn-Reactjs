import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainLayout from "../layout/mainLayout";

const Index = () => {
  return (
    <div className="w-100 h-100 text-center d-flex flex-column justify-content-center align-items-center">
      <h1>Welcome to VPV ERP</h1>
      <h2>Will be have tutorial here later !</h2>
    </div>
  );
};

Index.Layout = MainLayout;
export default Index;
