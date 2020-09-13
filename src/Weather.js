import React from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  return (
    <div>
      <form className="main-form row">
        <input
          className="form-control col-8"
          type="text"
          placeholder="Enter a city..."
        />
        <button type="button" className="btn btn-dark col-3">
          Search
        </button>
      </form>
      <div className="row">
        <ul className="col-4">
          <li>Miami, FL</li>
          <li>Thursday 14:00</li>
          <li>Clouds</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <ReactAnimatedWeather
            icon={"CLEAR_DAY"}
            color={"black"}
            size={50}
            animate={true}
          />
          <h1 className="degree">24 °C</h1>
        </div>
        <div className="col-6">
          <ul>
            <li>Wind: 5 km/hr</li>
            <li>Humidity: 95%</li>
          </ul>
        </div>
      </div>
      <div className="row forecast">
        <div className="col-2">
          {" "}
          25°C
          <div>
            <ReactAnimatedWeather
              icon={"RAIN"}
              color={"black"}
              size={50}
              animate={true}
            />
          </div>
        </div>
        <div className="col-2">
          27°C
          <div>
            <ReactAnimatedWeather
              icon={"CLOUDY"}
              color={"black"}
              size={50}
              animate={true}
            />
          </div>
        </div>
        <div className="col-2">
          24°C
          <div>
            <ReactAnimatedWeather
              icon={"WIND"}
              color={"black"}
              size={50}
              animate={true}
            />
          </div>
        </div>
        <div className="col-2">
          23°C
          <div>
            <ReactAnimatedWeather
              icon={"FOG"}
              color={"black"}
              size={50}
              animate={true}
            />
          </div>
        </div>
        <div className="col-2">
          23°C
          <div>
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"black"}
              size={50}
              animate={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
