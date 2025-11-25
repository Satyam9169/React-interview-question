import { useMemo } from "react";

const useBruteForceSearch = (students, filter) => {
  return useMemo(() => {
    const q = filter.toLowerCase().trim();
    if (!q) return students;

    return students.filter(student =>
      Object.values(student).some(value =>
        String(value).toLowerCase().trim() === q
      )
    );
  }, [students, filter]);
};

export default useBruteForceSearch;
