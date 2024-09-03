import LineWithDots from '@/Restaurant/pages/reporting/LineWithDots '
import { TfiInfoAlt } from 'react-icons/tfi'

const MetricLi = ({ title, week1, week2 }) => {
    return (
        <div className="grid grid-cols-[310px_250px_200px_200px] gap-4 px-5 py-3 border-b border-[#CED7DE]">
            <div className="flex justify-between items-center">
                <p className="text-[#7991A4] class-base3">{title}</p>
            </div>
            <LineWithDots
                width={250}
                data={[0, 10]}
            />
            <div className="flex flex-col items-center">
                <p className="text-[#4A5E6D] text-sm font-numans font-medium">{week1 || "-"}</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-[#4A5E6D] text-sm font-numans font-medium">{week2 || "-"}</p>
            </div>
        </div>
    )
}

export default MetricLi