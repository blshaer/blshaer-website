"use client";

import { Button } from "@/shared/ui";
import { RandomizedTextEffect } from "@/shared/ui/";
import FuzzyText from "@/shared/ui/effects/fuzzy-text";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
export default function NotFoundPage() {
  return (
    <>
      {/* Add structured data for the 404 page */}

      <div className="fixed w-screen h-screen bg-[var(--background)]  flex flex-col justify-center items-center  z-50 inset-0">
        <div className="flex flex-col items-center justify-center text-center">
          <FuzzyText
            fontSize={50}
            baseIntensity={0.2}
            hoverIntensity={2}
            enableHover={false}
          >
            404 | Page Not Found
          </FuzzyText>

          <RandomizedTextEffect
            className="mt-4 text-xl text-[var(--paragraph)]"
            text={"The page you are looking for doesn't exist."}
          />
          <div className="mt-8 w-max">
            <Link href="/">
              <Button>
                <IoArrowBack />
                <span>Back To HomePage</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
