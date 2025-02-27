import ReactPaginate from "react-paginate";
import { useRouter, useSearchParams } from "next/navigation";

type paginationProps = {
  currentPage: number;
};

export default function Pagination({ currentPage }: paginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = ({ selected }: { selected: number }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", (selected + 1).toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <ReactPaginate
      containerClassName="pagination"
      activeClassName="active-page"
      disabledLinkClassName="disabled-page"
      breakLabel="..."
      breakLinkClassName="break-pagination"
      nextLabel="next"
      onPageChange={handlePageChange}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={10}
      previousLabel="previous"
      renderOnZeroPageCount={null}
      forcePage={currentPage - 1}
    />
  );
}
