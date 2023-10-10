import React from "react";
import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const ScoreMeta = ({ score }: Props) => {
    const color = score > 75 ? 'green' : score > 60 ? 'yellow' : " ";
  return <Badge px={2} py={0.5} colorScheme={color}>{score}</Badge>;
};

export default ScoreMeta;
