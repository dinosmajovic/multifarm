import { Container, StyledTooltip, Title, LoaderContainer } from "./styled";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import format from "date-fns/format";
import ClipLoader from "react-spinners/ClipLoader";

interface ChartProps<T> {
  data: T;
  loading: Boolean;
  error: Boolean;
  title: string;
  type: "currency" | "percentage";
  className?: string;
  domain: any;
}

const formatAmount = (num: number) => {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(2) + "K";
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(2) + "M";
  } else if (num < 900) {
    return num;
  }
};

const CustomTooltip = ({ payload, label, active, type }: any) => {
  if (active) {
    return (
      <StyledTooltip>
        <p>{format(new Date(label), "MMM dd yyyy")}</p>
        <p>
          {type === "currency"
            ? `Value: ${formatAmount(payload?.[0]?.value)}`
            : `Value: ${payload?.[0]?.value}%`}
        </p>
      </StyledTooltip>
    );
  }

  return null;
};

const Chart = <T extends Array<{ date: string; value: number }>>({
  data,
  loading,
  domain,
  title,
  type,
  className,
}: ChartProps<T>) => {
  const reversedData = [...data].reverse();

  const formatYAxis = (value: string) => {
    if (type === "percentage") {
      return `${Math.round(Number(value)).toFixed(2)}%`;
    } else {
      return `${formatAmount(Math.round(Number(value)))}`;
    }
  };

  const formatXAxis = (value: string) => {
    return format(new Date(value), "MMM dd");
  };

  return (
    <Container className={className}>
      <Title>{title}</Title>
      {loading && (
        <LoaderContainer>
          <ClipLoader color="#d750ff" size={35} />
        </LoaderContainer>
      )}
      {!loading && (
        <ResponsiveContainer>
          <AreaChart width={500} height={400} data={reversedData}>
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DC4DFF" stopOpacity="0.1"></stop>
                <stop
                  offset="100%"
                  stopColor="#4DBFFF"
                  stopOpacity="0.3"
                ></stop>
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#41486e" />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#d750ff"
              fill="url(#gradient)"
              strokeWidth={2}
              strokeLinecap="round"
            />

            <XAxis
              dataKey="date"
              padding={{ left: 0 }}
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={formatXAxis}
              tick={{ fill: "#B2BDFF", fontSize: "10px", textAnchor: "middle" }}
              type="category"
            />
            <YAxis
              width={42}
              axisLine={false}
              tickLine={false}
              tickFormatter={formatYAxis}
              domain={domain}
              tick={{ fill: "#B2BDFF", fontSize: "10px" }}
            />

            <Tooltip content={<CustomTooltip type={type} />} />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </Container>
  );
};

export default Chart;
