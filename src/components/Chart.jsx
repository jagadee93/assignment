
import { LineChart, Line, XAxis, YAxis, Tooltip, Label, Legend } from 'recharts';

const LineChartComponent = ({ data }) => {
    return (
        <div className="chart-container">
            <LineChart
                width={600}
                height={350}
                data={data}
                margin={{ top: 30, right: 30, bottom: 50, left: 50 }}
            >
                <XAxis dataKey="Year">
                    <Label value="Years" offset={0} position="insideBottom" />
                </XAxis>
                <YAxis dataKey="Medals">
                    <Label value="Medals Won" angle={-90} position="insideLeft" />
                </YAxis>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Medals" name="Medals Won" stroke="#ff7300" />
            </LineChart>
        </div>

    );
};

export default LineChartComponent;
