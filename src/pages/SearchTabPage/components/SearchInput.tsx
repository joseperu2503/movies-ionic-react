import searchIcon from "@/assets/tabs/search.svg";
import { IonIcon } from "@ionic/react";
import { ChangeEvent } from "react";

interface Props {
  searchValue: string;
  changeSearchValue: (value: string) => void;
}

const SearchInput = ({ searchValue, changeSearchValue }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-full h-[41px] bg-primary-soft rounded-full flex items-center px-4 py-3 gap-2">
        <IonIcon aria-hidden="true" src={searchIcon} className="h-6 w-6" />
        <input
          type="text"
          placeholder="Type title, categories, years, etc"
          value={searchValue}
          onInput={(event: ChangeEvent<HTMLInputElement>) =>
            changeSearchValue(event.target.value)
          }
          className="bg-transparent outline-none text-sm font-medium placeholder:text-grey text-white w-full"
        />
      </div>
      {searchValue.length > 0 && (
        <div
          className="text-white text-xs"
          onClick={() => changeSearchValue("")}
        >
          Cancel
        </div>
      )}
    </div>
  );
};

export { SearchInput };
