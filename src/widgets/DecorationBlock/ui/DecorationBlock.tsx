import { FC } from "react";
import classes from './DecorationBlock.module.scss';
import { SunSpan, SvgClouds } from "@/shared/ui";


const DecorationBlock: FC = () => {
  return (
    <div className={classes.decoration}>
        <SvgClouds position={'left'}/>
        <SvgClouds position={'center'}/>
        <SvgClouds position={'right'}/>
        <SunSpan />
    </div>
  );
};

export default DecorationBlock;