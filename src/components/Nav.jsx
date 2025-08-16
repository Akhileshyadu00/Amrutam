import React from 'react'
import { CiWallet, CiShoppingCart } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuFlower } from "react-icons/lu";
import { Link } from "react-router-dom";

import { TiThSmallOutline } from "react-icons/ti";

function Nav() {
  return (
    <div>
        <div className=" bg-amber-50 py-10 text-green-800">
                  <div className="flex gap-4 text-3xl justify-center">
                  <Link to="/wallet" className="hover:text-amber-600 transition">
                    <TiThSmallOutline  />
                  </Link>
                  <Link to="/cart" className="hover:text-amber-600 transition">
                    <CiShoppingCart />
                  </Link>
                  <Link to="/notifications" className="hover:text-amber-600 transition">
                    <IoMdNotificationsOutline />
                  </Link>
                  <Link to="/rewards" className="hover:text-amber-600 transition">
                    <LuFlower />
                  </Link>
                </div>
              </div>
    </div>
  )
}

export default Nav
