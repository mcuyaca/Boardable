import * as React from "react";
import threeDot from "../assets/images/tree-dot.svg";
import { Input } from "../components/Input";
import BoardMenu from "../components/BoardMenu";
import TaskList from "../components/TaskList";
import { Button } from "../components/Button";
import UserLayout from "../layout/UserLayout";

function BoardCanvas() {
  return (
    <UserLayout>
      <section className="flex h-full w-full flex-col gap-4 bg-color2 px-20 pt-4">
        <div className="flex items-center gap-4 ">
          <h2 className="flex text-2xl font-bold">My Board title</h2>
          <div className="relative">
            <img className="h-2 w-4" src={threeDot} alt="" />
            <BoardMenu />
          </div>
        </div>

        <section className="flex flex-wrap gap-8 pt-4">
          <div className="bg-muted flex h-fit w-[280px] flex-col gap-2 rounded-md p-2">
            <div className=" flex items-center justify-between px-4">
              <h3 className="text-lg font-semibold">To Do</h3>
              <img className="h-2 w-4" src={threeDot} alt="" />
            </div>
            <div className=" flex items-center justify-between rounded-md bg-background p-2 shadow-menu">
              <p className="">Mi primera tarjeta </p>
              <div className="relative flex items-center justify-center">
                <img className="h-2 w-4" src={threeDot} alt="" />
                <BoardMenu />
              </div>
            </div>

            <div>
              <p className="pl-2 font-semibold text-muted-foreground">
                + Add a card
              </p>
            </div>
          </div>

          <TaskList />

          <div className="bg-muted flex h-fit w-[280px] flex-col gap-2 rounded-md p-2 ">
            <div className=" flex items-center justify-between px-4">
              <h3 className="text-lg font-semibold">To Do</h3>
              <img className="h-2 w-4" src={threeDot} alt="" />
            </div>
            <div className=" flex items-center justify-between rounded-md bg-background p-2 shadow-menu">
              <p className="">Otra tarjeta más </p>
              <div className="relative flex items-center justify-center">
                <img className="h-2 w-4" src={threeDot} alt="" />
                {false && <BoardMenu />}
              </div>
            </div>

            <div className="flex w-full items-center justify-between rounded-md bg-background p-2 shadow-menu">
              <div className="flex w-full flex-col gap-2">
                <label className="text-sm" htmlFor="">
                  Card Title
                </label>
                <Input type="text" />
                <div className="flex gap-2">
                  <Button buttonText="Add card" />
                  <Button variant="secondary" buttonText="Cancel" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted flex h-fit w-[280px] flex-col gap-2 rounded-md p-2 ">
            <div className="flex w-full flex-col gap-2">
              <label className="text-sm" htmlFor="">
                Card Title
              </label>
              <Input type="text" />
              <div className="flex gap-2">
                <Button buttonText="Create new List" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </UserLayout>
  );
}

export default BoardCanvas;
