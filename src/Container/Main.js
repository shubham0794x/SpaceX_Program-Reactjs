import React, { useState, useEffect } from "react";
import Axios from "axios";
import Launches from "./Launches";

export default (props) => {
    const filters = {
        years: [
            2006,
            2007,
            2008,
            2009,
            2010,
            2011,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020
        ],
        launch: [true, false],
        landing: [true, false]
    };

    const [filterYear]    = useState(filters.years);
    const [filterLaunch]  = useState(filters.launch);
    const [filterLanding] = useState(filters.landing);
    const [selectedFilter, setSelectedFilter] = useState({
        year: "",
        launch: "",
        landing: ""
    });
    const [launchData, setLaunchData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    