import CustomCard from "../../utils/Card/CustomCard";
import styles from "./QuranWidget.module.css";
const QuranWidget = () => {
  return (
    <CustomCard
      backgroundColor="bg-quran"
      header="القرآن الكريم"
      className="w-full flex flex-col"
    >
      <form
        id="quranForm"
        className="flex-1 flex flex-col bp:flex-row gap-6 items-center justify-center"
      >
        {/* Dropdown */}
        <label htmlFor="dropdown">اختر السورة :</label>
        <select
          id="dropdown"
          name="dropdown"
          className="rounded-md border"
          required
        >
          <option className="text-center" value="">
            -- السورة --
          </option>
          <option value="option1">Options to be implemented</option>
        </select>
        {/* Username input */}
        <label htmlFor="username"> الآية:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="اختر الآية"
          className={`rounded-md border px-2 py-1 ${styles.input}`}
        />

        {/* Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-[#d4af37] rounded-md text-black"
        >
          اذهب
        </button>
      </form>
    </CustomCard>
  );
};

export default QuranWidget;
