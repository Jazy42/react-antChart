import React from "react";
import { data } from "./data";
import { Pie, measureTextWidth } from "@ant-design/plots";

const DonutPlot = () => {
  const placeHolder = data.reduce((prev, country) => {
    return {
      ...prev,
      [country[0]]: {
        visits: 0,
      },
    };
  }, []);

  data.forEach((item) => (placeHolder[item[0]].visits += 1));
  const data_ = Object.keys(placeHolder).reduce((prev, key) => {
    return [
      ...prev,
      {
        country: key,
        visits: placeHolder[key].visits,
      },
    ];
  }, []);

  const config = {
    appendPadding: 10,
    data: data_,
    angleField: "visits",
    colorField: "country",
    radius: 1,
    innerRadius: 0.64,
    meta: {
      value: {
        formatter: (v) => `${v} %`,
      },
    },
    label: {
      type: "inner",
      offset: "-50%",
      style: {
        textAlign: "center",
      },
      autoRotate: false,
      content: "{value}",
    },
  };

  return <Pie {...config} />;
};

export default DonutPlot;
