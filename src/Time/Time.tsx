import styled from "styled-components";
import { getRelativeTimeString } from "./getRelativeTimeString";

export interface TimeProps {
  date: Date;
  relative?: boolean;
}

const StyledTime = styled.time``;

/**
 * Represents either an absolute or relative time in your locale.
 */
export const Time = ({ date, relative = false }: TimeProps) => {
  return (
    <StyledTime dateTime={date.toISOString()}>
      {relative ? getRelativeTimeString(date) : date.toLocaleString()}
    </StyledTime>
  );
};
