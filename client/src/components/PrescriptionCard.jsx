import { Card, CardContent } from "../components/ui/card";

export default function PrescriptionCard({ time, origin_time, medication_info }) {
    const origin_dateTime = new Date(origin_time);
    const dateTime = new Date(time);

    const options = { hour12: false, hour: '2-digit', minute: '2-digit', second: undefined };
    const meddate = origin_dateTime.toLocaleDateString();
    const exptime = origin_dateTime.toLocaleTimeString('en-US', options);
    const medtime = dateTime.toLocaleTimeString('en-US', options);

    let prescription;
    switch (exptime) {
        case "08:00":
            prescription = [
                { medication: "Sedative", amount: "3" },
                { medication: "Vitamin", amount: "2" },
                { medication: "Calcium", amount: "1" },
                { medication: "Supplement", amount: "3" }
            ];
            break;
        case "13:00":
            prescription = [
                { medication: "Antibiotics", amount: "2" },
                { medication: "Pain Reliever", amount: "1" },
                { medication: "Cold Madicine", amount: "1" }
            ]
            break;
        case "18:00":
            prescription = [
                { medication: "Antibiotics", amount: "2" }
            ]
            break;
        case "23:00":
            prescription = [
                { medication: "Sleeping Pills", amount: "3" }
            ]
            break;
        default:
            console.log(exptime);
            prescription = [
                { medication: "No Medication", amount: "0" }
            ];
    }

    const textColorClass = medication_info ? 'text-blue-500' : 'text-red-500';


    return (
        <Card className={`sm:min-w-[100px] md:min-w-[150px] lg:min-w-[300px] xl:min-w-[400px] 2xl:min-w-[600px]`}>
            <CardContent className="flex flex-col gap-2">
                <div className="text-2xl font-bold">{meddate}</div>
                <div className="flex flex-row items-center p-2">
                    <div className="flex-1 pr-8">
                        <div className={`text-xl font-bold pb-6 ${textColorClass}`}>{medication_info ? medtime + '已服藥' : '尚未服藥'}</div>
                        <div className="text-xl">預計 {exptime} 服藥</div>
                    </div>
                    <div className="flex-1 pl-8">
                        {prescription.map((prescription) => (
                            <p className="p-2">
                                {prescription.medication} {prescription.amount} p
                            </p>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}