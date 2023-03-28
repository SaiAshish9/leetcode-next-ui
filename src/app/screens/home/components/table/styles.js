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
    td {
      border-bottom: none;
    }
  }

  tr:nth-child(odd) {
    background: rgb(26 26 26);
    color: #fff;
    border-bottom: none;
    cursor: pointer;
    td {
      border-bottom: none;
    }
  }

  :where(.css-dev-only-do-not-override-mxhywb).ant-table-wrapper
    .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(
      .ant-table-row-expand-icon-cell
    ):not([colspan])::before,
  :where(.css-dev-only-do-not-override-mxhywb).ant-table-wrapper
    .ant-table-thead
    > tr
    > td:not(:last-child):not(.ant-table-selection-column):not(
      .ant-table-row-expand-icon-cell
    ):not([colspan])::before {
    width: 0px;
  }

  .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td,
  .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td,
  .ant-table-thead > tr:hover:not(.ant-table-expanded-row) > td,
  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {
    background: unset;
  }

  .anticon {
    color: #eff1f6bf;
    font-size: 0.6rem;
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
