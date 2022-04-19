export function sanitizeColumnName(columnName) {
    return columnName
      .split("_")
      .map((splitName) => {
        if (splitName === "isopen") {
          return "is open";
        }
        return splitName;
      })
      .map((splitName) => splitName.charAt(0).toUpperCase() + splitName.slice(1))
      .join(" ");
  }
  
  export function sanitizeRowData(data) {
    if (typeof data === "boolean") {
      return data ? "1" : "0";
    } else if (data?.length === 0) {
      return "-";
    }
    return data;
  }
  