import React from "react";

function usePageTitle(page) {
  React.useEffect(() => {
    const defaultTitle = document.title;
    document.title = page + ` | ${defaultTitle}`;
    return () => {
      document.title = defaultTitle;
    };
  }, [page]);
}

export default usePageTitle;
