import styled from "styled-components";
import { Table } from "antd";

export const Container = styled.div`
  background-color: red;
  width: 100%;
  height: 50vh;
  margin-bottom: 3rem;
`;

export const StyledTableContainer = styled(Table)`
  tr:nth-child(even) {
    background: rgb(40 40 40);
    color: #fff;
    border-bottom: none;
    cursor: pointer;
    &:hover {
      background: rgb(40 40 40) !important;
    }
    td {
      &:hover {
        background: rgb(40 40 40) !important;
      }
      border-bottom: none;
    }
  }

  .ant-table-cell-row-hover:nth-child(even){ 
    background: rgb(40 40 40) !important;
  }

  .ant-table-cell-row-hover:nth-child(odd) {
    background: rgb(26 26 26) !important;
  }

  tr:nth-child(odd) {
    background: rgb(26 26 26);
    color: #fff;
    border-bottom: none;
    cursor: pointer;
    &:hover {
      background: rgb(26 26 26);
    }
    td {
      &:hover {
        background: rgb(26 26 26);
      }
      border-bottom: none;
    }
  }

  .ant-table-thead {
    .ant-table-cell {
      background: rgb(26 26 26) !important;
      color: #eff1f6bf;
      font-weight: 400;
    }
    th {
      border-start-start-radius: 0px !important;
    }
    th {
      border-top: none;
    }
    td:first-child,
    th:first-child {
      border-left: none;
    }
  }
  margin-bottom: 3rem;
`;
