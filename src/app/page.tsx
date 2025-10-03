"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function datafetch() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get("https://www.random.org/strings/?num=10&len=32&upperalpha=on&unique=off&format=plain")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  console.log(data)

  return (
    <div>
      {data}
    </div>
  );
}
