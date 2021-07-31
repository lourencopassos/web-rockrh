import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
import { useTheme, styled } from "@material-ui/core/styles";
import { Card, CardHeader, Box } from "@material-ui/core";
//
import BaseOptionChart from "./BaseOptionsGraph";

// ----------------------------------------------------------------------

const CHART_HEIGHT = 392;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled("div")(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(2),
  "& .apexcharts-canvas svg": {
    height: CHART_HEIGHT,
  },
  "& .apexcharts-canvas svg,.apexcharts-canvas foreignObject": {
    overflow: "visible",
  },
  "& .apexcharts-legend": {
    height: LEGEND_HEIGHT,
    alignContent: "center",
    position: "relative !important",
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

// ----------------------------------------------------------------------

const CHART_DATA = [{ name: "31/07/2021", data: [4, 4, 3.5, 5, 4] }];
const CATEGORIES = [
  "Proatividade",
  "Motivação",
  "Atendimento ao Cliente",
  "Organização Diária",
  "Fechamento de vendas",
];

export default function FeedbackCard() {
  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: 2 },
    fill: { opacity: 0.48 },
    legend: { floating: true, horizontalAlign: "center" },
    xaxis: {
      categories: CATEGORIES,
      labels: {
        style: {
          colors: [
            theme.palette.text.secondary,
            theme.palette.text.secondary,
            theme.palette.text.secondary,
            theme.palette.text.secondary,
            theme.palette.text.secondary,
            theme.palette.text.secondary,
          ],
        },
      },
    },
  });

  return (
    <Card>
      <CardHeader title="Avaliação recebida" />
      <ChartWrapperStyle dir="ltr">
        <ReactApexChart
          type="radar"
          series={CHART_DATA}
          options={chartOptions}
          height={340}
        />
      </ChartWrapperStyle>
      <Box sx={{ p: 2, textAlign: "right" }}>
        <h3>Média 4.5</h3>
      </Box>
    </Card>
  );
}
