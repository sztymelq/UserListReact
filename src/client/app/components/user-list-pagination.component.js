import React from 'react';

class Pagination extends React.Component {
    constructor() {
        super();
        this.selectPage = this.selectPage.bind(this);
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
            for (let i = 1; i < config.pagesQuantity; i++) {
                const linkClass = i === config.activePage ? 'button is-primary' : 'button';

                buttons.push(<li key={i} onClick={that.selectPage(i)}>
                    <a className={linkClass}>{i}</a>
                </li>)
            }
            return buttons;
        }

        return <nav className="pagination">
            <a className="button">Previous</a>
            <a className="button">Next page</a>
            <ul>
                {computePaginationButtons()}
            </ul>
        </nav>
    }
}


export default Pagination;