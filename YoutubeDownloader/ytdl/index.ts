import { memo } from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import ytdl from "./ytdl";

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default memo(
    connect(mapStateToProps, mapDispatchToProps)(ytdl)
);
