import styles from "./war-card.module.scss";
import React from "react";
import Link from "next/link";
import { War } from "@/api/models/War";

interface WarCardProps {
  war: War;
}

export function WarCard({ war }: WarCardProps) {
  const phaseClasses = [ styles.warPhase, styles[`${ war.phase }Phase`] ].join(" ");

  return (
    <Link key={ war.id } className={ styles.warCard } href={ `/wars/${ war.id }` }>
      <span className={ styles.warName }>{ war.name }</span>
      <span className={ phaseClasses }>{ war.phase }</span>
    </Link>
  );
}
