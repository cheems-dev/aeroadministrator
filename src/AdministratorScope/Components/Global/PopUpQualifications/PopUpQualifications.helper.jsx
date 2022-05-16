import { variables } from "../../../config/variables";

const { palette, fonts } = variables;

/* IMPORTANT: Customize char */
export const options = {
  chart: {
    id: "apexchart-example",
  },
  xaxis: {
    categories: ["0%", "20%", "40%", "60%", "80%", "100%"],
    labels: {
      style: {
        colors: palette.white,
        fontSize: "24px",
        marginTop: "4px",
        border: "none",
        fontFamily: fonts["Nova-Lt"],
      },
    },
  },
  yaxis: [
    {
      axisTicks: {
        show: true,
      },
      labels: {
        style: {
          colors: palette.white,
          fontSize: "24px",
          marginLeft: "4px",
          fontFamily: fonts["Nova-Lt"],
          border: "none",
        },
      },
    },
  ],
  grid: {
    row: {
      colors: [
        palette.containerColor,
        palette.colorDegraded,
        palette.colorDegradedTwo,
        palette.colorDegradedTree,
      ],
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "horizontal",
      shadeIntensity: 1,
      opacityFrom: 1,
      opacityTo: 1,
      colorStops: [
        {
          offset: 10,
          color: palette.grSecond1.c1,
          opacity: 1,
        },
        {
          offset: 55,
          color: palette.grSecond1.c2,
          opacity: 1,
        },
        {
          offset: 90,
          color: palette.grSecond1.c3,
          opacity: 1,
        },
      ],
    },
  },
};

/* IMPORTANT: 'series' use chart */
export const series = [
  {
    name: "series-1",
    data: [0, 20, 40, 60, 80, 100],
  },
];

/* TODO: delete */
export const userLabels = [
  { id: 1, name: "Javier Perez Cuellar" },
  { id: 2, name: "Aleman Cuellar" },
  { id: 3, name: "Gaby Jimenez" },
];

/* Color tables */
export const colors = [
  palette.colorDegradedTwo,
  palette.colorDegraded,
  palette.containerColor,
  palette.colorDegradedFour,
];

/* TODO: Labels table header */
export const labels = [
  { name: "Avance %", key: "progress" },
  { name: "Test", key: "test" },
  { name: "Nota", key: "note" },
  { name: "Valor test", key: "valueTest" },
  { name: "Nota test.", key: "noteTest" },
];

/* TODO: Labels table body */
export const dataFake = [
  {
    id: 1,
    progress: 35,
    test: 1,
    note: 18,
    value_test: 0.2,
    note_test: 3.0,
  },
  {
    id: 2,
    progress: 75,
    test: 2,
    note: 14,
    value_test: 0.35,
    note_test: 4.9,
  },
  {
    id: 3,
    progress: 100,
    test: 3,
    note: 18,
    value_test: 0.45,
    note_test: 8.1,
  },
];
