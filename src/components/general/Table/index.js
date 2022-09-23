import DataTable, { createTheme } from "react-data-table-component";
import PropTypes from "prop-types";
import clsx from "classnames";
import { TableWrapper} from "./table.style";

createTheme("default", {
  text: {
    primary: "#65717c",
    secondary: "#000000",
  },
  background: {
    default: "transparent",
  },
  divider: {
    default: "rgba(245, 246, 250, 1);",
  },
  action: {
    hover: "yellow",
  },
});

const renderMobileRows = (mobileRowRender, keyField, data, otherProps) => {
  const onRowPress = (row) => {
    if (otherProps?.onRowClicked) {
      otherProps.onRowClicked(row);
    }
  };
  return (
    <div>
      {data.map((row, index) => (
        <div
          onClick={() => onRowPress(row)}
          key={row[keyField]}
          className={clsx({ "cursor-pointer": otherProps?.onRowClicked })}
        >
          {mobileRowRender(row, index)}
        </div>
      ))}
    </div>
  );
};

export default function Table({
  columns,
  data,
  extendMinHeight,
  isLoading,
  extraChild,
  pageCount,
  onPageChange,
  currentPage,
  tableClassName,
  isAlt,
  mobileRowRender,
  keyField,
  ...rest
}) {
  return (
    <TableWrapper extendMinHeight={extendMinHeight}>
      <div className={`${isAlt ? "" : "table-container"} ${tableClassName}`}>
        <div className="hidden md:block">
          <DataTable
            columns={columns}
            data={data}
            theme="default"
            progressPending={isLoading}
            progressComponent={<h1>Loading...</h1>}
            {...rest}
          />
          {extraChild}
        </div>
        <div className="block md:hidden">
          {mobileRowRender ? (
            renderMobileRows(mobileRowRender, keyField, data, rest)
          ) : (
            <div>
              <DataTable
                columns={columns}
                data={data}
                theme="default"
                progressPending={isLoading}
                progressComponent={<h1>Loading...</h1>}
                {...rest}
              />
            </div>
          )}
          {extraChild}
        </div>
      </div>

      
    </TableWrapper>
  );
}

Table.propTypes = {
  extendMinHeight: PropTypes.bool,
  columns: PropTypes.array,
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  rest: PropTypes.object,
  extraChild: PropTypes.elementType,
  pageCount: PropTypes.number,
  onPageChange: PropTypes.func,
  currentPage: PropTypes.number,
  isAlt: PropTypes.bool,
  tableClassName: PropTypes.string,
  mobileRowRender: PropTypes.func,
  keyField: PropTypes.string,
};
