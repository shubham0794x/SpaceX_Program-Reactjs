import React, { useState, useEffect } from "react";
import Axios from "axios";
import Launches from "./launches";

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

    const [filterYear] = useState(filters.years);
    const [filterLaunch] = useState(filters.launch);
    const [filterLanding] = useState(filters.landing);
    const [selectedFilter, setSelectedFilter] = useState({
        year: "",
        launch: "",
        landing: ""
    });
    const [launchData, setLaunchData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      fetchData(); // eslint-disable-next-line
    }, []);
    const fetchData = async () => {
        setLoading(true);
        let result = await Axios(
            `https://api.spacexdata.com/v3/launches?limit=100${selectedFilter.launch === true || selectedFilter.launch === false
                ? "&launch_success=" + selectedFilter.launch
                : ""
            } ${selectedFilter.landing === true || selectedFilter.landing === false
                ? "&land_success=" + selectedFilter.landing
                : ""
            } ${!selectedFilter.year ? "" : "&launch_year=" + selectedFilter.year}`
        );
        setLaunchData(result.data);
        setLoading(false);
    };

    useEffect(() => {
      fetchData(); // eslint-disable-next-line
    }, []);
    useEffect(() => {
      console.log(selectedFilter);
      fetchData(); // eslint-disable-next-line
    }, [selectedFilter]);

    return (
        <main className="row">
            <aside className="col-md-2">
                <div className="filterContainer">
                    <h2>Filters</h2>
                    <div>
                        <h3>Launch Year </h3>
                        <ul className="row">
                            {filterYear.map((year, index) => (
                                <li
                                    key={"year" + index}
                                    className={
                                        selectedFilter.year === year
                                            ? "selected col-md-6"
                                            : "col-md-6"
                                    }
                                >
                                    <button
                                        onClick={() => {
                                            setSelectedFilter({ ...selectedFilter, year });
                                        }}
                                    >
                                        {year}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Successful Launch</h3>
                        <ul className="row">
                            {filterLaunch.map((launch) => (
                                <li
                                    key={"launch" + launch}
                                    className={
                                        selectedFilter.launch === launch
                                            ? "selected col-md-6"
                                            : "col-md-6"
                                    }
                                >
                                    <button
                                        onClick={() => {
                                            setSelectedFilter({ ...selectedFilter, launch });
                                        }}
                                    >
                                        {launch ? "true" : "false"}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Successful Landing</h3>
                        <ul className="row">
                            {filterLanding.map((landing) => (
                                <li
                                    key={"landing" + landing}
                                    className={
                                        selectedFilter.landing === landing
                                            ? "selected col-md-6"
                                            : "col-md-6"
                                    }
                                >
                                    <button
                                        onClick={() => {
                                            setSelectedFilter({ ...selectedFilter, landing });
                                        }}
                                    >
                                        {landing ? "true" : "false"}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </aside>
            {isLoading || !launchData ? (
                "Loading..."
            ) : (
                    <article className="col-md-10 row">
                        <Launches launch_detail={launchData} />
                    </article>
                )}
        </main>
    );
};