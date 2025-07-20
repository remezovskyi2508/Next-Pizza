import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { Button } from "../ui";
import { Container } from "./container";
import { MoveRight, ShoppingCart, UserRound } from "lucide-react";

interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border, border-b", className)}>
      <Container className="flex justify-between items-center py-8">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">смачніше немає</p>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2 cursor-pointer">
            <UserRound size={16} /> Увійти
          </Button>
          <div>
            <Button className="group relative cursor-pointer">
              <b>120UAH</b>
              <span className="h-full w-[1px] bg-white/30 mx-3"></span>
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <MoveRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
export { Header };
