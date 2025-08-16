import CustomCard from "../../utils/Card/CustomCard";


const Azkar = () => {
    return (
        <CustomCard
            header="أذكار الصباح و المساء"
            className="h-full w-full flex flex-col items-center text-center min-h-full"
            headerClassName="text-lg font-bold mb-4"
            bodyClassName="flex-1 flex flex-col justify-center items-center gap-6 px-8"
        >
            <button className="w-full max-w-sm bg-darkPurple text-white py-4 px-6 rounded-xl border border-gold hover:bg-green transition-colors duration-200 font-medium text-lg">
                أذكار الصباح
            </button>
            <button className="w-full max-w-sm bg-darkPurple text-white py-4 px-6 rounded-xl border border-gold hover:bg-green transition-colors duration-200 font-medium text-lg">
                أذكار المساء
            </button>
        </CustomCard>
    );
};

export default Azkar;