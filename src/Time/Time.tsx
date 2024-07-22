import styled from "styled-components";
import { getRelativeTimeString } from "./getRelativeTimeString";

export interface TimeProps {
  date: Date;
  relative?: boolean;

  /**
   * Allows component to be extended by consumers.
   */
  className?: string;
}

const StyledTime = styled.time``;

/**
 * Represents either an absolute or relative time in your locale.
 */
export const Time = ({ date, relative = false, className }: TimeProps) => {
  return (
    <StyledTime dateTime={date.toISOString()} className={className}>
      {relative ? getRelativeTimeString(date) : date.toLocaleString()}
    </StyledTime>
  );
};
