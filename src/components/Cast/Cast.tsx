import { Person } from "@/interfaces/credits.interface";

interface Props {
  cast: Person[];
}
const Cast = ({ cast }: Props) => {
  return (
    <>
      {cast.length! > 0 && (
        <div>
          <div className="font-semibold mt-6">Cast and Crew</div>
          <div className="overflow-x-scroll mt-4">
            <div className="flex w-max gap-4">
              {cast.map((actor) => {
                return (
                  <div key={actor.id} className="flex items-center gap-2">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${actor?.profile_path}`}
                      alt=""
                      className="w-10 h-10 object-cover rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="text-sm font-semibold">{actor.name}</div>
                      <div className="text-xs font-medium text-grey">{actor.character}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { Cast };
