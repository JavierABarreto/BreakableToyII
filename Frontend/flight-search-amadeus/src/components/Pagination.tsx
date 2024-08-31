import useSearchParams from "../Hooks/useSearchParams";

export const Pagination = ({ nPages, currentPage }: any) => {
  let { params, setParams }: any = useSearchParams();
  
  const pag = () => {
    const pagNums = []

    for(let i = 0; i < nPages; i++) {
      pagNums.push(<li key={"pagination-"+(i+1)}><button type="button" className="btn btn-link" 
                       onClick={() => getTodosByPage(i+1)}>{i+1}</button></li>)
    }

    return pagNums
  }

  const getTodosByPage = async (n: number) => {
    let limit = n * 10;
    params.max = limit;
    
    setParams(params);
  }

  const changePage = async (dir: string) => {
    if( dir == "n" ){
      if (currentPage != nPages) {
        getTodosByPage(currentPage + 1)
      }
    } else {
      if (currentPage != 1) {
        getTodosByPage(currentPage - 1)
      }
    }
  }

  return (
    <div className="mx-4 mb-3">
      <div className="d-flex justify-content-center">
        <ul className="pagination border px-5 py-3">
          <li>
            <button type="button" className="btn btn-link" onClick={() => changePage("p")} disabled = { currentPage == 1 ? true : false }>&laquo;</button>
          </li>

          {
            pag()
          }

          <li>
            <button type="button" className="btn btn-link" onClick={() => changePage("n")} disabled={currentPage == nPages ? true : false}>&raquo;</button>
          </li>
        </ul>
      </div>
    </div>
  )
}