import React from "react";
import SideBar from "../components/sideBar/sideBar";
import { Scrollbars } from "react-custom-scrollbars";
import PrimarySearchAppBar from "../components/appBar/appBar";
export default class MainLayout extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <div className="sticky-top">
          <PrimarySearchAppBar />
        </div>
        <div className="row">
          <div className="col-md-2 p-0 ">
            <SideBar />
          </div>
          <div
            className="col-md-10 p-0 pt-2"
            style={{ backgroundColor: "#F2F2F2" }}
          >
            <Scrollbars style={{ height: "calc(100vh - 105px)" }}>
              {this.props.children}
            </Scrollbars>
          </div>
        </div>
      </div>
    );
  }
}
