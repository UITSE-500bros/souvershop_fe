import React from "react";

type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

export default function Container({ title, children }: ContainerProps) {
  return (
    <div className="flex w-full flex-col justify-evenly rounded-md bg-white p-5 shadow-md">
      <span className="mb-5 text-xl font-medium">{title}</span>
      <div className="flex w-full flex-row gap-5">{children}</div>
    </div>
  );
}
