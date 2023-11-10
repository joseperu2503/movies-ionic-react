import { Person } from "@/interfaces/person.interface";
import { getProfilePath } from "@/utils/utils";

interface Props {
  person: Person;
}

const PersonSearchItem = ({ person }: Props) => {
  return (
    <div className="flex gap-2 items-center">
      <img
        src={getProfilePath(person.profile_path)}
        className="w-12 h-12 object-cover rounded-full"
      />
      <div>{person.name}</div>
    </div>
  );
};

export { PersonSearchItem };
