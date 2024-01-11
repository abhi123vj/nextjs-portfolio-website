import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      {/* // hero section */}
      <section className="flex items-center max-width flex-col-reverse tablet:flex-row mb-10">
        {/* {left side} */}
        <div className="tablet:w-2/3 mt-10 tablet:mt-0">
          <div className="flex flex-col  gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left">
            <p className="px-4 py-2 bg-peach-500 text-grey-600 w-max rounded">
              Hello There 🤗
            </p>
            <h1 className="text-grey">S Abhiram welcome&apos;s you</h1>
            <p className="text-grey-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, perferendis neque! Voluptate quibusdam, quaerat, quas
              ipsam est libero deserunt alias autem unde quis molestiae
              voluptates commodi, atque possimus minima vero!
            </p>
          </div>
          <div className="flex gap-5 mt-10 justify-center tablet:justify-start">
            <Link href={"/contacts"} className="btn btn-primary">
              <Phone />
              Contact now
            </Link>
            <Link href={"/contacts"} className="btn ">
              View Portfolio
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        {/* {right side} */}
        <div className="relative w-full tablet:w-1/3 h-[400px] tablet:h-[700px] rounded-b-2xl overflow-hidden">
          <Image
            src={"/images/hero.png"}
            alt="hero"
            fill
            className="object-cover"
          />
        </div>
      </section>
      {/* Skill section */}
    </>
  );
};

export default page;
