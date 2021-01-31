import { helper } from "@ember/component/helper";

function pager([entriesCount, currentPage, pageCount, pagerLength]) {
	
	pagerLength = pagerLength || 10;

    // calculate total page count
    const totalPages = Math.ceil(entriesCount / pageCount);
    // middle page based on pagerLength
    const middle = Math.ceil(pagerLength / 2);

    // deriving first & last page
    let firstPage, lastPage;

    if (totalPages <= pagerLength) {
        firstPage = 1;
        lastPage = totalPages;
    } else {
        if (currentPage <= middle + 1) {
            firstPage = 1;
            lastPage = pagerLength;
        } else if (currentPage + (middle - 1) >= totalPages) {
            firstPage = totalPages - (pagerLength - 1);
            lastPage = totalPages;
        } else {
            firstPage = currentPage - middle;
            lastPage = currentPage + (middle - 1);
        }
    }

    // Deriving actual pager
    const pages = [];
    for (let page = firstPage; page <= lastPage; page++) {
    	pages.push({
    		page,
    		class: page === currentPage ? 'active' : ''
    	});
	}

    return {
    	first: {show: currentPage > 2, page: firstPage},
		prev: {show: currentPage > 1, page: currentPage - 1},
		next: {show: currentPage < lastPage, page: currentPage + 1},
		last: {show: currentPage < lastPage - 2, page: lastPage},
        pages
    }
}

export default helper(pager);