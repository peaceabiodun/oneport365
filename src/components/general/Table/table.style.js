import styled from "styled-components";

export const TableWrapper = styled.div`
  height: ${(props) => (props.extendMinHeight ? "100%" : "")};
  width: 100%;
  padding-bottom: 30px;

  .hub-section-table {
    .rdt_TableCell,
    .rdt_TableCol,
    .rdt_TableCol_Sortable {
      flex-grow: 3;
    }
    .rdt_TableCell:last-child,
    .rdt_TableCol:last-child,
    .rdt_TableCol_Sortable:last-child {
      flex-grow: 1;
    }
  }
  .overview-section-table,
  .txn-section-table,
  .subtxn-section-table {
    .rdt_TableCell,
    .rdt_TableCol,
    .rdt_TableCol_Sortable {
      flex-grow: 3;
    }
  }

  @media (max-width: 767px) {
    .order-section-table {
      .rdt_TableCell:first-child,
      .rdt_TableCol:first-child,
      .rdt_TableCol_Sortable:first-child {
        flex-grow: 3;
      }

      .rdt_TableCell:last-child,
      .rdt_TableCol:last-child,
      .rdt_TableCol_Sortable:last-child {
        flex-grow: 3;
      }
      .rdt_TableCell > div {
        min-width: 100%;
        height: 100%;
      }
    }
  }
  .customer-overview-table {
    .rdt_TableCell,
    .rdt_TableCol,
    .rdt_TableCol_Sortable {
      flex-grow: 5;
    }
    .rdt_TableCell:last-child,
    .rdt_TableCol:last-child,
    .rdt_TableCol_Sortable:last-child {
      flex-grow: 1;
    }
    .rdt_Table {
      padding: 0 !important;
    }
  }
  .request-overview-table {
    .rdt_Table {
      padding: 0 5px !important;
    }
  }
  .table-container {
    margin-bottom: 24px;
    background: #fff;
    border: 0.5px solid #e1e1e1;
    border-radius: 8px;
    width: 100%;
  }

  .rdt_Table {
    padding: 0 24px;
    border-radius: 8px;
    height: 100%;
  }
  .customer-overview-table {
    .rdt_TableHead {
      display: flex;
    }
  }
  @media (max-width: 639px) {
    .rdt_TableRow {
      padding-top: 5px !important;
      padding-bottom: 5px !important;
    }
    .rdt_TableHead {
      display: none;
    }
    .rdt_TableCell:last-child,
    .rdt_TableCol:last-child,
    .rdt_TableCol_Sortable:last-child {
      flex-grow: 3;
    }
  }
  @media (max-width: 639px) {
    .txn-section-table,
    .hub-section-table {
      .rdt_Table {
        padding: 5px !important;
      }
      .rdt_TableCell,
      .rdt_TableCol,
      .rdt_TableCol_Sortable {
        flex-grow: 1;
      }
    }
  }
  .rdt_TableHeadRow,
  .rdt_TableRow {
  }

  .rdt_TableHeadRow {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    .rdt_TableCol {
      font-family: "HelveticaNeueCyr";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #65717c;
      height: 72px;
    }
  }

  .rdt_TableRow {
    .rdt_TableCell {
      font-family: "HelveticaNeueCyr";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      align-items: center;
      color: #000000;
      height: 62px;
    }
  }
`;

export const PaginationWrapper = styled.div`
  .react-paginate {
    display: flex;

    .pagination-page-item,
    .page-item-break {
      margin-right: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      a {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        border-radius: 2px;
        color: #65717c;
        width: 33.49px;
        height: 42px;
        background: #fff;
        padding: 10px;
        text-align: center;
      }
    }

    .pagination-page-item.active-page {
      a {
        color: #000000;
      }
    }
  }
`;
