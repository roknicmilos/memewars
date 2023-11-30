"use client";

import React, { useEffect, useState } from "react";
import styles from "./wars.module.scss";
import { War } from "@/api/models/War";
import { WarCard } from "@/app/wars/war-card/WarCard";
import { Navigation } from "@/components/navigation/Navigation";


export default function Wars() {
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const [ containerStyle, setContainerStyle ] = useState<object>({});
  const [ wars, setWars ] = useState<War[]>([]);

  useEffect(() => {
    if (isLoading) {
      // TODO: fetch and set wars
    } else if (wars.length < 3) {
      setContainerStyle({ justifyContent: "center" });
    }
  }, [ isLoading, wars ]);

  return (
    <>
      <Navigation/>
      <div className={ styles.container } style={ containerStyle }>
        { wars && wars.length ? (
          wars.map(war => (<WarCard key={ war.id } war={ war }/>))
        ) : (
          <div className={ styles.peaceTime }>
            <p>This is a time of peace...</p>
            <p>Because there are no meme wars yet</p>
          </div>
        ) }
      </div>
    </>
  );
}
