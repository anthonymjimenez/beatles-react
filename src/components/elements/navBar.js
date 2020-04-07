import React from "react";
import CustomBar from "../style/CustomBar"
import CustomLink from "../style/CustomLink";
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
      <div>
      <CustomBar>
          <CustomLink>
          <Link to = '/'>
            <li>
              Home
            </li>
          </Link>
          <Link to = '/revolver'>
            <li>
              Revolver
            </li>
            </Link>
            <Link to = '/yellowsub'>
          <li>
              Yellow Submarine
            </li>
            </Link>
            <Link to = '/abbeyroad'>
          <li>
              Abbey Toad
            </li>
            </Link>
            </CustomLink>

            </CustomBar>
      
      </div>

    )
}

