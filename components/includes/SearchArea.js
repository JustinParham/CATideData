import React from "react";
import SearchMenu from "./SearchMenu";
import axios from "axios";
import classes from "./SearchArea.module.css";

export default function SearchArea(props) {
  const [location, setLocation] = React.useState("");
  const [tideData, setTideData] = React.useState(null);

  async function handleSelection(locationString) {
    setTideData(null);
    // the line below me is the problem. help.
    try {
      const selectedLocale = props.stationList.find(
        item => item.Name === locationString
      );
      setLocation(selectedLocale.Name);

      let stuff = {};
      await axios
        .get(
          `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=today&station=${selectedLocale.stationNumber}&product=predictions&datum=MLLW&time_zone=lst_ldt&interval=hilo&units=english&format=json`
        )
        .then(res => {
          stuff = res.data;
        });
      try {
        await axios
          .get(
            `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=latest&station=${selectedLocale.stationNumber}&product=water_temperature&datum=STND&time_zone=lst&units=english&format=json`
          )
          .then(res => {
            stuff.temp = res.data.data[0].v;
          });
      } catch {
        stuff.temp = "Not Available from this station";
      }
      setTideData(stuff);
    } catch {
      setLocation(prevValue => {
        return prevValue;
      });
      setTideData(prevValue => {
        return prevValue;
      });
      console.log("Unexpected Input");
    }
  }

  function timeFormat(timeString) {
    let hour = timeString.slice(0, 2);
    let minutes = timeString.slice(2);
    if (hour < 12 && hour > 0) {
      if (hour < 10) {
        return `${hour.slice(1)}${minutes} AM`;
      } else {
        return `${hour}${minutes} AM`;
      }
    } else if (hour == 0) {
      return `12${minutes} AM`;
    } else if (hour > 12) {
      return `${hour - 12}${minutes} PM`;
    } else if (hour == 12) {
      return `12${minutes} PM`;
    }
  }

  const newDate = new Date();

  return (
    <div className={classes.mainArea}>
      <div className={classes.menuArea}>
        <SearchMenu list={props.stationList} onSelect={handleSelection} />
      </div>
      <div className={classes.displayArea}>
        {tideData ? (
          <div className={classes.data}>
            <h2>{location}</h2>
            <h3>
              {newDate.getMonth() + 1}/{newDate.getDate()}/
              {newDate.getFullYear()}
            </h3>
            {tideData.temp === "Not Available from this station" ? null : (
              <h3>Current Water Temp: {tideData.temp} °f</h3>
            )}
            <h3>Tide Information:</h3>
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Tide</th>
                  <th>Level</th>
                </tr>
              </thead>
              <tbody>
                {tideData.predictions.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{timeFormat(item.t.slice(-5))}</td>
                      <td>{item.type === "L" ? "Low" : "High"}</td>
                      <td>{item.v} ft</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <>
            <h3>Please Select Station</h3>
            <br /> <br />
          </>
        )}
      </div>
    </div>
  );
}
