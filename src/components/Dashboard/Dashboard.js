import React, { Component } from "react";
import style from "./Dashboard.module.css";
import { ReactComponent as Upd } from "../../images/emblemsynchronizing_93485.svg";
import shortid from "shortid";

export default class Dashboard extends Component {
  state = {
    database: [],
    cities: [],
    activity: [],
    isActiv: true,
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { data } = this.props;
      this.setState({ database: data });

      // get a list of cities
      const citiesTitle = data.map((el) => el.city.title);
      this.setState((prevState) => {
        for (let sity of citiesTitle) {
          if (!prevState.cities.includes(sity)) {
            prevState.cities.push(sity);
          }
        }
        return { cities: prevState.cities };
      });

      //   get a list of activity
      const activityTitle = data
        .map((el) => el.activity)
        .flat()
        .map((el) => el.title);
      this.setState((prevState) => {
        for (let item of activityTitle) {
          if (!prevState.activity.includes(item)) {
            prevState.activity.push(item);
          }
        }
        return { activity: prevState.activity };
      });
    }
  }

  handleFilterCity = (event) => {
    const { data } = this.props;
    const result = data.filter((el) => el.city.title === event.target.value);
    this.setState({ database: result });

    const resultActivity = result
      .map((el) => el.activity.map((el) => el.title))
      .flat();
    this.setState((prevState) => {
      prevState.activity = [];
      for (let item of resultActivity) {
        if (!prevState.activity.includes(item)) {
          prevState.activity.push(item);
        }
      }
      return { activity: prevState.activity };
    });

    this.setState({ isActiv: false });
  };

  handleFilterActivivty = (event) => {
    const { database } = this.state;

    const result = database.filter((el) => {
      const arr = el.activity.filter((el) => el.title === event.target.value);
      return arr.length > 0;
    });
    this.setState({ database: result });
  };

  updateCities = () => {
    const { data } = this.props;
    this.setState({ database: data });
    const activityTitle = data
      .map((el) => el.activity)
      .flat()
      .map((el) => el.title);
    this.setState((prevState) => {
      for (let item of activityTitle) {
        if (!prevState.activity.includes(item)) {
          prevState.activity.push(item);
        }
      }
      return { activity: prevState.activity };
    });
    this.setState({ isActiv: true });
  };

  render() {
    const { cities, activity, database, isActiv } = this.state;
    return (
      <div>
        <h1 className={style.title}>Instasport</h1>
        <div className={style.cities}>
          {!isActiv && (
            <button
              className={style.update}
              type="button"
              onClick={this.updateCities}
            >
              <Upd />
            </button>
          )}
          {cities.length > 0 &&
            cities.map((el) => (
              <button
                className={style.btnCity}
                type="button"
                value={el}
                onClick={this.handleFilterCity}
                key={shortid()}
              >
                {el}
              </button>
            ))}
        </div>
        <div className={style.cities}>
          {activity.map((el) => (
            <button
              className={style.btnActivity}
              type="button"
              value={el}
              onClick={this.handleFilterActivivty}
              key={shortid()}
            >
              {el}
            </button>
          ))}
        </div>
        <ul className={style.list}>
          {database.length >= 0 &&
            database.map((el) => (
              <li className={style.listItem} key={shortid()}>
                <a href={el.link} className={style.link}>
                  <img src={el.logo} alt="logo" />
                </a>
                <span className={style.caption}>{el.title}</span>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
