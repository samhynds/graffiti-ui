import styled from "styled-components";

export interface TableProps {
  data: {
    headings: string[];
    rows: (string | number | boolean)[][];
  };
}

const StyledTable = styled.table`
  border: 1px solid ${(props) => props.theme.colors.grey.light};
  border-radius: 0.25rem;
  border-spacing: 0;

  thead {
    text-align: left;
    color: ${(props) => props.theme.colors.grey.mid};

    th {
      padding: 0.625rem 1.25rem;
      font-weight: 500;
    }
  }

  tbody {
    tr {
      transition: background 200ms ease-out;
      &:hover {
        background: ${(props) => props.theme.colors.grey.xlight};
      }

      td {
        padding: 0.625rem 2rem 0.625rem 1.25rem;
        color: ${(props) => props.theme.colors.grey.dark};
      }
    }
  }
`;

export const Table = ({ data }: TableProps) => {
  return (
    <StyledTable>
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
