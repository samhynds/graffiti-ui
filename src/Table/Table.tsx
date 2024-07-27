import styled from "styled-components";

export interface TableProps {
  data: {
    headings: string[];
    rows: (string | number | boolean)[][];
  };

  /**
   * Allows component to be extended by consumers.
   */
  className?: string;
}

const StyledTable = styled.table`
  border: 1px solid ${({ theme }) => theme.accents.border};
  border-radius: 0.25rem;
  border-spacing: 0;

  thead {
    text-align: left;
    color: ${({ theme }) => theme.accents.heading};

    th {
      padding: 0.625rem 1.25rem;
      font-weight: 500;
    }
  }

  tbody {
    tr {
      transition: background 200ms ease-out;
      &:hover {
        background: ${({ theme }) => theme.colors.slate[100]};
      }

      td {
        padding: 0.625rem 2rem 0.625rem 1.25rem;
        color: ${({ theme }) => theme.accents.text};
      }
    }
  }
`;

export const Table = ({ data, className }: TableProps) => {
  return (
    <StyledTable className={className}>
      <thead>
        <tr>
          {data.headings.map((heading, i) => (
            <th key={i}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, i) => (
              <td key={i}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
