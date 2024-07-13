import styled from "styled-components";

export interface ProfilePicProps {
  src: string;
  alt?: string;
  $size: string;
}

const StyledProfilePic = styled.img<Pick<ProfilePicProps, "$size">>`
  border-radius: ${({ $size }) => `calc(${$size}/2)`};
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
`;

/**
 * A small round image used to represent the profile picture of a user.
 */
export const ProfilePic = ({
  src,
  alt,
  $size,
}: ProfilePicProps): JSX.Element => {
  return <StyledProfilePic src={src} alt={alt} $size={$size} />;
};
