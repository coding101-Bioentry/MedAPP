import { Card, CardContent } from "../components/ui/card";

export default function TimesCard({ time }) {

    let prescription;
    switch (time) {
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
                { medication: "Antibiotics", amount: "2" },
                { medication: "Cold Madicine", amount: "1" }
            ]
            break;
        case "23:00":
            prescription = [
                { medication: "Sleeping Pills", amount: "3" }
            ]
            break;
        default:
            prescription = [
                { medication: "No Medication", amount: "0" }
            ];
    }



    return (
        <Card className={`sm:min-w-[100px] md:min-w-[150px] lg:min-w-[300px] xl:min-w-[400px] 2xl:min-w-[750px]`}>
            <CardContent className="flex flex-col gap-2 ml-8">
                <div className="flex flex-row items-center p-2">
                    <div className="flex-1 pr-8">
                        <div className="text-xl">預計 {time} 服藥</div>
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