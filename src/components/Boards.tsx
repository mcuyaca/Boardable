import BoardList from "./BoardList";
import PageName from "./PageName";

function Boards() {
  return (
    <section className="pl-[208px]">
      <PageName page="My Boards">
        <div className="flex flex-col gap-2">
          <label className="text-sm" htmlFor="sort">
            Sort By
          </label>
          <select
            className="rounded-md border border-ring bg-background px-3 py-2 text-sm"
            name="sort"
            id="sort"
          >
            <option value="date">Created date</option>
            <option value="Alphabetical"> Alphabetical</option>
          </select>
        </div>
      </PageName>

      <BoardList />
    </section>
  );
}

export default Boards;
