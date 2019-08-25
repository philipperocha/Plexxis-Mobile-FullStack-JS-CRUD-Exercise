import styled from 'styled-components';

export const TableStyle = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid #bbbbbb;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #bbbbbb;
      border-right: 1px solid #bbbbbb;
    }
  }
`

  // th,
  // td {
  //   margin: 0;
  //   padding: 0.5rem;
  //   border-bottom: 1px solid #bbbbbb;
  //   border-right: 1px solid #bbbbbb;

  //   :last-child {
  //     border-right: 0;
  //   }
  // }