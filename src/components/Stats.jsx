import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
    { name: "Grocery", amount: 70, color: "#2563eb" }, // Blue
    { name: "Transportation", amount: 50, color: "#dc2626" }, // Red
    { name: "Subscription", amount: 90, color: "#16a34a" }, // Green
];

export default function Stats() {
    return (
        <div className="w-full lg:w-[45%] mt-10 ml-1 bg-white shadow-lg p-4 rounded-lg">
            <h1 className="mb-5 text-lg font-semibold">What You Spend on Most</h1>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data} layout="vertical">
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" width={120} />
                    <Tooltip />
                    <Bar dataKey="amount" barSize={25} radius={[8, 8, 8, 8]}>
                        {data.map((entry, index) => (
                            <Cell key={index} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
