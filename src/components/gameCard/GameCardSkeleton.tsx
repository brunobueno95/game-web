import React from "react";
import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card height={'100%'}>
      <Skeleton height="70%" />
      <CardBody height="30%">
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
