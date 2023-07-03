"use client";

import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import Link from "next/link";


export default function Logo() {

  return (
    <Link href="/">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-bold tracking-tighter">Uruguay</p>
        <p className="-mt-2 text-2xl font-medium tracking-wider text-first-color">In Wines</p>
      </div>
    </Link>
  )
}
