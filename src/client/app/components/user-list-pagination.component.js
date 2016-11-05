import React from 'react';

class Pagination extends React.Component {
    constructor() {
        super();
        this.selectPage = this.selectPage.bind(this);
        this.selectPreviousPage = this.selectPreviousPage.bind(this);
        this.selectNextPage = this.selectNextPage.bind(this);
    }

    selectPreviousPage() {
        const activePage = this.props.config.activePage;
        if (activePage < 2) return;

        this.props.onPageSelected(activePage - 1);
    }

    selectNextPage() {
        const activePage = this.props.config.activePage;
        if (activePage === this.props.config.pagesQuantity) return;

        this.props.onPageSelected(activePage + 1);
    }

    selectPage(number) {
        return () => {
            this.props.onPageSelected(number);
        };
    }

    render() {
        const that = this;
        const config = that.props.config;

        function computePaginationButtons() {
            const buttons = [];
            for (let i = 1; i <= config.pagesQuantity; i++) {
                const linkClass = i === config.activePage ? 'button is-primary' : 'button';

                buttons.push(<li key={i} onClick={that.selectPage(i)}>
                    <a className={linkClass}>{i}</a>
                </li>)
            }
            return buttons;
        }

        return <nav className="pagination">
                <a onClick={this.selectPreviousPage} className="button">Previous</a>
                <a onClick={this.selectNextPage} className="button">Next page</a>
                <ul>
                    {computePaginationButtons()}
                </ul>
            </nav>
    }
}


export default Pagination;