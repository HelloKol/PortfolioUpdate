import React from "react";
const data = [
  {
    number: "01",
    name: "E-commerce",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime natus inventore totam magnam optio delectus quae impedit numquam nam pariatur obcaecati animi aliquid, enim veniam iure minus, adipisci nihil consectetur error. Vero ipsam ex vitae velit, sit dolore provident?",
  },
  {
    number: "02",
    name: "Moviezen",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime natus inventore totam magnam optio delectus quae impedit numquam nam pariatur obcaecati animi aliquid, enim veniam iure minus, adipisci nihil consectetur error. Vero ipsam ex vitae velit, sit dolore provident?",
  },
  {
    number: "03",
    name: "Clothing store",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime natus inventore totam magnam optio delectus quae impedit numquam nam pariatur obcaecati animi aliquid, enim veniam iure minus, adipisci nihil consectetur error. Vero ipsam ex vitae velit, sit dolore provident?",
  },
  {
    number: "04",
    name: "Jewelry store",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime natus inventore totam magnam optio delectus quae impedit numquam nam pariatur obcaecati animi aliquid, enim veniam iure minus, adipisci nihil consectetur error. Vero ipsam ex vitae velit, sit dolore provident?",
  },
];

export default function Works() {
  return (
    <div className="text-white py-64">
      {data.map((item) => (
        <div class="grid grid-rows-3 grid-flow-col gap-2 mb-20">
          <div class="row-span-3 place-self-center">
            <h1 className="text-gray-800 text-9xl">{item.number}</h1>
          </div>
          <div class="col-span-2">
            <h1 className="">{item.name}</h1>
            <hr />
          </div>
          <div class="row-span-2 col-span-2">
            <p className="">{item.desc}</p>
          </div>
        </div>
      ))}

      <a href="#a">View all</a>
    </div>
  );
}
