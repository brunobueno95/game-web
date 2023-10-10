import React from "react";
import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={10} height={"300px"} width={'400px'} overflow={'hidden'}>
      <Skeleton height="70%" />
      <CardBody height="30%">
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
