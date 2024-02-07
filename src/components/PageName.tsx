import * as React from "react";

function PageName({
  page,
  children,
}: {
  page: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex w-[155px] flex-col gap-4">
      <h2 className="text-2xl font-bold  ">{page}</h2>
      {children}
    </div>
  );
}

export default PageName;
